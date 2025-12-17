# FAZA 1: SETUP & KONFIGURACJA - Szczegółowa Dokumentacja

## Przegląd FAZY 1

**Czas realizacji:** 2 tygodnie
**Cel:** Przygotowanie infrastruktury WordPress Headless + Next.js do pracy

Faza 1 obejmuje:
- ✓ WordPress REST API security hardening
- ✓ WooCommerce optimization
- ✓ LearnDash LMS configuration
- ✓ JWT Authentication setup
- ✓ Next.js project configuration
- ✓ GitHub Actions CI/CD pipeline

---

## TASK 1.1: WordPress REST API Security Hardening

### Cel:
Zabezpieczyć WordPress REST API przed nieautoryzowanym dostępem

### Checklist:

#### Step 1: Install "Application Passwords" Plugin
```bash
# Login to WordPress Admin
WordPress Admin > Pluginy > Add New
Search: "Application Passwords"
Install and Activate
```

#### Step 2: Create Application Password for Next.js
```
WordPress Admin > Users > Your Profile
Download to Application Passwords section
Application Password Name: "Pan Akompaniator Next.js"
Copy generated password -> paste into .env file:
  WP_API_PASSWORD=your_copied_password
```

#### Step 3: Enable JWT Authentication
```bash
# Install JWT Auth plugin
WordPress Admin > Plugins > Add New
Search: "JWT Authentication for WP-API"
Install: "JWT Authentication for WP-API" by Enrique Chavez
```

#### Step 4: Configure JWT
```
WordPress Admin > Settings > JWT Authentication
Generate JWT Secret Key (copy to .env):
  NEXT_AUTH_SECRET=your_jwt_secret_key_here
```

#### Step 5: Test WordPress API Endpoint
```bash
# Test REST API without authentication
curl https://panakompaniator.pl/wp-json/wp/v2/posts?_embed=true

# Test with JWT Authentication
curl -X POST https://panakompaniator.pl/wp-json/jwt-auth/v1/token \
  -d "username=YOUR_WP_USER&password=YOUR_APP_PASSWORD" \
  -H "Content-Type: application/json"

# Response should be:
{
  "success": true,
  "statusCode": 200,
  "code": "jwt_auth_valid_credential",
  "message": "Credential is valid",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

## TASK 1.2: WooCommerce Optimization

### Cel:
Skonfigurować WooCommerce dla Next.js API

### Checklist:

#### Step 1: Create WooCommerce REST API Keys
```
WordPress Admin > WooCommerce > Settings > Advanced > REST API
Click "Add key"
Description: "Pan Akompaniator Next.js"
Permissions: Read/Write
Copy Consumer Key & Secret:
  WOO_CONSUMER_KEY=ck_...
  WOO_CONSUMER_SECRET=cs_...
```

#### Step 2: Test WooCommerce API
```bash
# List all products
curl https://panakompaniator.pl/wp-json/wc/v3/products \
  -u ck_xxx:cs_xxx

# Response: Array of products with all metadata
```

#### Step 3: Configure Product Categories
```
WordPress Admin > Products > Categories
Ensure categories exist:
  - Kursy (Courses)
  - Podkłady (Tracks)
  - Materiały (Materials)
```

#### Step 4: Setup Product Variations (for tracks)
```
WordPress Admin > Products > Add New
Product Type: Variable
Attributes: Key (C Major, A Minor, etc.)
Variations: Auto-generate
```

---

## TASK 1.3: LearnDash LMS Configuration

### Cel:
Skonfigurować kursy i tradycyjne materiały w LearnDash

### Checklist:

#### Step 1: Create Course Structure
```
WordPress Admin > LearnDash LMS > Courses > Add New
Course Title: "Jak śpiewać w różnych tonacjach" 
Course Description: "..."
Course Price: 49.99 zł
Course Duration: 4 weeks
```

#### Step 2: Add Course Lessons
```
Course Dashboard > Add Lesson
Lesson 1: Podstawy techniki vokalnej
Lesson 2: Trenowanie oddychu
Lesson 3: Interpretacja utworu
Lesson 4: Praktyka z podkładami
```

#### Step 3: Add Quizzes (optional for Phase 2)
```
Lesson > Add Quiz
Question Type: Multiple Choice
Score system: 70% pass
```

#### Step 4: Test LearnDash REST API
```bash
curl https://panakompaniator.pl/wp-json/ldlms/v2/courses \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## TASK 1.4: JWT Authentication Setup (Next.js Side)

### Cel:
Skonfigurować NextAuth.js do bezpiecznego logowania

### Checklist:

#### Step 1: Install NextAuth.js
```bash
cd pan-akompaniator
npm install next-auth @next-auth/core jose
```

#### Step 2: Create [...nextauth].ts
```bash
Create: pages/api/auth/[...nextauth].ts
```

Content:
```typescript
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "WordPress",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        // Call WordPress JWT endpoint
        const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_ENDPOINT}/jwt-auth/v1/token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.data.token) return null;

        return {
          id: credentials.username,
          name: credentials.username,
          token: data.data.token,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  jwt: { secret: process.env.NEXT_AUTH_SECRET },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = (user as any).token;
      return token;
    },
    async session({ session, token }) {
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
```

#### Step 3: Create Login Hook
```typescript
// lib/auth/useLogin.ts
import { signIn } from "next-auth/react";

export const useLogin = () => {
  const handleLogin = async (username: string, password: string) => {
    const result = await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
    return result;
  };
  return { handleLogin };
};
```

---

## TASK 1.5: Next.js Project Configuration

### Cel:
Skonfigurować Next.js dla WordPress Headless integration

### Checklist:

#### Step 1: Update next.config.js
```javascript
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_WP_API_ENDPOINT: process.env.NEXT_PUBLIC_WP_API_ENDPOINT,
    NEXT_PUBLIC_WOO_API_ENDPOINT: process.env.NEXT_PUBLIC_WOO_API_ENDPOINT,
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

#### Step 2: Create .env.local (for local development)
```bash
cp .env.example .env.local
# Fill in all values from your WordPress installation
```

#### Step 3: Test Local Development
```bash
npm run dev
# Visit http://localhost:3000
# Should render home page successfully
```

---

## TASK 1.6: GitHub Actions CI/CD Pipeline

### Cel:
Skonfigurować automated testing i deployment

### Checklist:

#### Step 1: Create Workflow File
```bash
mkdir -p .github/workflows
Create: .github/workflows/phase-1-setup.yml
```

Content:
```yaml
name: Phase 1 - Build & Test

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  setup-and-test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint code
        run: npm run lint
      
      - name: Build Next.js
        run: npm run build
        env:
          NEXT_PUBLIC_WP_API_ENDPOINT: ${{ secrets.WP_API_ENDPOINT }}
          NEXT_PUBLIC_WOO_API_ENDPOINT: ${{ secrets.WOO_API_ENDPOINT }}
          NEXT_AUTH_SECRET: ${{ secrets.NEXT_AUTH_SECRET }}
      
      - name: Test API Integration
        run: npm run test:api
        env:
          WP_API_USERNAME: ${{ secrets.WP_API_USERNAME }}
          WP_API_PASSWORD: ${{ secrets.WP_API_PASSWORD }}
```

#### Step 2: Add GitHub Secrets
```
GitHub Repo > Settings > Secrets and variables > Actions > New repository secret

Add secrets:
  - WP_API_ENDPOINT
  - WP_API_USERNAME
  - WP_API_PASSWORD
  - WOO_CONSUMER_KEY
  - WOO_CONSUMER_SECRET
  - NEXT_AUTH_SECRET
```

---

## Validation Checklist - Koniec FAZY 1

- [ ] WordPress REST API responds with JWT token
- [ ] WooCommerce API returns products and categories
- [ ] LearnDash courses visible via REST API
- [ ] Next.js builds without errors locally
- [ ] NextAuth.js login flow works
- [ ] GitHub Actions workflow passes
- [ ] .env.local fully populated
- [ ] All API endpoints tested with Postman/curl

---

## Troubleshooting

### Błąd: "REST API access denied"
**Rozwiązanie:** Upewnij się, że Application Password jest prawidłowo skonfigurowana w WordPress

### Błąd: "JWT token invalid"
**Rozwiązanie:** Zregeneruj JWT Secret Key w WordPress > Settings > JWT Authentication

### Błąd: "Next.js build fails"
**Rozwiązanie:** Sprawdź czy wszystkie zmienne env są ustawione w .env.local

---

## Next Steps
Po ukończeniu FAZY 1:
→ Przejdź do FAZA 2: FRONTEND DEVELOPMENT (landing page, auth UI, kursy grid, etc.)

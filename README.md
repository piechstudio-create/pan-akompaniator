<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1iw4KliO2VTS8HaIj4fszrV5N-o95jhFs

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## 🚀 Next.js 15 Modernization

This project has been migrated to a modern Next.js 15 architecture with TypeScript support and headless CMS capabilities.

### Tech Stack

- **Framework**: Next.js 15.0.0
- **UI Framework**: React 19.0.0-rc
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite + Next.js
- **State Management**: Zustand
- **HTTP Client**: Axios

### Getting Started with Next.js

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration.

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

### Project Structure

```
├── components/     # Reusable React components
├── pages/         # Next.js pages and API routes
├── context/       # React context providers
├── services/      # API and utility services
├── public/        # Static assets
├── styles/        # Global styles
└── next.config.js # Next.js configuration
```

### Key Features

- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ API routes for backend functionality
- ✅ Image optimization
- ✅ TypeScript support
- ✅ CSS optimization with Tailwind CSS

### Development Guidelines

- Always use TypeScript for new components
- Follow the existing folder structure
- Keep components in `components/` folder
- API routes go in `pages/api/`
- Use environment variables for configuration

### Contributing

Feel free to submit issues and enhancement requests!

---

**Last updated**: December 16, 2025

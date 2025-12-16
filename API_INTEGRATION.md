# WordPress REST API Integration Guide

## Overview

This document describes how to integrate the Next.js 15 frontend with the WordPress REST API backend for Pan Akompaniator platform.

## API Endpoints

### Base URL
```
https://panakompaniator.pl/wp-json/wp/v2
https://panakompaniator.pl/wp-json/wc/v3
```

### Available Endpoints

#### WooCommerce API (v3)
- **Products**: `/wc/v3/products`
- **Categories**: `/wc/v3/products/categories`
- **Orders**: `/wc/v3/orders` (requires authentication)
- **Customers**: `/wc/v3/customers` (requires authentication)
- **Coupons**: `/wc/v3/coupons`

#### WordPress API (v2)
- **Posts**: `/wp/v2/posts`
- **Pages**: `/wp/v2/pages`
- **Categories**: `/wp/v2/categories`
- **Users**: `/wp/v2/users`
- **Custom Post Types**: `/wp/v2/custom-type`

## Authentication

### JWT Authentication (Recommended)
For protected endpoints, use JWT (JSON Web Tokens):

1. **Login Endpoint**: `POST /wp-json/jwt-auth/v1/token`
   ```bash
   curl -X POST https://panakompaniator.pl/wp-json/jwt-auth/v1/token \
     -H "Content-Type: application/json" \
     -d '{"username":"user","password":"password"}'
   ```

2. **Response**:
   ```json
   {
     "token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
     "user_email": "user@example.com",
     "user_nicename": "user"
   }
   ```

3. **Usage**: Include token in Authorization header:
   ```bash
   Authorization: Bearer YOUR_JWT_TOKEN
   ```

### Basic Authentication
For development/testing:
```bash
Authorization: Basic base64(username:password)
```

## Next.js Integration Examples

### 1. Fetch Products
```typescript
// services/woocommerce.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://panakompaniator.pl/wp-json';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/wc/v3/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
```

### 2. Fetch Posts
```typescript
export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/posts?per_page=10`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
```

### 3. Create Order (Authenticated)
```typescript
export const createOrder = async (token: string, orderData: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/wc/v3/orders`,
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
```

### 4. User Login
```typescript
export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/jwt-auth/v1/token`,
      { username, password }
    );
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
```

## CORS Configuration

If you encounter CORS issues, ensure the WordPress REST API allows cross-origin requests:

1. Install and configure CORS plugin
2. Or add to wp-config.php:
```php
define('REST_REQUEST', true);
```

## Rate Limiting

- **Public Endpoints**: 100 requests per minute
- **Authenticated Endpoints**: 500 requests per minute

## Error Handling

```typescript
interface APIError {
  code: string;
  message: string;
  data: {
    status: number;
  };
}

try {
  const data = await getProducts();
} catch (error) {
  const apiError = error as APIError;
  console.error(`API Error: ${apiError.code} - ${apiError.message}`);
}
```

## Environment Variables

Add to `.env.local`:
```
NEXT_PUBLIC_API_URL=https://panakompaniator.pl/wp-json
API_JWT_SECRET=your_jwt_secret_key
API_CONSUMER_KEY=your_woocommerce_api_key
API_CONSUMER_SECRET=your_woocommerce_api_secret
```

## Testing

Use Postman or curl to test endpoints:

```bash
# Get products
curl https://panakompaniator.pl/wp-json/wc/v3/products

# Get posts
curl https://panakompaniator.pl/wp-json/wp/v2/posts
```

## Documentation

- [WordPress REST API Docs](https://developer.wordpress.org/rest-api/)
- [WooCommerce REST API Docs](https://woocommerce.com/document/woocommerce-rest-api/)
- [JWT Authentication Plugin](https://github.com/Tmeister/wp-jwt-auth)

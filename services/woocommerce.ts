// WooCommerce REST API Service
import crypto from 'crypto';

const WOO_API_BASE = 'https://panakompaniator.pl/wp-json/wc/v3';
const WOO_CONSUMER_KEY = process.env.WOO_CONSUMER_KEY || '';
const WOO_CONSUMER_SECRET = process.env.WOO_CONSUMER_SECRET || '';

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  description: string;
  short_description: string;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  images: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  attributes: Array<{
    id: number;
    name: string;
    options: string[];
  }>;
  downloads?: Array<{
    id: string;
    name: string;
    file: string;
  }>;
}

// Generate OAuth 1.0a signature for WooCommerce
function generateOAuthSignature(url: string, method: string = 'GET') {
  const timestamp = Math.floor(Date.now() / 1000);
  const nonce = crypto.randomBytes(16).toString('hex');
  
  const params = {
    oauth_consumer_key: WOO_CONSUMER_KEY,
    oauth_timestamp: timestamp.toString(),
    oauth_nonce: nonce,
    oauth_signature_method: 'HMAC-SHA256',
    oauth_version: '1.0',
  };
  
  // Sort parameters
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${encodeURIComponent(params[key as keyof typeof params])}`)
    .join('&');
  
  const baseString = `${method}&${encodeURIComponent(url)}&${encodeURIComponent(sortedParams)}`;
  const signingKey = `${encodeURIComponent(WOO_CONSUMER_SECRET)}&`;
  const signature = crypto.createHmac('sha256', signingKey).update(baseString).digest('base64');
  
  return {
    ...params,
    oauth_signature: signature,
  };
}

// Build authenticated URL
function buildAuthUrl(endpoint: string): string {
  const url = `${WOO_API_BASE}${endpoint}`;
  const oauthParams = generateOAuthSignature(url);
  const queryString = Object.entries(oauthParams)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  return `${url}?${queryString}`;
}

// Fetch all products
export async function getProducts(params?: {
  per_page?: number;
  page?: number;
  category?: string;
}): Promise<WooProduct[]> {
  try {
    let endpoint = '/products';
    if (params) {
      const queryParams = new URLSearchParams();
      if (params.per_page) queryParams.append('per_page', params.per_page.toString());
      if (params.page) queryParams.append('page', params.page.toString());
      if (params.category) queryParams.append('category', params.category);
      endpoint += `?${queryParams.toString()}`;
    }
    
    const url = buildAuthUrl(endpoint);
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error(`WooCommerce API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Fetch single product
export async function getProduct(id: number): Promise<WooProduct | null> {
  try {
    const url = buildAuthUrl(`/products/${id}`);
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error(`WooCommerce API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

// Fetch products by category
export async function getProductsByCategory(categorySlug: string): Promise<WooProduct[]> {
  return getProducts({ category: categorySlug, per_page: 100 });
}

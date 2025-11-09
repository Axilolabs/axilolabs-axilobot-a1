/**
 * API Dashboard Configuration
 * 
 * This file contains all API endpoint definitions.
 * Add, remove, or modify endpoints here without touching the main dashboard code.
 */

/**
 * API Dashboard Configuration
 * 
 * This file contains all API endpoint definitions for the dashboard.
 * To add a new API:
 * 1. Add it to the appropriate category's endpoints array
 * 2. Or create a new category if needed
 * 3. No need to modify page.tsx - it automatically imports from here
 * 
 * Example:
 * {
 *   method: 'POST',
 *   path: '/api/your-endpoint',
 *   description: 'What this endpoint does',
 *   headers: [{ key: 'Content-Type', value: 'application/json' }],
 *   body: JSON.stringify({ example: 'data' }, null, 2), // optional for GET requests
 *   requiresAuth: true // or false
 * }
 */

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  headers: { key: string; value: string }[];
  body?: string;
  requiresAuth: boolean;
}

export interface ApiCategory {
  name: string;
  description: string;
  endpoints: ApiEndpoint[];
}

export const apiCategories: ApiCategory[] = [
  {
    name: 'Authentication',
    description: 'User authentication and account management',
    endpoints: [
      {
        method: 'POST',
        path: '/api/auth/signup',
        description: 'Register a new customer account',
        headers: [
          { key: 'Content-Type', value: 'application/json' }
        ],
        body: JSON.stringify({
          email: 'user@example.com',
          password: 'SecurePass123!',
          company_name: 'Example Company'
        }, null, 2),
        requiresAuth: false
      },
      {
        method: 'POST',
        path: '/api/auth/login',
        description: 'Login with email and password',
        headers: [
          { key: 'Content-Type', value: 'application/json' }
        ],
        body: JSON.stringify({
          email: 'user@example.com',
          password: 'SecurePass123!'
        }, null, 2),
        requiresAuth: false
      },
      {
        method: 'GET',
        path: '/api/auth/profile',
        description: 'Get authenticated user profile',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Authorization', value: 'Bearer YOUR_ACCESS_TOKEN' }
        ],
        requiresAuth: true
      },
      {
        method: 'POST',
        path: '/api/auth/logout',
        description: 'Logout current user',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Authorization', value: 'Bearer YOUR_ACCESS_TOKEN' }
        ],
        requiresAuth: true
      },
      {
        method: 'POST',
        path: '/api/auth/forgot-password',
        description: 'Request password reset link',
        headers: [
          { key: 'Content-Type', value: 'application/json' }
        ],
        body: JSON.stringify({
          email: 'user@example.com'
        }, null, 2),
        requiresAuth: false
      },
      {
        method: 'POST',
        path: '/api/auth/reset-password',
        description: 'Reset password with token from email',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Authorization', value: 'Bearer RESET_TOKEN_FROM_EMAIL' }
        ],
        body: JSON.stringify({
          password: 'NewSecurePass123!'
        }, null, 2),
        requiresAuth: true
      },
      {
        method: 'POST',
        path: '/api/auth/change-password',
        description: 'Change password for logged-in user',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Authorization', value: 'Bearer YOUR_ACCESS_TOKEN' }
        ],
        body: JSON.stringify({
          current_password: 'OldPassword123!',
          new_password: 'NewSecurePass123!'
        }, null, 2),
        requiresAuth: true
      }
    ]
  },
];

export const defaultExpandedCategories: Record<string, boolean> = {
  'Authentication': true,
  'Chatbot Management': false,
  'Analytics': false,
};

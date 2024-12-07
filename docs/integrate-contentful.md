# Integrating Contentful with Zustand in an Nx-Managed React Monorepo

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Steps](#steps)
   1. [Set Up Contentful](#1-set-up-contentful)
   2. [Configure Environment Variables](#2-configure-environment-variables)
   3. [Create an API Service Library](#3-create-an-api-service-library)
   4. [Implement State Management with Zustand](#4-implement-state-management-with-zustand)
   5. [Integrate Components into the Application](#5-integrate-components-into-the-application)
   6. [Ensure Type Safety](#6-ensure-type-safety)
   7. [Test the Integration](#7-test-the-integration)
   8. [Maintain Security](#8-maintain-security)

## Introduction

Contentful is a headless Content Management System (CMS) that decouples the content repository (backend) from the presentation layer (frontend). This separation allows developers to deliver content seamlessly across various platforms and devices through APIs. Utilizing a headless CMS like Contentful in a Single Page Application (SPA) offers several advantages:

- **Flexibility**: Content can be reused and presented across multiple channels without being tied to a specific frontend framework.
- **Scalability**: Facilitates the management of content for diverse platforms such as websites, mobile apps, and IoT devices.
- **Enhanced Developer Experience**: Developers can select their preferred frontend technologies while content creators manage content independently.

This guide provides a step-by-step approach to integrating Contentful into an Nx-managed React monorepo and implementing state management using Zustand.

## Prerequisites

- An existing Nx-managed React monorepo.
- Node.js and npm installed on your development machine.

## Steps

### 1. Set Up Contentful

1. **Create a Contentful Account**: Sign up at Contentful and create a new space.
2. **Obtain API Credentials**:
   - Navigate to **Settings > API keys** in your Contentful dashboard.
   - Create a new API key to retrieve your Space ID and Content Delivery API - access token.

### 2. Configure Environment Variables

In the root directory of your monorepo, create a `.env` file.

Add the following environment variables:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

Replace your_space_id and your_access_token with the values obtained from Contentful.

### 3. Create an API Service Library

Generate a New Library:

```bash
nx generate @nrwl/js:library api
```

Install the Contentful SDK:

```bash
npm install contentful
```

Set Up the Contentful Client:

In libs/api/src/lib/, create a file named contentfulClient.ts:

```typescript
import { createClient } from 'contentful';

const client = createClient({
space: process.env.CONTENTFUL_SPACE_ID,
accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default client;
```

Define Data Fetching Functions:

In the same directory, create blogService.ts:

```typescript
import client from './contentfulClient';

export const fetchBlogPosts = async () => {
const entries = await client.getEntries({ content_type: 'blogPost' });
return entries.items;
};

export const fetchBlogPostById = async (id: string) => {
const entry = await client.getEntry(id);
return entry;
};
```

### 4. Implement State Management with Zustand

Install Zustand:

```bash
npm install zustand
```

Create a Zustand Store:

In libs/api/src/lib/, create useBlogStore.ts:

```typescript
import create from 'zustand';
import { fetchBlogPosts } from './blogService';

interface BlogState {
posts: any[];
fetchPosts: () => Promise<void>;
}

const useBlogStore = create<BlogState>((set) => ({
posts: [],
fetchPosts: async () => {
const posts = await fetchBlogPosts();
set({ posts });
},
}));

export default useBlogStore;
```

### 5. Integrate Components into the Application

In your React application (e.g., apps/your-app/), use the Zustand store and UI components:

```typescript
import React, { useEffect } from 'react';
import useBlogStore from '@your-org/api/useBlogStore';
import { BlogList } from '@your-org/ui';

const BlogPage = () => {
const { posts, fetchPosts } = useBlogStore();

useEffect(() => {
fetchPosts();
}, [fetchPosts]);

return <BlogList posts={posts} />;
};

export default BlogPage;
```

### 6. Ensure Type Safety

Define TypeScript interfaces for your Contentful data models to maintain type safety across your application.

### 7. Test the Integration

Run your application to verify that blog posts are fetched from Contentful and displayed correctly.

### 8. Maintain Security

Ensure that your .env file is included in .gitignore to prevent sensitive information from being exposed in version control.
By following this guide, you'll establish a clean and maintainable architecture for your React monorepo, effectively integrating Contentful for content management and Zustand for state management.

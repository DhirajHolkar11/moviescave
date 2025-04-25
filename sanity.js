import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,  // Use without NEXT_PUBLIC_ prefix
  dataset: process.env.SANITY_DATASET,      // Use without NEXT_PUBLIC_ prefix
  useCdn: false,
  apiVersion: '2023-12-01',
});

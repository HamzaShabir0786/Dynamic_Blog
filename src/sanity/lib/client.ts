import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.MY_API_VERSION || "2024-12-30",
  token: process.env.MY_TOKEN_ACCESS,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

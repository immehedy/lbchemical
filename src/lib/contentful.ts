// lib/contentful.ts
import * as contentful from 'contentful';
import { EntrySkeletonType } from 'contentful';

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchEntries<
  T extends EntrySkeletonType = EntrySkeletonType
>(contentType: string) {
  const entries = await client.getEntries<T>({ content_type: contentType });
  return entries.items;
}

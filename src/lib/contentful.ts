// lib/contentful.ts
import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Fully dynamic fetchEntries with no type restriction on fields
export async function fetchEntries(contentType: string): Promise<any[]> {
  const normalizedType = contentType.toLowerCase().trim()

  const entries = await client.getEntries({ content_type: normalizedType })
  return entries.items
}

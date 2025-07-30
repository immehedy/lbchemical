import { fetchEntries } from '@/lib/contentful'
import Image from 'next/image'
import React from 'react'

async function Industries() {
  const industryGrid = await fetchEntries('industryGrid')

  if (!industryGrid || industryGrid.length === 0) {
    return null
  }

  const { title, subtitle, industryItem } = industryGrid[0].fields

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industryItem.map((industry: any) => {
            const imageUrl = industry?.fields?.image?.fields?.file?.url
            const fallbackUrl = `https://placehold.co/300x128.png?text=${encodeURIComponent(industry.fields.name)}`
            const finalImageUrl = imageUrl ? `https:${imageUrl}` : fallbackUrl
            const imageAlt =
              industry?.fields?.imageDesc || industry?.fields?.name || 'Industry image'

            return (
              <div
                key={industry.fields.name}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative h-32">
                  <Image
                    src={finalImageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{industry.fields.name}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Industries

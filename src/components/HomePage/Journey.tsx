import { fetchEntries } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import React from 'react'

async function Journey() {
  const journey = await fetchEntries('journey')

  if (!journey || journey.length === 0) {
    return null
  }
  
  const {title, subtitle, begining, beginingImage, vision, visionImage,presentTitle, presentDesc, lists} = journey[0].fields

  const begImageUrl = `https:${beginingImage?.fields?.file?.url}`
  const begImageAlt = beginingImage?.fields?.title || 'Beginning image'

  const visionImageUrl = `https:${visionImage?.fields?.file?.url}`
  const visionImageAlt = visionImage?.fields?.title || 'vision image'
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </div>
            <div className="text-base sm:text-lg md:text-xl text-gray-600">
            {documentToReactComponents(subtitle)}
            </div>
          </div>

          {/* Journey Content Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
            <div className="prose prose-base sm:prose-lg max-w-none">

              {/* Block 1 - The Beginning */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
                <div>
                {documentToReactComponents(begining)}
                </div>
                <div className="relative w-full h-auto">
                  <Image
                    src={begImageUrl}
                    alt={begImageAlt}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Block 2 - The Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
                <div className="order-2 md:order-1 relative w-full h-auto">
                  <Image
                    src={visionImageUrl}
                    alt={visionImageAlt}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="order-1 md:order-2">
                {documentToReactComponents(vision)}
                </div>
              </div>

              {/* Block 3 - Today & Beyond */}
              <div className="text-center bg-blue-50 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{presentTitle}</h3>
                {documentToReactComponents(presentDesc)}
              </div>

              {/* Timeline Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {lists.map((item:any, index:number) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <div className="text-sm sm:text-base text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey

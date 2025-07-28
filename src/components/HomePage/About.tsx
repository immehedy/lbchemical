import { fetchEntries } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

async function About() {
  const about = await fetchEntries('about')

  if (!about || about.length === 0) {
    return null
  }
  const {title, subtitle, lists, image} = about[0].fields
  const imageUrl = `https:${image?.fields?.file?.url}`
  const imageAlt = image?.fields?.title || 'About image'
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {documentToReactComponents(title)}
            </div>

            <div className="text-base sm:text-lg text-gray-600 mb-6 max-w-prose mx-auto sm:mx-0">
            {documentToReactComponents(subtitle)}
            </div>

            <div className="space-y-6 max-w-md mx-auto sm:mx-0">
              {lists.map((item: any, i:number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item?.title}</h3>
                    <p className="text-gray-600">{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={500}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

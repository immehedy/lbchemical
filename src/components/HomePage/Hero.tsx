import { fetchEntries } from '@/lib/contentful'
import { Badge, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const revalidate = 3600

async function Hero() {
  const herodata = await fetchEntries('hero')

  if (!herodata || herodata.length === 0) {
    return null
  }

  const fields = herodata[0].fields
  const {
    badgeText,
    title,
    highlightedtext,
    subtitle,
    backgroundimage
  } = fields

  const imageUrl = `https:${backgroundimage?.fields?.file?.url}`
  const imageAlt = backgroundimage?.fields?.title || 'Hero image'

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center sm:text-left">
            <p className='mb-4 bg-blue-100 py-1 px-2 rounded-full w-1/2 text-blue-800 text-center text-sm font-semibold'>
            {badgeText}
            </p>

            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {documentToReactComponents(title)}
              <span className="text-blue-600">
                {documentToReactComponents(highlightedtext)}
              </span>
            </div>

            <div className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-prose mx-auto sm:mx-0">
              {documentToReactComponents(subtitle)}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                <Phone className="mr-2 h-5 w-5" />
                Get Consultation
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-medium border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                View Services
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={500}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

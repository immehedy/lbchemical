import { fetchEntries } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'

async function Services() {
  const services = await fetchEntries('services')
  const products = await fetchEntries('products')

  if (!services || services.length === 0 || !products || products.length === 0) {
    return null
  }

  const { title, subtitle } = services[0].fields

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-4xl font-bold text-gray-900 mb-4">
            {documentToReactComponents(title)}
          </div>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto">
            {documentToReactComponents(subtitle)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-12">
          {products.map((product, index) => {
            const {
              image,
              company,
              name,
              subdetails,
              desclist
            } = product.fields

            const imageUrl = `https:${image?.fields?.file?.url}`
            const imageAlt = image?.fields?.title || 'Product image'

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`mb-2 ${
                      company.includes('LB Enterprise') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    } text-xs px-2 py-1 rounded-full font-semibold`}
                  >
                    {company}
                  </div>

                  <CardTitle>{documentToReactComponents(name)}</CardTitle>
                  <CardDescription>{documentToReactComponents(subdetails)}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <ul className="space-y-2 text-sm text-gray-600">
                    {desclist?.content?.map((item: any, idx: number) => {
                      console.log("cont", item)
                      const text = item?.content
                      return (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {text}
                        </li>
                      )
                    })}
                    
                  </ul> */}
                  <div className="space-y-2 text-sm text-gray-600">
  {documentToReactComponents(desclist)}
</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

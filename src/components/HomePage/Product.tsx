'use client'

import React from 'react'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'

type ProductProps = {
  metaTitle: string
  metaDescription: string
  image: any
  company: string
  name: any
  subdetails: any
  desclist: any
  index?: number
  pdf?: any // or change to string if you're passing just a URL
}

function Product({
  metaTitle,
  metaDescription,
  image,
  company,
  name,
  subdetails,
  desclist,
  index,
  pdf,
}: ProductProps) {
  const imageUrl = `https:${image?.fields?.file?.url}`
  const imageAlt = image?.fields?.title || 'Product image'
  const pdfUrl = pdf?.fields?.file?.url ? `https:${pdf.fields.file.url}` : null
  const pdfName = pdf?.fields?.file?.fileName || 'specifications.pdf'

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

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
              company?.includes('LB Enterprise')
                ? 'bg-green-100 text-green-800'
                : 'bg-blue-100 text-blue-800'
            } text-xs px-2 py-1 rounded-full font-semibold`}
          >
            {company}
          </div>

          <CardTitle>{documentToReactComponents(name)}</CardTitle>
          <CardDescription>
            {documentToReactComponents(subdetails)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            {documentToReactComponents(desclist)}
          </div>

          {pdfUrl && (
            <a
              href={pdfUrl}
              download={pdfName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-all"
            >
              ⬇ Download Specs
            </a>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default Product

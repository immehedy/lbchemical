import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Water Treatment Solutions Since 1987
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-prose mx-auto sm:mx-0">
              LB Chemical Industries, established in 2015, focuses on manufacturing premium Aluminum Sulfate, while
              our founding company LB Enterprise (since 1987) continues to supply complementary water treatment
              chemicals. Together, we provide comprehensive solutions to industries across the globe with our
              commitment to excellence and sustainability.
            </p>

            <div className="space-y-6 max-w-md mx-auto sm:mx-0">
              {[
                {
                  title: 'Certified Expertise',
                  description: 'ISO 9001:2015 certified with industry-leading expertise',
                },
                {
                  title: 'Sustainable Solutions',
                  description: 'Environmentally responsible water treatment technologies',
                },
                {
                  title: 'Global Reach',
                  description: 'Serving clients across multiple continents and industries',
                },
              ].map(({ title, description }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <Image
              src="/images/factory.jpg"
              alt="LB Chemical Industries Manufacturing Facility"
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

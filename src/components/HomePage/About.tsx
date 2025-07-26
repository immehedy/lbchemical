import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Water Treatment Solutions Since 1987
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                LB Chemical Industries, established in 2015, focuses on manufacturing premium Aluminum Sulfate, while
                our founding company LB Enterprise (since 1987) continues to supply complementary water treatment
                chemicals. Together, we provide comprehensive solutions to industries across the globe with our
                commitment to excellence and sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Certified Expertise</h3>
                    <p className="text-gray-600">ISO 9001:2015 certified with industry-leading expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sustainable Solutions</h3>
                    <p className="text-gray-600">Environmentally responsible water treatment technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Reach</h3>
                    <p className="text-gray-600">Serving clients across multiple continents and industries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* About section image */}
              <Image
                src="/images/factory.jpg"
                alt="LB Chemical Industries Manufacturing Facility"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
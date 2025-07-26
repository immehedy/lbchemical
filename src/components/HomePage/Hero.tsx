import { Badge, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section
        id="home"
        className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Trusted Water Treatment Solutions
              </Badge>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premium Aluminum Sulfate
                <span className="text-blue-600"> Manufacturing Excellence</span>
              </h1>

              <p className="text-md md:text-xl text-gray-600 mb-8 leading-relaxed">
                LB Chemical Industries specializes in manufacturing high-quality
                Aluminum Sulfate in three forms — Powder, Flakes, and Lumps.
                Through our core firm LB Enterprise, we also supply Polyaluminum
                Chloride (PAC), Polyacrylamide (PAM), and Bleaching Powder,
                providing comprehensive water treatment chemical solutions
                trusted by industries worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Consultation
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 font-medium border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                  View Services
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <Image
                src="/images/factory.jpg"
                alt="LB Chemical Industries Manufacturing Facility"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
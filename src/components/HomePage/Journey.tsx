import Image from 'next/image'
import React from 'react'

function Journey() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Founder's Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              A story of dedication, growth, and commitment to excellence
            </p>
          </div>

          {/* Journey Content Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
            <div className="prose prose-base sm:prose-lg max-w-none">

              {/* Block 1 - The Beginning */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The Beginning - 1987</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I began my journey in the chemical industry in 1987 with the establishment of{" "}
                    <strong>L.B Enterprise</strong>, initially focused on importing water treatment chemicals and
                    industrial accessories based on customer demand. Through years of dedication and hands-on
                    experience, I gained deep insights into the industry and recognized the growing need for
                    consistent, high-quality local manufacturing.
                  </p>
                </div>
                <div className="relative w-full h-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Early days of L.B Enterprise"
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
                    src="/images/factory.jpg"
                    alt="L.B Chemical Industries Manufacturing Facility"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The Vision - 2015</h3>
                  <p className="text-gray-600 leading-relaxed">
                    It was a humble beginning, driven by a passion to serve the industry with honesty and commitment.
                    This foundation laid the groundwork for something greater—<strong>L.B Chemical Industries</strong>.
                    With this vision, I founded L.B Chemical Industries in 2015 to produce aluminum sulfate, aiming to
                    ensure reliable supply and maintain strict quality standards.
                  </p>
                </div>
              </div>

              {/* Block 3 - Today & Beyond */}
              <div className="text-center bg-blue-50 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Today & Beyond</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Today, LB Chemical Industries is recognized as a trusted manufacturer and market leader in aluminum
                  sulfate production. Through our core firm LB Enterprise, we continue to supply high-quality PAC and
                  PAM products, ensuring our clients have access to a complete range of water treatment chemicals. Our
                  growth reflects our dedication to quality and the trust of our valued clients. We are not just
                  manufacturers—we are partners in progress.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey has always been guided by a commitment to <strong>quality</strong>,{" "}
                  <strong>customer satisfaction</strong>, and <strong>sustainable growth</strong>. These core values
                  continue to shape the path of L.B Chemical Industries as we move forward with confidence and purpose.
                </p>
              </div>

              {/* Timeline Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {[
                  { year: '1987', label: 'L.B Enterprise Founded' },
                  { year: '2015', label: 'L.B Chemical Industries Established' },
                  { year: 'Today', label: 'Market Leader in Aluminum Sulfate' },
                ].map((item, index) => (
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

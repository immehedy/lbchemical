import Image from 'next/image'
import React from 'react'

function Journey() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Founder's Journey</h2>
              <p className="text-xl text-gray-600">A story of dedication, growth, and commitment to excellence</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning - 1987</h3>
                    <p className="text-gray-600 leading-relaxed">
                      I began my journey in the chemical industry in 1987 with the establishment of{" "}
                      <strong>L.B Enterprise</strong>, initially focused on importing water treatment chemicals and
                      industrial accessories based on customer demand. Through years of dedication and hands-on
                      experience, I gained deep insights into the industry and recognized the growing need for
                      consistent, high-quality local manufacturing.
                    </p>
                  </div>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Early days of L.B Enterprise"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div className="md:order-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Vision - 2015</h3>
                    <p className="text-gray-600 leading-relaxed">
                      It was a humble beginning, driven by a passion to serve the industry with honesty and commitment.
                      This foundation laid the groundwork for something greater—<strong>L.B Chemical Industries</strong>
                      . With this vision, I founded L.B Chemical Industries in 2015 to produce aluminum sulfate, aiming
                      to ensure reliable supply and maintain strict quality standards.
                    </p>
                  </div>
                  <div className="md:order-1 relative">
                    <Image
                      src="/images/factory.jpg"
                      alt="L.B Chemical Industries Manufacturing Facility"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="text-center bg-blue-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Today & Beyond</h3>
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
                    continue to shape the path of L.B Chemical Industries as we move forward with confidence and
                    purpose.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1987</div>
                    <div className="text-sm text-gray-600">L.B Enterprise Founded</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2015</div>
                    <div className="text-sm text-gray-600">L.B Chemical Industries Established</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Today</div>
                    <div className="text-sm text-gray-600">Market Leader in Aluminum Sulfate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Journey
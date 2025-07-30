import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to optimize your water treatment systems? Reach out to our experts via phone, email, or visit our office.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+88 01711533605, +88 01897717462</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">
                    <a href="mailto:info@lbchemicalindustries.com" className="underline hover:text-blue-400">
                      info@lbchemicalindustries.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="text-gray-300">
                    47/4 Toyenbee Circular Road (3rd Floor),<br />
                    Dhaka-1100, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Map for Office Address */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="LB Chemical Industries Office Location"
                src="https://www.google.com/maps?q=47/4%20Toyenbee%20Circular%20Road%2C%20Dhaka-1100%2C%20Bangladesh&output=embed"
                width="100%"
                height="400"
                allowFullScreen={false}
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

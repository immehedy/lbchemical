import { Badge, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Services section content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Complete Water Treatment Chemical Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manufacturing excellence in Aluminum Sulfate through LB Chemical Industries, complemented by premium PAC
              and PAM supply through our core firm LB Enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/aluminum-sulfate-powder.jpg"
                    alt="Aluminum Sulfate Powder"
                    fill
                    className="object-cover"
                  />
                </div>
                <Badge className="mb-2 bg-blue-100 text-blue-800">Manufactured by LB Chemical Industries</Badge>
                <CardTitle>Aluminum Sulfate Powder</CardTitle>
                <CardDescription>
                  Fine powder form ideal for rapid dissolution and precise dosing applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High purity grade
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast dissolving
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Easy handling & storage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/aluminum-sulfate-flakes.jpg"
                    alt="Aluminum Sulfate Flakes"
                    fill
                    className="object-cover"
                  />
                </div>
                <Badge className="mb-2 bg-blue-100 text-blue-800">Manufactured by LB Chemical Industries</Badge>
                <CardTitle>Aluminum Sulfate Flakes</CardTitle>
                <CardDescription>
                  Crystalline flakes providing controlled dissolution and excellent coagulation properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Superior coagulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Controlled dissolution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dust-free handling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/aluminum-sulfate-lumps.jpg"
                    alt="Aluminum Sulfate Lumps"
                    fill
                    className="object-cover"
                  />
                </div>
                <Badge className="mb-2 bg-blue-100 text-blue-800">Manufactured by LB Chemical Industries</Badge>
                <CardTitle>Aluminum Sulfate Lumps</CardTitle>
                <CardDescription>
                  Large crystalline lumps for bulk applications and extended dissolution requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Long-lasting dissolution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bulk processing ideal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cost-effective solution
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/polyaluminum-chloride.jpg"
                    alt="Polyaluminum Chloride (PAC)"
                    fill
                    className="object-cover"
                  />
                </div>
                <Badge className="mb-2 bg-green-100 text-green-800">Supplied by LB Enterprise</Badge>
                <CardTitle>Polyaluminum Chloride (PAC)</CardTitle>
                <CardDescription>
                  Advanced coagulant with superior performance in water treatment and industrial processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High efficiency coagulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Wide pH range effectiveness
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Low dosage requirements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/polyacrylamide-pam.jpg"
                    alt="Polyacrylamide (PAM)"
                    fill
                    className="object-cover"
                  />
                </div>
                <Badge className="mb-2 bg-green-100 text-green-800">Supplied by LB Enterprise</Badge>
                <CardTitle>Polyacrylamide (PAM)</CardTitle>
                <CardDescription>
                  High-performance flocculant for enhanced solid-liquid separation and water clarification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellent flocculation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast settling rates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High molecular weight
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="/images/bleaching-powder.png" alt="Bleaching Powder" fill className="object-cover" />
                </div>
                <Badge className="mb-2 bg-green-100 text-green-800">Supplied by LB Enterprise</Badge>
                <CardTitle>Bleaching Powder</CardTitle>
                <CardDescription>
                  Powerful disinfectant and oxidizing agent for water treatment and industrial bleaching applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Strong disinfection properties
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Effective chlorine source
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-purpose applications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Services
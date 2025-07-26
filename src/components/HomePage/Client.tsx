import { CheckCircle, Droplets, Shield, Users, Zap } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'

function Client() {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to serve leading organizations across Bangladesh, delivering reliable aluminum sulfate
              solutions for their critical operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dhaka WASA */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Dhaka WASA</CardTitle>
                <CardDescription>
                  Dhaka Water Supply and Sewerage Authority - Major water treatment and distribution services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-blue-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Water Treatment Partner
                </div>
              </CardContent>
            </Card>

            {/* Chittagong WASA */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-cyan-600">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Chittagong WASA</CardTitle>
                <CardDescription>
                  Chittagong Water Supply and Sewerage Authority - Regional water management services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-cyan-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Water Treatment Partner
                </div>
              </CardContent>
            </Card>

            {/* Ghorashal Polash Fertilizer */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Ghorashal Polash Fertilizer PLC</CardTitle>
                <CardDescription>
                  Leading fertilizer manufacturing company requiring specialized chemical solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Industrial Chemical Supplier
                </div>
              </CardContent>
            </Card>

            {/* BSCIC Tannery Plant */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">BSCIC Tannery Plant Industrial Estate Savar</CardTitle>
                <CardDescription>
                  Bangladesh Small and Cottage Industries Corporation tannery operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-purple-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Tannery Process Partner
                </div>
              </CardContent>
            </Card>

            {/* Sodical Chemicals */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-600">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Sodical Chemicals Ltd</CardTitle>
                <CardDescription>
                  Chemical manufacturing company requiring high-quality aluminum sulfate solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-orange-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Chemical Industry Partner
                </div>
              </CardContent>
            </Card>

            {/* Bashundhara Paper Mills */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Bashundhara Paper Mills</CardTitle>
                <CardDescription>
                  Major paper manufacturing company utilizing aluminum sulfate for paper production
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-emerald-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Paper Industry Partner
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Success Summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
              <p className="text-lg text-gray-600">
                Our commitment to quality and reliability has earned us partnerships with Bangladesh's most prestigious
                organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Water Authorities</h4>
                <p className="text-sm text-gray-600">Serving major WASA organizations</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Industrial Giants</h4>
                <p className="text-sm text-gray-600">Supporting large-scale manufacturing</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Government Entities</h4>
                <p className="text-sm text-gray-600">Trusted by public sector organizations</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Long-term Partnerships</h4>
                <p className="text-sm text-gray-600">Building lasting business relationships</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                "Our diverse client portfolio demonstrates our ability to meet the unique requirements of various
                industries while maintaining the highest standards of quality and service."
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Client
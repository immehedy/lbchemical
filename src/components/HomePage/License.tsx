import { CheckCircle, Droplets, Shield, Users, Zap } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'

function License() {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mandatory Licenses & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to legal compliance and operational excellence is demonstrated through comprehensive
              licensing and certifications from Bangladesh regulatory authorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trade License */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Trade License</CardTitle>
                <CardDescription>
                  Required for legal permission to operate a business within a municipal area.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* Fire License */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-lg">Fire License</CardTitle>
                <CardDescription>Certifies that the premises meet fire safety regulations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* VAT Registration */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">VAT Registration</CardTitle>
                <CardDescription>
                  Needed to register for Value Added Tax and legally collect and remit VAT.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* Dhaka Chamber of Commerce */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Dhaka Chamber of Commerce</CardTitle>
                <CardDescription>
                  Confirms business registration and credibility for trade and networking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* BIDA Certificate */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-indigo-600">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">BIDA Certificate</CardTitle>
                <CardDescription>
                  Approval from BIDA is required for foreign or large-scale investment projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* Labor License */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-600">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Labor License</CardTitle>
                <CardDescription>Ensures compliance with labor laws and protection of workers' rights.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* Environment License */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Environment License</CardTitle>
                <CardDescription>
                  Mandates adherence to environmental regulations and pollution control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* Import License */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-600">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Import License</CardTitle>
                <CardDescription>Grants permission to legally import goods into Bangladesh.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* Income Tax Registration */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-pink-600">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-lg">Income Tax Registration</CardTitle>
                <CardDescription>
                  Mandates compliance with income tax regulations for business operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* ISO Certificate */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-600">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">ISO Certificate</CardTitle>
                <CardDescription>
                  Demonstrates that a company meets international standards for quality, safety, or efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>

            {/* TIN Certificate */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-600">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-gray-600" />
                </div>
                <CardTitle className="text-lg">TIN Certificate</CardTitle>
                <CardDescription>
                  Required for taxpayer identification and to legally file income tax in Bangladesh.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Valid & Active
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Regulatory Compliance</h3>
              <p className="text-lg text-gray-600">
                LB Chemical Industries maintains all mandatory licenses required for legal manufacturing operations in
                Bangladesh
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">11 Active Licenses</h4>
                <p className="text-sm text-gray-600">All mandatory permits and registrations</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                <p className="text-sm text-gray-600">Full adherence to Bangladesh regulations</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Environmental Safety</h4>
                <p className="text-sm text-gray-600">Certified eco-friendly operations</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Worker Protection</h4>
                <p className="text-sm text-gray-600">Labor law compliance and safety</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                "Our comprehensive licensing demonstrates our commitment to operating as a fully legal, environmentally
                responsible, and quality-focused manufacturing enterprise in Bangladesh."
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default License
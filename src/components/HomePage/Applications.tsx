import { Droplets, Shield, Users, Zap } from 'lucide-react'
import React from 'react'

function Applications() {
  return (
    <div className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Applications & Uses</h3>
        <p className="text-lg text-gray-600">Our aluminum sulfate products serve diverse industrial applications</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Water Treatment</h4>
          <p className="text-sm text-gray-600">Coagulation and flocculation in water purification</p>
        </div>

        <div className="text-center p-6 bg-green-50 rounded-lg">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Paper Industry</h4>
          <p className="text-sm text-gray-600">Sizing agent and retention aid in paper manufacturing</p>
        </div>

        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Textile Industry</h4>
          <p className="text-sm text-gray-600">Mordant for dyeing and printing processes</p>
        </div>

        <div className="text-center p-6 bg-orange-50 rounded-lg">
          <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Construction</h4>
          <p className="text-sm text-gray-600">Concrete accelerator and waterproofing agent</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Applications
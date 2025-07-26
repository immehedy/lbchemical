import Image from 'next/image'
import React from 'react'

function Industires() {
  return (
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Trusted by leading companies across diverse industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Manufacturing", image: "manufacturing plant with machinery and production lines" },
              { name: "Pharmaceuticals", image: "pharmaceutical laboratory with clean rooms and equipment" },
              { name: "Food & Beverage", image: "food processing plant with stainless steel equipment" },
              { name: "Power Generation", image: "power plant with cooling towers and electrical infrastructure" },
              { name: "Oil & Gas", image: "oil refinery with industrial pipes and processing units" },
              { name: "Mining", image: "mining operation with heavy machinery and mineral processing" },
              { name: "Textiles", image: "textile factory with looms and fabric production" },
              { name: "Chemicals", image: "chemical processing plant with reactors and distillation columns" },
              { name: "Hospitality", image: "hotel water treatment facility and swimming pool systems" },
              { name: "Healthcare", image: "hospital water treatment and purification systems" },
              { name: "Agriculture", image: "agricultural irrigation and water treatment systems" },
              { name: "Municipal", image: "municipal water treatment plant and distribution systems" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative h-32">
                  <Image
                    src={`/placeholder.svg?height=128&width=300&query=${industry.image}`}
                    alt={`${industry.name} industry`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Industires
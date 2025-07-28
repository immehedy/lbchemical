import { fetchEntries } from '@/lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Droplets, Shield, Users, Zap } from 'lucide-react'
import React from 'react'

async function Applications() {
  const iconMap = {
    Droplets,
    Shield,
    Zap,
    Users
  }
  const application = await fetchEntries('application')

  if (!application || application.length === 0) {
    return null
  }
  const {title, subtitle, lists} = application[0].fields
  
  return (
    <div className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="text-3xl font-bold text-gray-900 mb-4">{documentToReactComponents(title)}</div>
        <div className="text-lg text-gray-600">{documentToReactComponents(subtitle)}</div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {lists.map((item: any, idx: number) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap]
        return (
          <div key={idx} className={`text-center p-6 ${item.bgColor} rounded-lg`}>
            <Icon className={`h-8 w-8 ${item.iconColor} mx-auto mb-3`} />
            <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        )
      })}
    </div>
    </div>
  </div>
  )
}

export default Applications
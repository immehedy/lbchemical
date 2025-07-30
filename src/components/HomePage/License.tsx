import { fetchEntries } from '@/lib/contentful'
import { getColorClasses } from '@/lib/getColorClasses'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { CheckCircle, Droplets, LucideIcon, Shield, Users, Zap } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Shield,
  Users,
  Zap,
  CheckCircle
}

async function License() {
  const license = await fetchEntries('license')
  if (!license || license.length === 0) return null

  const {
    title,
    subtitle,
    lists,
    complianceTitle,
    complianceSubtitle,
    complianceLists,
    complianceFooter
  } = license[0].fields
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="text-xl text-gray-600 max-w-3xl mx-auto">
            {documentToReactComponents(subtitle)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lists.map((item: any, idx: number) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            const { bg, text, border } = getColorClasses(item.color)
            return (
              <Card
                key={idx}
                className={`hover:shadow-lg transition-shadow border-l-4 border-l-${item.color}-600`}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${bg} rounded-lg flex items-center justify-center mb-4`}
                  >
                    {Icon && <Icon className={`h-8 w-8 text-${item.color}-600`} />}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                {item.badge && (
                  <CardContent>
                    <div className="flex items-center text-sm text-purple-600 font-medium">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {item.badge}
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>

          {/* Compliance Summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{complianceTitle}</h3>
              <div className="text-lg text-gray-600">
              {documentToReactComponents(complianceSubtitle)}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceLists.map((item: any, idx: number) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <div key={idx} className="text-center p-6 bg-white rounded-lg">
                  <div
                    className={`w-12 h-12 bg-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    {Icon && <Icon className="h-6 w-6 text-white" />}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>

            <div className="mt-8 text-center">
              <div className="text-gray-600 italic">
              {documentToReactComponents(complianceFooter)}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default License
type ColorClass = {
    bg: string
    bg600: string
    text: string
    border: string
  }
  
  const colorClassMap: Record<string, ColorClass> = {
    green: {
      bg: 'bg-green-100',
      bg600: 'bg-green-600',
      text: 'text-green-600',
      border: 'border-l-green-600',
    },
    blue: {
      bg: 'bg-blue-100',
      bg600: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-l-blue-600',
    },
    orange: {
      bg: 'bg-orange-100',
      bg600: 'bg-orange-600',
      text: 'text-orange-600',
      border: 'border-l-orange-600',
    },
    purple: {
      bg: 'bg-purple-100',
      bg600: 'bg-purple-600',
      text: 'text-purple-600',
      border: 'border-l-purple-600',
    },
    red: {
      bg: 'bg-red-100',
      bg600: 'bg-red-600',
      text: 'text-red-600',
      border: 'border-l-red-600',
    },
    gray: {
      bg: 'bg-gray-100',
      bg600: 'bg-gray-600',
      text: 'text-gray-600',
      border: 'border-l-gray-600',
    },
    cyan: {
        bg: 'bg-cyan-100',
        bg600: 'bg-cyan-600',
        text: 'text-cyan-600',
        border: 'border-l-cyan-600',
      },
      emerald: {
        bg: 'bg-emerald-100',
        bg600: 'bg-emerald-600',
        text: 'text-emerald-600',
        border: 'border-l-emerald-600',
      },
      indigo: {
        bg: 'bg-indigo-100',
        bg600: 'bg-indigo-600',
        text: 'text-indigo-600',
        border: 'border-l-indigo-600',
      },
      teal: {
        bg: 'bg-teal-100',
        bg600: 'bg-teal-600',
        text: 'text-teal-600',
        border: 'border-l-teal-600',
      },
      
    // Add more if needed
  }
  
  export function getColorClasses(color?: string): ColorClass {
    return colorClassMap[color as keyof typeof colorClassMap] ?? colorClassMap.green
  }
  
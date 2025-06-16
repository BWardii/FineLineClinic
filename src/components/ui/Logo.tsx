import React from 'react'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
  showText?: boolean
  className?: string
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'dark', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  const subtextSizeClasses = {
    sm: 'text-[8px]',
    md: 'text-xs',
    lg: 'text-sm'
  }

  const svgSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const borderColor = variant === 'light' ? 'border-white' : 'border-sage-600'
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900'
  const subtextColor = variant === 'light' ? 'text-white/80' : 'text-sage-600'
  const iconColor = variant === 'light' ? 'text-white' : 'text-sage-600'

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        {/* Circular border */}
        <div className={`absolute inset-0 border-2 ${borderColor} rounded-full`}></div>
        
        {/* Inner design - stylized face */}
        <div className={`relative ${svgSizeClasses[size]} flex items-center justify-center`}>
          <svg 
            width={size === 'sm' ? '20' : size === 'md' ? '32' : '48'} 
            height={size === 'sm' ? '20' : size === 'md' ? '32' : '48'} 
            viewBox="0 0 32 32" 
            className={iconColor}
          >
            <path 
              d="M16 6 C20 6, 24 10, 24 16 C24 20, 22 24, 16 26 C10 24, 8 20, 8 16 C8 10, 12 6, 16 6 Z M12 18 Q16 22, 20 18" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </div>
        
        {/* Circular text effect for larger sizes */}
        {size !== 'sm' && (
          <div className={`absolute inset-0 text-[6px] ${iconColor} font-light tracking-wider`}>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -rotate-45">F</div>
            <div className="absolute top-2 right-1 transform rotate-12">I</div>
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 rotate-45">N</div>
            <div className="absolute right-2 bottom-1 transform rotate-90">E</div>
            <div className="absolute bottom-1 right-1/2 transform translate-x-1/2 rotate-135">L</div>
            <div className="absolute bottom-2 left-1 transform rotate-180">I</div>
            <div className="absolute left-1 bottom-1/2 transform translate-y-1/2 -rotate-135">N</div>
            <div className="absolute left-2 top-1 transform -rotate-90">E</div>
          </div>
        )}
      </div>
      
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold ${textColor}`}>FineLine</h1>
          <p className={`${subtextSizeClasses[size]} ${subtextColor} -mt-1 font-light tracking-wide`}>
            Wellness & Aesthetics
          </p>
        </div>
      )}
    </div>
  )
}

export default Logo 
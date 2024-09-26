import React from 'react'
import Title from '@/components/atoms/title/index'
import Description from '@/components/atoms/description/index'
import { IEducationCardProps } from '@/types/educationCard/IEducationCardProps'

const Index: React.FC<IEducationCardProps> = ({
  educationCenter,
  title,
  description,
  duration,
}) => {
  return (
<div className="flex flex-col md:flex-row justify-between items-start p-4">
      {/* Columna izquierda: Universidad y fechas */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <Title 
          size="xl" 
          text={educationCenter} 
        />
        <Description 
          size="base" 
          text={duration} 
          className={'inline-block bg-secondary text-white px-2 py-1 rounded text-sm mt-5'}
        />
      </div>

      {/* Columna derecha: Certificado */}
      <div className="w-full md:w-1/2">
        <Title 
          size="xl" 
          text={title} 
        />
        <Description 
          size="base" 
          text={description} 
          className={"text-color-secondary mt-5"}
        />
      </div>
    </div>
  )
}

export default Index
import React from 'react'
import Title from '@/components/atoms/title/index'
import Description from '@/components/atoms/description/index'
import { ICardsTitleProps } from '@/types/cardTitle/ICardTitleProps'

const Index: React.FC<ICardsTitleProps> = ({
  title,
  titleSize,
  description,
  descriptionSize
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-5">
        <Title text={title} size={titleSize} />
      </div>
      <div className="mb-5 text-center">
        <Description 
          text={description} 
          size={descriptionSize} 
          />
      </div>
    </div>
  )
}

export default Index;
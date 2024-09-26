import React from 'react'

import Title from '@/components/atoms/title/index'
import Description from '@/components/atoms/description/index'
import { IKnowledgeProps } from '@/types/kwonledge/IKnowledgeProps'

const Index: React.FC<IKnowledgeProps> = ({
  title,
  titleSize,
  description,
  descriptionSize,
  icon
}) => {
  return (
    <div className="p-5 w-80 h-56 flex flex-col justify-center items-center shadow-xl bg-white">
      <div className="mb-5">
        { icon }
      </div>
      <div className="mb-5">
        <Title text={title} size={titleSize} />
      </div>
      <div className="mb-5">
        <Description text={description} size={descriptionSize} />
      </div>
    </div>
  )
}

export default Index;
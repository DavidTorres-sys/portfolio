import { IIconProps } from '@/types/icon/ITagProps'
import React from 'react'

const Index: React.FC<IIconProps> = ({
  url,
  image
}) => {
  return (
    <div className="rounded-full w-12 h-12 color-primary flex justify-center items-center">
      <a
        href={ url } 
        target="_blank" 
        rel="noreferrer">
        { image }
      </a>
    </div>
  )
}

export default Index

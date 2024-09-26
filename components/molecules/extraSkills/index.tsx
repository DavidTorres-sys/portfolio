import Description from '@/components/atoms/description'
import Title from '@/components/atoms/title'
import React from 'react'

const Index = () => {
  return (
    <div className="mt-10">
      <Title text={"Extra Skills"} size={"base"} />
      <div className="mt-5">
        <Description text={"- Bootstrap, Tailwind"} size={"base"} />
        <Description text={"- Git"} size={"base"} />
        <Description text={"- Scrum"} size={"base"} />
      </div>
    </div>
  )
}

export default Index
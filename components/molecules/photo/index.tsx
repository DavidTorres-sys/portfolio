import Description from "@/components/atoms/description"
import Title from "@/components/atoms/title"
import Image from 'next/image';
import React from "react"

const Index = () => {
  return (
    <div className="mt-5 mb-5 text-center">
      <Image
        src="/images/CVPhoto.jpg"
        alt="David Torres"
        width={326}
        height={460}
        className="rounded-full object-cover"
      />
      <div className="mt-1">
        <Title
          text={"David Torres"}
          size={"base"} />
      </div>
      <div className="mt-1">
        <Description
          text={"Full Stack Developer"}
          size={"base"} />
      </div>
    </div>
  )
}

export default Index

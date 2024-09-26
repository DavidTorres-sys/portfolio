import Description from "@/components/atoms/description"
import React from "react"

const Index = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="flex justify-between mb-1">
        <Description text={"Age:"} size={"base"} />
        <Description text={"22"} size={"base"} />
      </div>
      <div className="flex justify-between mb-1">
        <Description text={"Freelance:"} size={"base"} />
        <Description text={"Avaliable"} size={"base"} />
      </div>
      <div className="flex justify-between mb-1">
        <Description text={"Location:"} size={"base"} />
        <Description text={"Medellin, CO"} size={"base"} />
      </div>
    </div>
  )
}

export default Index
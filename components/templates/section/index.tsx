import React from "react"
import Education from "@/components/organisms/education/index"
import Knowledge from "@/components/organisms/knowledge/index"
import Presentaion from "@/components/molecules/presentation/index"

const Index = () => {
  return (
    <div className="m-3">
      <div className="m-1">
        <Presentaion />
      </div>
      <div className="m-1">
        <Knowledge />
      </div>
      <div className="m-1">
        <Education />
      </div>
    </div>
  )
}

export default Index
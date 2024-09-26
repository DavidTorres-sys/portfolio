import React from "react"
import Education from "@/components/organisms/education/index"
import Knowledge from "@/components/organisms/knowledge/index"
import Presentaion from "@/components/molecules/presentation/index"
import Portfolio from "@/components/organisms/portfolio/index"
import Footer from "@/components/molecules/footer"

const Index = () => {
  return (

    <div className="flex w-full max-w-5xl flex-col gap-16">
      <div className="m-1">
        <div className="">
          <Presentaion />
        </div>
        <div className="m-1">
          <Knowledge />
        </div>
        <div className="m-1">
          <Education />
        </div>
        <div className="m-1">
          <Portfolio />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index

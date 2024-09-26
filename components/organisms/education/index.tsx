import React from "react"

import EducationCard from "@/components/molecules/educationCard/index"
import CardTitle from "@/components/molecules/cardTitle/index"

const Index = () => {
  return (
    <div className="mt-10">
      <div className="text-center mb-8">
        <CardTitle
          title={"Education"}
          titleSize={"2xl"}
          description={"I'm passionate about continuous learning, always seeking opportunities to acquire new knowledge and improve my skills. My proactive approach to professional development allows me to quickly adapt to new technologies and methodologies, making me a versatile professional, ready to face new challenges."}
          descriptionSize={"base"} />
      </div>
      <div className="bg-white p-10 shadow-xl">
        <EducationCard
          educationCenter={"University of Antioquia"}
          title={"BE. Systems Engineering"}
          description={"My goal is to learn and apply emerging technologies to create efficient and scalable solutions. With skills in programming and problem-solving, I seek opportunities to put my knowledge into practice, contribute to innovative projects, and continue evolving in the field of engineering."}
          duration={"Nov 2019 - Present"}
        />
      </div>
    </div>
  )
}

export default Index
import ProgressBar from '@/components/atoms/progressBar'
import Title from '@/components/atoms/title'
import React from 'react'

const Index = () => {
  return (
    <div className="mt-10">
    <div className="">
      <Title text={"Programming Languages"} size={"base"} />
    </div>
    <div className="mt-5">
      <ProgressBar language="Python" progress={90} />
      <ProgressBar language="FastAPI" progress={85} />
      <ProgressBar language="TypeScript" progress={80} />
      <ProgressBar language="MongoDB" progress={70} />
      <ProgressBar language="VueJS" progress={50} />
      <ProgressBar language="Angular" progress={75} />
      <ProgressBar language="PostgresSQL" progress={75} />
      <ProgressBar language="Docker" progress={80} />
      <ProgressBar language="Java" progress={60} />
      <ProgressBar language="Spring Boot" progress={50} />
      <ProgressBar language="NextJS" progress={40} />
    </div>
  </div>
  )
}

export default Index

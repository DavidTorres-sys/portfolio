import ProgressBar from '@/components/atoms/progressBar'
import Title from '@/components/atoms/title'
import React from 'react'


const Index = () => {
  return (
    <div className="mt-10">
      <div className="">
        <Title text={'Languages'} size={'base'} />
      </div>
      <div className="mt-5">
        <ProgressBar language="Spanish" progress={100} />
        <ProgressBar language="English" progress={65} />
      </div>
    </div>
  )
}

export default Index
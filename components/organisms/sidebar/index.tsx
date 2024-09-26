import React from 'react'
import Languages  from '@/components/molecules/languages'
import ProgrammingLanguages from '@/components/molecules/programmingLanguages'
import ExtraSkills from '@/components/molecules/extraSkills'
import PersonalInfo from '@/components/molecules/personalInfo'
import Photo from '@/components/molecules/photo'

const Index = () => {
  return (
    <div className="bg-white w-72 h-screen p-10 overflow-y-auto">
      <Photo />
      <hr />
      <PersonalInfo />
      <hr />
      <Languages />
      <hr />      
      <ProgrammingLanguages />
      <hr />
      <ExtraSkills />
    </div>
  )
}

export default Index
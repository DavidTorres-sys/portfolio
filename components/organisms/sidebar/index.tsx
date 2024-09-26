import React from 'react'
import Languages  from '@/components/molecules/languages'
import ProgrammingLanguages from '@/components/molecules/programmingLanguages'
import ExtraSkills from '@/components/molecules/extraSkills'

const Index = () => {
  return (
    <div className="bg-white w-72 h-screen p-10">
      <Languages />
      <ProgrammingLanguages />
      <ExtraSkills />
    </div>
  )
}

export default Index
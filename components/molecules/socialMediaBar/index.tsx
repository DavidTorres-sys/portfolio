import Icon from '@/components/atoms/icon'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import React from 'react'

const Index = () => {
  return (
    <div className='p-5 flex-col items-center flex h-screen w-24 bg-white'>
      <div className="m-2">
        <Icon
          url={'https://github.com/DavidTorres-sys'}
          image={<AiFillGithub  className="w-7 h-7"/>} />
      </div>
      <div className="m-2">
        <Icon
          url={'https://linkedin.com/in/david-torres-gómez-55b599321'}
          image={<AiFillLinkedin className="w-7 h-7" />} />
      </div>
    </div>
  )
}

export default Index

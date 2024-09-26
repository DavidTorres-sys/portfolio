import { IProgressBarProps } from '@/types/progressBar/IProgressBarProps'
import React from 'react'

const Index: React.FC<IProgressBarProps> = ({
  language,
  progress
}
) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{language}</span>
        <span className="text-sm font-medium text-gray-700">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          className="bg-yellow-400 h-1.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Index
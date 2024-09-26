import Description from '@/components/atoms/description'
import Title from '@/components/atoms/title'
import { IPortfolioCardProps } from '@/types/portfolioCard/IPortfolioCardProps'
import React, { useState } from 'react'
import Image from 'next/image'

const Index: React.FC<IPortfolioCardProps> = ({
  title,
  description,
  modalDescription,
  image,
  link,
  linkText
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="w-full sm:w-80 h-[474px] flex flex-col justify-center items-center shadow-xl bg-white">
      <div className="lg:mb-0 lg:w-1/2 mb-10 flex justify-center">
        <Image
          src={image}
          alt={title}
          width={310}
          height={300}
          className=""
        />
      </div>
      <div className="p-5">
        <div className="mb-5">
          <Title text={title} size={"2xl"} />
        </div>
        <div className="mb-5">
          <Description text={description} size={"base"} />
        </div>
        <div className="mb-5">
          <button
            onClick={openModal}
            className="text-blue-500 hover:underline">
            {linkText || 'Learn more'}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded shadow-xl max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="mb-4">{modalDescription}</p>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline p-5"
            >
              View
            </a>
            <button
              onClick={closeModal}
              className="mt-5 px-4 py-2 bg-appGray text-white rounded hover:bg-gray-600 p-5"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Index

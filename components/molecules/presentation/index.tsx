import React from "react";
import Button from "@/components/atoms/button/index";
import Description from "@/components/atoms/description/index";
import Image from 'next/image';
import Title from "@/components/atoms/title/index";

const Index: React.FC = () => {
  const EMAIL_ADDRESS = "davidesteban1863@gmail.com";
  const EMAIL_SUBJECT = "Interested in hiring you!";
  const EMAIL_MESSAGE = "Hey David, I'm interested in hiring you!";

  {/* Function to open the default email client with a pre-filled email */ }
  const handleEmailClick = () => {
    window.open(`mailto:${EMAIL_ADDRESS}?subject=${EMAIL_SUBJECT}&body=${EMAIL_MESSAGE}`, '_blank');
  };

  return (
    // Main container with responsive flex layout
    <div className="flex flex-col lg:flex-row-reverse items-center p-8 lg:p-28 bg-white shadow-xl">

      {/* Image container */}
      <div className="lg:mb-0 lg:w-1/2 mb-10 flex justify-center">
        <Image
          src="/images/CVPhoto.jpg"
          alt="David Torres"
          width={326}
          height={460}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text container for title, description, and button */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="mb-10">
          <Title
            text={"I'm David Torres, Full-stack Developer"}
            size={"6xl"}
          />
        </div>
        <div className="mb-10">
          <Description
            text={
              "As an enthusiast of continuous learning, I am dedicated to constantly honing my technical skills as a Full Stack developer. My passion leans towards backend development, captivated by the complexity of system architecture and performance optimization. I’m a proactive and results-oriented individual, standing out for my ability to quickly adapt to the latest technologies and development environments."
            }
            size={"lg"}
          />
        </div>
        <div className="mt-4">
          <Button
            text="HIRE ME!"
            onClick={handleEmailClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

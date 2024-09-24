import React from "react";
import Button from "@/components/atoms/button/index";
import Description from "@/components/atoms/description/index";
import Image from 'next/image';
import Title from "@/components/atoms/title/index";

const Index: React.FC = () => {
  return (
    // Main container with responsive flex layout
    <div className="flex flex-col lg:flex-row-reverse items-center p-8 lg:p-28 bg-white shadow-xl">

      {/* Image container */}
      <div className="lg:mb-0 lg:w-1/2 mb-10 flex justify-center">
        <Image
          src="/images/CVPhoto.jpg" // Path to the image
          alt="David Torres" // Alt text for accessibility
          width={326} // Width of the image
          height={460} // Height of the image
          className="rounded-lg object-cover" // CSS classes for styling
        />
      </div>

      {/* Text container for title, description, and button */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <Title
          text={"I'm David Torres, Full-stack Developer"} // Title text
          size={"6xl"} // Size of the title
        />
        <Description
          text={
            "As an enthusiast of continuous learning, I am dedicated to constantly honing my technical skills as a Full Stack developer. My passion leans towards backend development, captivated by the complexity of system architecture and performance optimization. I’m a proactive and results-oriented individual, standing out for my ability to quickly adapt to the latest technologies and development environments."
          }
          size={"lg"} // Size of the description text
        />
        <div className="mt-4"> {/* Margin top for spacing */}
          <Button
            text="HIRE ME!" // Button text
            onClick={() => alert("Button clicked!")} // Button click handler
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

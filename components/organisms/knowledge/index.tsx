import React from "react";
import { CodeBracketIcon, ComputerDesktopIcon, ServerIcon } from '@heroicons/react/24/outline';
import CardTitle from "@/components/molecules/cardTitle/index";
import KnowledgeCard from "@/components/molecules/knowledgeCard/index";

const Index = () => {
  return (
    <div className="mt-10">
      <div className="text-center mb-8">
        <CardTitle
          title={"My Knowledge"}
          titleSize={"2xl"}
          description={"A showcase of my expertise in various development fields, including web, backend, and frontend development, utilizing modern tools and technologies."}
          descriptionSize={"base"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-col md:flex-row justify-between items-center text-center">
        <KnowledgeCard
          title={"Web Development"}
          description={"Creating responsive websites."}
          titleSize={"2xl"}
          descriptionSize={"base"}
          icon={<ComputerDesktopIcon className="w-16 h-16" />}
        />
        <KnowledgeCard
          title={"Backend Development"}
          description={"Building server-side applications with Python, Java and databases."}
          titleSize={"2xl"}
          descriptionSize={"base"}
          icon={<ServerIcon className="w-16 h-16" />}
        />
        <KnowledgeCard
          title={"Frontend Development"}
          description={"Designing user interfaces with Angular, VueJS, NextJS and enhancing user experience."}
          titleSize={"2xl"}
          descriptionSize={"base"}
          icon={<CodeBracketIcon className="w-16 h-16" />}
        />
      </div>
    </div>
  );
}

export default Index;

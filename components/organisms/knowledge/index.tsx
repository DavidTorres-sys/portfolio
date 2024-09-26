import React from "react";
import { CodeBracketIcon, ComputerDesktopIcon, ServerIcon } from '@heroicons/react/24/outline';
import CardTitle from "@/components/molecules/cardTitle/index";
import KnowledgeCard from "@/components/molecules/knowledgeCard/index";

const Index = () => {
  return (
    <div className="p-4 sm:p-8 lg:p-14">
      <div className="text-center mb-8">
        <CardTitle
          title={"My Knowledge"}
          titleSize={"2xl"}
          description={""}
          descriptionSize={"base"} />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-center">
        <KnowledgeCard
          title={"Web Development"}
          description={"Creating responsive websites."}
          titleSize={"2xl"}
          descriptionSize={"base"}
          icon={<ComputerDesktopIcon className="w-16 h-16" />}
        />
        <KnowledgeCard
          title={"Backend Development"}
          description={"Building server-side applications with Python and Java, and databases."}
          titleSize={"2xl"}
          descriptionSize={"base"}
          icon={<ServerIcon className="w-16 h-16" />}
        />
        <KnowledgeCard
          title={"Frontend Development"}
          description={"Designing user interfaces with Angular, Vue and enhancing user experience."}
          titleSize={"2xl"}
          descriptionSize={"base"}
          icon={<CodeBracketIcon className="w-16 h-16" />}
        />
      </div>
    </div>
  );
}

export default Index;

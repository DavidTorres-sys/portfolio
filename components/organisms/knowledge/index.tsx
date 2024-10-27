import React from "react";
import CardTitle from "@/components/molecules/cardTitle/index";
import KnowledgeCard from "@/components/molecules/knowledgeCard/index";
import { knowledgeData } from "@/utils/knowledge";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 flex-col md:flex-row justify-between gap-8 items-center text-center">
        {knowledgeData.map((item, index) => (
          <KnowledgeCard
            key={index}
            title={item.title}
            description={item.description}
            titleSize={item.titleSize}
            descriptionSize={item.descriptionSize}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;

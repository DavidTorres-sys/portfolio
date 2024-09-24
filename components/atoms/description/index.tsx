// Import React and the IDescriptionProps interface from the corresponding types file.
// This interface defines the properties that the component will accept.
import React from 'react';
import { IDescriptionProps } from '@/types/description/IDescriptionProps';

// Define the functional component 'Index' using TypeScript and React.FC to type the props.
const Index: React.FC<IDescriptionProps> = ({
  text,       // 'text' prop: the content that will be displayed in the description.
  size = 'base', // 'size' prop: the text size, defaulting to 'base' if not provided.
}) => {
  return (
    // - 'text-${size}': Dynamically sets the text size based on the 'size' prop.
    <div className={`text-gray-400 text-${size} mb-10`}>
      { text }  {/* Renders the text passed as a prop inside the div */}
    </div>
  );
}

export default Index;

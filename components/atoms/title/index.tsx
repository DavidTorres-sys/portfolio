// Import the ITitleProps interface from the corresponding types file.
// This interface defines the properties that the component will accept.
import { ITitleProps } from '@/types/title/ITitleProps';
import React from 'react';

// Define the functional component 'Index' using TypeScript and React.FC to type the props.
const Index: React.FC<ITitleProps> = ({
  text,    // 'text' prop: the content that will be displayed in the title.
  size,    // 'size' prop: the size of the text for the title.
}) => {
  return (
    // - 'text-${size}': Dynamically sets the text size based on the 'size' prop.
    <div className={`text-${size} font-bold mb-10`}>
      { text }  {/* Renders the text passed as a prop inside the div */}
    </div>
  );
}

export default Index;

import { ITitleProps } from '@/types/title/ITitleProps';
import React from 'react';

const Index: React.FC<ITitleProps> = ({
  text,    // 'text' prop: the content that will be displayed in the title.
  size,    // 'size' prop: the size of the text for the title.
}) => {
  return (
    // - 'text-${size}': Dynamically sets the text size based on the 'size' prop.
    <div className={`text-${size} font-bold`}>
      { text }  {/* Renders the text passed as a prop inside the div */}
    </div>
  );
}

export default Index;

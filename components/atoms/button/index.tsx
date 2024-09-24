// Import the IButtonProps interface from the corresponding types file.
// This interface defines the properties that the component will accept.
import { IButtonProps } from '@/types/button/IButtomProps';
import React from 'react';

// Define the functional component 'Index' using TypeScript and React.FC to type the props.
const Index: React.FC<IButtonProps> = ({
  text,    // 'text' prop: the text that will be displayed inside the button.
  onClick, // 'onClick' prop: function that will be executed when the button is clicked.
}) => {
  return (
    <button 
      className='color-primary w-40 h-12 text-white font-bold text-base shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
      onClick={onClick} // Links the onClick function to handle the button's click event.
    >
      {text}  {/* Renders the text passed as a prop inside the button */}
    </button>
  );
}

export default Index;

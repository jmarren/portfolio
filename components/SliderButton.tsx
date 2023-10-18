import React, { useState } from 'react';

interface ButtonTwoProps {
  text: string;
  onClick: () => void;
}

const ButtonTwo: React.FC<ButtonTwoProps> = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  const buttonClass = isClicked
    ? 'bg-red-500 text-white w-[25%] h-full rounded-full transition-all switch-sides ease-in-out ring-4 ring-inset ring-red-600 hover:bg-red-600 hover:ring-red-600'
    : 'bg-green-300  text-white w-[25%] h-full rounded-full transition-all ring-4 ring-inset ring-green-400  active:scale-90 active:scale-x-90 hover:bg-green-400'


  const divClass = isClicked 
    ? 'bg-slate-300 m-3 w-48 h-12  ring-2 ring-inset ring-slate-200  rounded-full'
    : 'bg-slate-300 m-3 w-48 h-12 ring-2 ring-inset ring-slate-200 box-border rounded-full'
  return (
    <div className={divClass}> 
    <button className={buttonClass} onClick={handleButtonClick}>
      {text}
    </button>
    </div>
  );
};

export default ButtonTwo;

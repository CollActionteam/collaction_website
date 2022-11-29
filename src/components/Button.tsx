import React from 'react';

interface ButtonProps {
  text: string;
  style: string;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, style, clickHandler }: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center box-border font-[500] 
      text-sm leading-[22px] h-[48px] shadow-xl ${style}`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

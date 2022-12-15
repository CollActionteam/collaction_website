import { useState } from 'react';
import { FiPlus as Plus } from 'react-icons/fi';

interface FaqProps {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: FaqProps) {
  const [isPressed, setIsPressed] = useState(false);

  // toggle FAQ accordion
  const toggleFaqHandler = () => {
    setIsPressed(!isPressed);
  };

  // accordion collapse or expand boolean
  const hidden = isPressed ? '' : 'hidden';

  // accordion button rotate boolean
  const rotate = isPressed ? 'rotate-45' : '';

  return (
    <div
      className="flex flex-col items-center h-full gap-2.5
  py-6 px-3 bg-secondary rounded-[10px] justify-between max-w-350 sm:max-w-400 lg:max-w-[744px]"
    >
      <div
        className="flex items-center w-full"
        onClick={toggleFaqHandler}
        role="button"
        tabIndex={0}
        onKeyPress={toggleFaqHandler}
      >
        <p
          className="w-[292px] sm:w-[342px] lg:w-[686px] font-light 
        text-body-long-1 text-primary-400"
        >
          {question}
        </p>
        <Plus
          className={`w-[24px] h-[24px] ${rotate} 
          transition transform duration-300 ease-in-out`}
          onClick={toggleFaqHandler}
        />
      </div>
      <div
        className={`w-full flex items-center mt-6 pt-6 border-t-[0.5px] 
      border-solid border-primary-100 ${hidden}`}
        onClick={toggleFaqHandler}
        role="button"
        tabIndex={0}
        onKeyPress={toggleFaqHandler}
      >
        <p
          className="w-[326px] sm:w-[376px] lg:w-[720px] font-light 
        text-body-long-1 text-primary-400"
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { FiPlus as Plus } from 'react-icons/fi';

interface FaqProps {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: FaqProps) {
  const [isPressed, setIsPressed] = useState(false);

  // toggle FAQ accordion
  const toggleFaq = () => {
    setIsPressed(!isPressed);
  };

  // accordion collapse or expand boolean
  const hidden = isPressed ? '' : 'hidden';

  // accordion button rotate boolean
  const rotate = isPressed ? 'rotate-45' : '';

  return (
    <div
      className="flex flex-col items-center w-full h-full gap-2.5
  py-6 px-3 bg-primary-0 rounded-[10px] justify-between"
    >
      <div className="flex items-center w-full">
        <p
          className="w-[292px] sm:w-[342px] lg:w-[686px] font-light 
        text-body-long-1 text-primary-400"
        >
          {question}
        </p>
        <Plus
          className={`w-[24px] h-[24px] ${rotate} 
          transition transform duration-300 ease-in-out`}
          onClick={toggleFaq}
        />
      </div>
      <div
        className={`w-full flex items-center mt-6 pt-6 border-t-[0.5px] 
      border-solid border-primary-100 ${hidden}`}
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

export const faq = [
  {
    id: 1,
    question: 'This is a question?',
    answer: 'This is an answer to a frequently asked question',
  },
  {
    id: 2,
    question: 'This is a question?',
    answer: 'This is an answer to a frequently asked question',
  },
  {
    id: 3,
    question: 'This is a question?',
    answer: 'This is an answer to a frequently asked question',
  },
];

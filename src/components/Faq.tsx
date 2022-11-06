import { useState } from 'react';
import { FiPlus as Plus } from 'react-icons/fi';

export default function Faq() {
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
  py-6 px-3 bg-primary-0 rounded-[10px]"
    >
      <div className="flex items-center w-full">
        <p
          className="w-[292px] sm:w-[342px] lg:w-[686px] font-light 
        text-body-long-1 text-primary-400"
        >
          This is a question?
        </p>
        <Plus
          className={`w-[24px] h-[24px] ${rotate} 
          transition transform duration-300 ease-in-out`}
          onClick={toggleFaq}
        />
      </div>
    </div>
  );
}

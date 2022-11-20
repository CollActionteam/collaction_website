import React, { useState, useRef } from 'react';
import { toggleActiveState } from 'src/helpers/toggleDonationState';

interface DonationAmountProps {
  amount: string;
  handleDonation: React.Dispatch<React.SetStateAction<string>>;
}

export default function DonationAmount({
  amount,
  handleDonation,
}: DonationAmountProps) {
  // change input state to receive user input
  const [isReadOnly, setIsReadOnly] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // click handler function
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    // destructure the active element from Event object
    const { currentTarget: activeAmount } = event;
    toggleActiveState(activeAmount);
    if (activeAmount.id === 'Other...') {
      setIsReadOnly(false);
      if (inputRef.current) inputRef.current.value = '';
    }
    handleDonation(activeAmount.value);
  };

  // change handler function for the user donation input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: currentAmount } = event.currentTarget;
    // might be a good idea to debounce this
    handleDonation(currentAmount);
  };

  const defaultActiveDonation = amount === '€10.00' ? 'active-donation' : '';

  return (
    <input
      type="text"
      ref={inputRef}
      id={amount}
      defaultValue={amount}
      onChange={handleChange}
      className={`w-[144px] lg:w-[153.5px] h-[48px] flex rounded-[10px] text-center 
      bg-secondary focus:outline-none cursor-pointer ${defaultActiveDonation}`}
      onClick={handleClick}
      readOnly={isReadOnly}
    />
  );
}

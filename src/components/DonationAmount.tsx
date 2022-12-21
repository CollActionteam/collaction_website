import React, { useState, useRef } from 'react';
import { toggleActiveState } from 'src/helpers/toggleDonationState';
import { Product } from './DonateCard';

interface DonationAmountProps {
  product: Product;
  isSelected: boolean;
  handleDonation: React.Dispatch<React.SetStateAction<Product>>;
}

export default function DonationAmount({
  product,
  isSelected,
  handleDonation,
}: DonationAmountProps) {
  // change input state to receive user input
  const [isReadOnly, setIsReadOnly] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // click handler function
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    // destructure the active element from Event object
    const { currentTarget: activeAmount } = event;
    // toggle active state on donation amount
    toggleActiveState(activeAmount);
    if (activeAmount.id === 'Other...') {
      // if other is clicked, make the input writable
      setIsReadOnly(false);
      if (inputRef.current) inputRef.current.value = '';
    }
    handleDonation(product);
  };

  const handleChange = () => {
    handleDonation(product);
  };

  return (
    <input
      type="text"
      ref={inputRef}
      id={product.id}
      defaultValue={product.label}
      onChange={handleChange}
      className={`w-[144px] lg:w-[153.5px] h-[48px] flex rounded-[10px] text-center 
      bg-secondary focus:outline-none cursor-pointer ${
        isSelected ? 'active-donation' : ''
      }`}
      onClick={handleClick}
      readOnly={isReadOnly}
    />
  );
}

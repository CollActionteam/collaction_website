import { toggleActiveState } from 'src/helpers/toggleDonationState';

interface DonationAmountProps {
  amount: string;
}

export default function DonationAmount({ amount }: DonationAmountProps) {
  // click handler function
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // destructure the active element from Event object
    const { currentTarget: activeAmount } = event;
    toggleActiveState(activeAmount);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { currentTarget: activeAmount } = event;
    toggleActiveState(activeAmount);
  };

  return (
    <div
      className={`w-[144px] lg:w-[153.5px] h-[48px] flex items-center 
    justify-center rounded-[10px] bg-secondary active-donation`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyPress}
    >
      {amount}
    </div>
  );
}

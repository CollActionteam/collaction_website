interface DonationAmountProps {
  amount: string;
}

export default function DonationAmount({ amount }: DonationAmountProps) {
  const active =
    amount === '€10.00'
      ? 'bg-collaction-500 text-secondary font-semibold'
      : 'bg-secondary';

  return (
    <div
      className={`w-[153.5px] h-[48px] flex items-center 
    justify-center rounded-[10px] ${active}`}
    >
      {amount}
    </div>
  );
}

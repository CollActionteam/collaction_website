interface DonationAmountProps {
  amount: string;
}

export default function DonationAmount({ amount }: DonationAmountProps) {
  return <div>{amount}</div>;
}

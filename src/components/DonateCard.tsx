import React from 'react';

import Button from 'src/components/Button';
import DonationAmount from 'src/components/DonationAmount';

interface DonateCardProps {
  headline: string;
  donation: string;
}

const donations = [
  '€5.00',
  '€10.00',
  '€20.00',
  '€50.00',
  '€100.00',
  'Other...',
];

export default function DonateCard({ headline, donation }: DonateCardProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap">
          <h3 className="w-[319px] h-[34px] mb-7 text-headline-m-1 text-primary-400">
            {headline}
          </h3>
          <p className="text-body-long-1 text-primary-200 w-[242px] h-[48px]">
            I will support collAction with a {donation} donation
          </p>
        </div>
        <div className="w-[319px] h-[354px] flex flex-col items-center gap-y-8">
          <div className="w-[319px] h-[168px] flex flex-wrap gap-3">
            {donations.map(donation => (
              <DonationAmount key={donation} amount={donation} />
            ))}
          </div>
          <p className="w-[319px] h-[44px] text-sm leading-[22px] text-primary-200">
            Don't have a credit card? No problem. Simply select SEPA Direct
            Debit in the next step.
          </p>
          <div>
            <Button
              text="Continue"
              style="bg-primary-400 w-[319px] h-[48px] leading-[22px] text-secondary rounded-[999px]"
            />
            <p className="text-primary-200 text-sm leading-[22px] w-[319px] h-[22px]">
              By donating you agree with our{' '}
              <span className="text-collaction-500">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';

import Button from 'src/components/Button';

interface DonateCardProps {
  headline: string;
  donation: string;
}

export default function DonateCard({ headline, donation }: DonateCardProps) {
  return (
    <>
      <div>
        <div>
          <h3>{headline}</h3>
          <p>I will supoort collAction with a {donation} donation</p>
        </div>
        <div>
          <DonationAmount />
          <p>
            Don't have a credit card? No problem. Simply select SEPA Direct
            Debit in the next step.
          </p>
          <Button text="Continue" style="bg-primary-500" />
          <p>
            By donating you agree with our <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}

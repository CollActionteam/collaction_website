import React from 'react';

import Button from 'src/components/Button';
import DonationAmount from 'src/components/DonationAmount';

interface DonateCardProps {
  headline: string;
  donation: string;
}

const donations = ['€5.00', '€10.00', '€20.00', '€50.00', '€100.00'];

export default function DonateCard({ headline, donation }: DonateCardProps) {
  return (
    <>
      <div>
        <div>
          <h3>{headline}</h3>
          <p>I will supoort collAction with a {donation} donation</p>
        </div>
        <div>
          <div>
            {donations.map(donation => {
              <DonationAmount key={donation} amount={donation} />;
            })}
          </div>
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

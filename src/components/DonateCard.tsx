import Link from 'next/link';
import React, { useState } from 'react';

import Button from 'src/components/Button';
import DonationAmount from 'src/components/DonationAmount';
import checkout from 'src/helpers/stripeCheckout';

export interface Product {
  label: string;
  id: string;
  mode: 'payment' | 'subscription';
}

interface DonateCardProps {
  headline: string;
  donation: string;
  products: Product[];
  creditCardText: string;
  continueBtnText: string;
  agreement: string;
  policy: string;
}

export default function DonateCard({
  headline,
  donation,
  products,
  creditCardText,
  continueBtnText,
  agreement,
  policy,
}: DonateCardProps) {
  // donation amount state variable
  const [product, setProduct] = useState(products[0]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //  do something with here donationAmount
  };

  return (
    <>
      <div
        className="flex flex-col gap-8 items-center lg:flex-row 
        lg:justify-between h-[588px] lg:h-[402px] py-12 px-6"
      >
        <div className="flex flex-col items-center w-[302px] h-[106px] gap-6 text-center">
          <h3
            className="w-[302px] h-[34px] lg:w-[319px] lg:h-[34px] 
          text-headline-m-1 text-primary-400"
          >
            {headline}
          </h3>
          <p
            className="text-body-long-1 text-primary-300 w-[302px] h-[34px] 
          sm:w-[352px] lg:w-[242px] lg:h-[48px] font-light lg:text-left"
          >
            {donation}
          </p>
        </div>
        <form
          className="max-w-350 h-[168px] lg:w-[319px] lg:h-[354px] flex flex-col 
        items-center justify-between gap-y-8"
          onSubmit={handleSubmit}
        >
          <div
            className="w-[300px} lg:w-[319px] h-[168px] flex flex-wrap items-center 
          justify-center gap-3"
          >
            {products.map(prod => (
              <DonationAmount
                key={prod.id}
                product={prod}
                isSelected={product.id == prod.id}
                handleDonation={setProduct}
              />
            ))}
          </div>
          <p className="w-[302px] lg:w-[319px] h-[44px] text-sm leading-[22px] text-primary-300">
            {creditCardText}
          </p>
          <div className="w-[302px] flex flex-col items-start gap-2.5">
            <Button
              customStyle="bg-primary-400 w-[302px] lg:w-[319px] text-secondary rounded-[999px]"
              onClick={() => checkout(product.id, product.mode)}
            >
              {continueBtnText}
            </Button>
            <p className="text-primary-300 text-sm leading-[22px] w-[302px] lg:w-[319px] h-[22px]">
              {agreement}{' '}
              <span className="text-collaction-500 text-sm leading-[22px]">
                <Link href="/privacy">{policy}</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

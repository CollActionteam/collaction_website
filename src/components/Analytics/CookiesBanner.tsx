import React from 'react';
import Link from 'next/link';
import { FaCookieBite as FaCookieIcon } from 'react-icons/fa';
import { makeCookieSelection } from './Analytics.utils';

type Props = {
  setShowBanner: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CookiesBanner({ setShowBanner }: Props) {
  return (
    <div className="sticky bottom-0 inset-x-0 bg-secondary py-5 px-12 z-50">
      {/* TEXT */}
      <p className="max-w-600 mx-auto text-primary-300 text-center mb-5 ">
        We value your privacy. We and our partners use trackers to measure the
        audience of our website and to provide you with offers and improve on
        our own operations.{' '}
        <Link href="/privacy">
          <a className="underline">
            More info on cookies and providers we use.
          </a>
        </Link>
      </p>

      {/* BUTTONS */}
      <div className="max-w-600 mx-auto flex flex-col-reverse items-center md:flex-row">
        {/* REJECT */}
        <button
          className="bg-primary-0 text-primary-100 font-bold leading-none text-center rounded-full p-3 h-13 w-72 mr-0 md:mr-3"
          onClick={() => {
            setShowBanner(false);
            makeCookieSelection('0');
          }}
        >
          Reject
        </button>

        {/* ACCEPT */}
        <button
          className="bg-collaction text-secondary leading-none font-bold text-center rounded-full p-3 h-13 w-72 mb-3 md:mb-0"
          onClick={() => {
            setShowBanner(false);
            makeCookieSelection('1');
          }}
        >
          <span className="align-middle">Accept</span>
          <FaCookieIcon className="h-6 w-6 inline-block ml-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

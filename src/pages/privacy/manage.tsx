import { useState } from 'react';
import Link from 'next/link';
import { FaCookieBite as FaCookieIcon } from 'react-icons/fa';

import PageSEO from 'src/components/PageSEO';
import {
  getCookieSelection,
  makeCookieSelection,
  revokeAcceptedCookies,
} from 'src/components/Analytics/Analytics.utils';

export default function ManagePrivacyPage() {
  const [cookiesAccepted, setCookiesAcceptance] = useState(
    getCookieSelection()
  );

  return (
    <>
      <PageSEO
        title="CollAction | Manage cookies"
        description="Opt in or out of accepting cookies. View the privacy and cookie policy to learn more."
      />

      <main className="bg-primary-0 p-5 md:p-12">
        <div className="max-w-600 mx-auto">
          <h1 className="text-primary-400 text-center mb-6">Manage Cookies</h1>
          <p className="text-primary-400 text-center mb-5">
            Currently, we notice that you've{' '}
            <u>{cookiesAccepted ? 'accepted' : 'declined'}</u> CollAction
            cookies.
          </p>
          {cookiesAccepted ? (
            <p className="text-primary-400 text-center mb-7">
              You may revoke that acceptance below.
            </p>
          ) : (
            <p className="text-primary-400 text-center mb-7">
              We value your privacy. We and our partners use trackers to measure
              the audience of our website and to provide you with offers and
              improve on our own operations.
            </p>
          )}
          {cookiesAccepted ? (
            <button
              className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 mb-7 w-72 shadow mx-auto"
              onClick={() => {
                revokeAcceptedCookies();
                setCookiesAcceptance(false);
              }}
            >
              <span className="align-middle">Revoke Cookies</span>
              <FaCookieIcon
                className="h-6 w-6 inline-block ml-5"
                strokeWidth={2}
              />
            </button>
          ) : (
            <button
              className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 mb-7 w-72 shadow mx-auto"
              onClick={() => {
                makeCookieSelection('1');
                setCookiesAcceptance(true);
              }}
            >
              <span className="align-middle">Accept Cookies</span>
              <FaCookieIcon
                className="h-6 w-6 inline-block ml-5"
                strokeWidth={2}
              />
            </button>
          )}
          <p className="text-primary-400 text-center w-72 mb-5 mx-auto">
            View our{' '}
            <Link href="/privacy" className="text-collaction">
              Privacy and Cookies Policy
            </Link>{' '}
            to learn more.
          </p>
        </div>
      </main>
    </>
  );
}

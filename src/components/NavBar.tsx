import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import ContactModal from './ContactModal';
import 'react-toastify/dist/ReactToastify.css';

import CollActionBlackLogoWithText from 'public/logo-black-small.png';
import CollActionWhiteLogoWithText from 'public/logo-white-small.png';
import { CircleFlag } from 'react-circle-flags';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'next-i18next';

export default function NavBar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  // if it's inverted we'll show white text and a green background
  const isInverted = ['/westland'].includes(router.pathname);
  const [showContactModal, setShowContactModal] = useState(false);

  const { t } = useTranslation();

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        closeOnClick={true}
      />
      <header
        className={clsx(
          'relative w-full',
          router.pathname === '/veganuary' ? 'hidden' : 'block',
          isInverted ? 'bg-collaction' : 'bg-secondary'
        )}
      >
        {isInverted && (
          <div
            className="bg-collaction absolute top-0 left-0 w-full -z-10"
            style={{ height: 650 }}
          />
        )}
        <div
          className={clsx(
            'flex flex-col md:flex-row flex-wrap px-6 md:px-0 md:items-center justify-center md:justify-between mx-auto py-4',
            'md:max-w-[700px] lg:max-w-864',
            'z-20'
          )}
        >
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link
              href="/"
              className="block w-32 leading-none"
              aria-label="Home Page"
            >
              <Image
                priority
                src={
                  isInverted
                    ? CollActionWhiteLogoWithText
                    : CollActionBlackLogoWithText
                }
                alt="CollAction logo"
                className="block w-32 leading-none"
                sizes="128px"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <Link
                href="/"
                onClick={() => {
                  setNavbar(false);
                }}
                onKeyPress={() => setNavbar(false)}
                role="button"
                tabIndex={0}
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  router.asPath === '/'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                {t('app:navbar.home')}
              </Link>
              <Link
                href="/about"
                onClick={() => {
                  setNavbar(false);
                }}
                onKeyPress={() => setNavbar(false)}
                role="button"
                tabIndex={0}
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  router.asPath === '/about'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                {t('app:navbar.about')}
              </Link>
              <Link
                href="/team"
                onClick={() => {
                  setNavbar(false);
                }}
                onKeyPress={() => setNavbar(false)}
                role="button"
                tabIndex={0}
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  router.asPath === '/team'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                {t('app:navbar.team')}
              </Link>
              <Link
                href="/projects?page=1"
                onClick={() => {
                  setNavbar(false);
                }}
                onKeyPress={() => setNavbar(false)}
                role="button"
                tabIndex={0}
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  router.asPath.includes('/projects')
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                {t('app:navbar.projects')}
              </Link>
              <Link
                href="/donate"
                onClick={() => {
                  setNavbar(false);
                }}
                onKeyPress={() => setNavbar(false)}
                role="button"
                tabIndex={0}
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  router.asPath === '/donate'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                {t('app:navbar.donate')}
              </Link>
              <button
                onClick={() => setShowContactModal(true)}
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  router.asPath === '/contact'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                {t('app:navbar.contact')}
              </button>
              <p className="hidden lg:block"> | </p>
              <div className="h-7 w-7 flex space-x-4 mx-4 md:mx-0 md:ml-8">
                <CircleFlag
                  className={
                    router.locale != 'en' ? 'hover:cursor-pointer' : ''
                  }
                  countryCode="uk"
                  onClick={
                    router.locale != 'en'
                      ? () => onToggleLanguageClick('en')
                      : undefined
                  }
                />
                <CircleFlag
                  className={
                    router.locale != 'nl' ? 'hover:cursor-pointer' : ''
                  }
                  countryCode="nl"
                  onClick={
                    router.locale != 'nl'
                      ? () => onToggleLanguageClick('nl')
                      : undefined
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {showContactModal && (
        <ContactModal setShowContactModal={setShowContactModal} />
      )}
    </div>
  );
}

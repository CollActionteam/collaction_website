import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useState } from 'react';
import { CircleFlag } from 'react-circle-flags';
import CollActionBlackLogoWithText from 'public/logo-black-small.png';
import CollActionWhiteLogoWithText from 'public/logo-white-small.png';

const contactEmail = 'contact@collaction.org';

export default function NavBar() {
  const { pathname, asPath } = useRouter();
  const [navbar, setNavbar] = useState(false);

  // if it's inverted we'll show white text and a green background
  const isInverted = ['/westland'].includes(pathname);

  return (
    <header
      className={clsx(
        'relative w-full',
        pathname === '/asml' ? 'hidden' : 'block',
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
          'flex flex-col md:flex-row items-stretch md:items-center md:justify-between mx-8 md:mx-auto py-2',
          'max-w-300 sm:max-w-400 md:max-w-600 lg:max-w-864',
          'z-20'
        )}
      >
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <a className="block w-32 leading-none" aria-label="Home Page">
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
            </a>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
            <Link href="/">
              <a
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  asPath === '/' ? 'text-headline-s-1' : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                Home
              </a>
            </Link>
            <Link href="/aboutus">
              <a
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  asPath === '/join'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                About us
              </a>
            </Link>
            <Link href="/join">
              <a
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  asPath === '/join'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                Join
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  asPath === '/join'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                Projects
              </a>
            </Link>
            <Link href="/donate">
              <a
                className={clsx(
                  'flex items-center mx-4 md:mx-0 md:ml-8',
                  asPath === '/join'
                    ? 'text-headline-s-1'
                    : 'text-body-short-1',
                  isInverted ? 'text-secondary' : 'text-primary-300'
                )}
              >
                Donate
              </a>
            </Link>
            <a
              href={`mailto:${contactEmail}`}
              className={clsx(
                'flex items-center mx-4 md:mx-0 md:ml-8',
                asPath === '/contact'
                  ? 'text-headline-s-1'
                  : 'text-body-short-1',
                isInverted ? 'text-secondary' : 'text-primary-300'
              )}
            >
              Contact
            </a>
            <p className="hidden lg:block"> | </p>
            <div className="h-7 w-7 flex space-x-4 mx-4 md:mx-0 md:ml-8">
              <CircleFlag countryCode="uk" />
              <CircleFlag countryCode="nl" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

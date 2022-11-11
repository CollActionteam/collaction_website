import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { FiExternalLink } from 'react-icons/fi';

import CollActionBlackLogoWithText from 'public/logo-black-small.png';
import CollActionWhiteLogoWithText from 'public/logo-white-small.png';

const contactEmail = 'contact@collaction.org';

export default function NavBar() {
  const { pathname, asPath } = useRouter();

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
          'flex flex-col md:flex-row items-center flex-wrap justify-center md:justify-between mx-auto py-6',
          'max-w-300 sm:max-w-400 md:max-w-600 lg:max-w-864',
          'z-20'
        )}
      >
        <Link
          href="/"
          passHref
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
        <div className="flex justify-between items-center mt-6 md:mt-0">
          <Link
            href="/"
            className={clsx(
              'flex items-center mx-4 md:mx-0 md:ml-8',
              asPath === '/' ? 'text-headline-s-1' : 'text-body-short-1',
              isInverted ? 'text-secondary' : 'text-primary-300'
            )}
          >
            Home
          </Link>
          <Link
            href="/join"
            className={clsx(
              'flex items-center mx-4 md:mx-0 md:ml-8',
              asPath === '/join' ? 'text-headline-s-1' : 'text-body-short-1',
              isInverted ? 'text-secondary' : 'text-primary-300'
            )}
          >
            Join
          </Link>
          <a
            href={`mailto:${contactEmail}`}
            className={clsx(
              'flex items-center mx-4 md:mx-0 md:ml-8',
              asPath === '/contact' ? 'text-headline-s-1' : 'text-body-short-1',
              isInverted ? 'text-secondary' : 'text-primary-300'
            )}
          >
            Contact
            <FiExternalLink className="ml-3 text-sm" />
          </a>
        </div>
      </div>
    </header>
  );
}

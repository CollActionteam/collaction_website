import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import CollActionBlackLogoWithText from 'public/logo-black-small.png';
import CollActionWhiteLogoWithText from 'public/logo-white-small.png';

const StyledNavLink = ({
  href,
  text,
  isInverted,
}: {
  href: string;
  text: string;
  isInverted: boolean;
}) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={clsx(
          'mx-4 md:mx-0 md:ml-6',
          asPath === href ? 'text-headline-s-1' : 'text-body-short-1',
          isInverted ? 'text-secondary' : 'text-primary-300'
        )}
      >
        {text}
      </a>
    </Link>
  );
};

export default function NavBar() {
  const { pathname } = useRouter();

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
        <div className="flex justify-between items-center mt-6 md:mt-0">
          <StyledNavLink href="/" text="Home" isInverted={isInverted} />
          <StyledNavLink
            href="/contact"
            text="Contact"
            isInverted={isInverted}
          />
          <StyledNavLink href="/join" text="Join" isInverted={isInverted} />
          <StyledNavLink href="/donate" text="Donate" isInverted={isInverted} />
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import CollActionLogoWithText from 'public/logo-black-small.png';

const StyledNavLink = ({ href, text }: { href: string; text: string }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={clsx(
          'mx-4 md:mx-0 md:ml-6',
          asPath === href ? 'text-headline-s-1' : 'text-body-short-1'
        )}
      >
        {text}
      </a>
    </Link>
  );
};

export default function NavBar() {
  const { pathname } = useRouter();

  return (
    <header
      className={clsx(
        'bg-secondary w-full',
        pathname === '/asml' ? 'hidden' : 'block'
      )}
    >
      <div
        className={clsx(
          'flex flex-col md:flex-row items-center flex-wrap justify-center md:justify-between mx-auto py-6',
          'max-w-300 sm:max-w-400 md:max-w-600 lg:max-w-864'
        )}
      >
        <Link href="/">
          <a className="block w-32 leading-none" aria-label="Home Page">
            <Image
              priority
              src={CollActionLogoWithText}
              alt="CollAction logo"
              className="block w-32 leading-none"
              sizes="128px"
            />
          </a>
        </Link>
        <div className="flex justify-between items-center mt-6 md:mt-0">
          <StyledNavLink href="/" text="Home" />
          <StyledNavLink href="/contact" text="Contact" />
          <StyledNavLink href="/join" text="Join" />
          <StyledNavLink href="/donate" text="Donate" />
        </div>
      </div>
    </header>
  );
}

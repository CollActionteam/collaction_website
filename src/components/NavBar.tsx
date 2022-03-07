import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import CollActionLogoWithText from 'public/logo-black-small.png';

export default function NavBar() {
  const { pathname } = useRouter();

  return (
    <header
      className={clsx(
        'bg-secondary w-full h-12 ',
        pathname === '/asml' ? 'hidden' : 'block'
      )}
    >
      <div className="flex items-center py-6 flex-wrap justify-center sm:justify-between px-7">
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
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="mx-3">Home</a>
          </Link>
          <Link href="/">
            <a className="mx-3">Contact</a>
          </Link>
          <Link href="/">
            <a className="mx-3">Join</a>
          </Link>
          <Link href="/">
            <a className="mx-3">Donate</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

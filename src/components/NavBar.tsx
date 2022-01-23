import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import CollActionLogoWithText from 'public/logo-green-small.png';

export default function NavBar() {
  const { pathname } = useRouter();

  return (
    <header
      className={clsx(
        'bg-secondary w-full py-4',
        pathname === '/asml' ? 'hidden' : 'block'
      )}
    >
      <div className="flex items-center justify-between px-8">
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
      </div>
    </header>
  );
}

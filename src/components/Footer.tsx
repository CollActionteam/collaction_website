import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import CollActionLogoWithText from 'public/logo-black-small.png';
import PoweredByVercel from 'public/powered-by-vercel.svg';
import { useTranslation } from 'next-i18next';

const email = 'contact@collaction.org';
const KvK = '65628608';
const RSIN = '856193690';

export default function Footer() {
  const { pathname } = useRouter();

  const { t } = useTranslation();

  return (
    <footer
      className={clsx(
        'text-primary-400 w-full h-940 md:h-440 py-12 px-5',
        pathname !== '/westland' && 'bg-secondary'
      )}
    >
      <div className="flex flex-col md:flex-row md:justify-between w-full max-w-400 md:max-w-600 lg:w-208 lg:max-w-4xl mx-auto py-12 border-t border-primary-100">
        <div>
          <Link
            href="/"
            passHref
            className="block w-40 relative leading-none mb-5"
          >
            <Image
              src={CollActionLogoWithText}
              alt="black CollAction logo with text"
              placeholder="blur"
              sizes="160px"
            />
          </Link>
          <p className="mb-5">
            © 2025 {t('app:footer.copyright')} <br />
            {t('app:footer.rights')}.
          </p>
          <div className="flex mb-5 md:mb-0">
            <a
              href="https://www.instagram.com/collaction_org/"
              target="_blank"
              rel="noreferrer"
              className="bg-primary-400 text-secondary h-8 w-8 p-3 mr-5 rounded-full"
              aria-label="Instagram"
            >
              <FiInstagram size="24" />
            </a>
            <a
              href="https://www.linkedin.com/company/stichting-collaction"
              target="_blank"
              rel="noreferrer"
              className="bg-primary-400 text-secondary h-8 w-8 p-3 mr-5 rounded-full"
              aria-label="LinkedIn"
            >
              <FiLinkedin size="24" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-headline mb-5">{t('app:footer.reach')}</h5>
          <ul className="list-none">
            <li className="mb-5 md:mb-0">
              <a href={`mailto:${email}`}>hello@collaction.org</a>
            </li>
            <li className="mb-5">NL20TRIO0391190008</li>
            <li className="mb-5 md:mb-0">
              De Molenkamp 10 <br />
              7822EH Emmen <br />
              Netherlands
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-headline mb-5">{t('app:footer.legal')}</h5>
          <ul className="list-none">
            <li className="mb-5 md:mb-0">
              <Link href="/privacy">{t('app:footer.privacy')}</Link>
            </li>
            <li className="mb-5 md:mb-0">
              <Link href="/terms">{t('app:footer.terms')}</Link>
            </li>
            <li className="mb-5">
              <Link href="/anbi">ANBI</Link>
            </li>
            <li className="mb-5 md:mb-0">KvK: {KvK}</li>
            <li className="mb-5 md:mb-0">RSIN: {RSIN}</li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-400 md:max-w-600 lg:w-208 lg:max-w-4xl mx-auto">
        <a
          href="https://vercel.com?utm_source=collaction&utm_campaign=oss"
          aria-label="Powered By Vercel"
          className="block w-40 md:mx-auto md:mt-5"
        >
          <Image src={PoweredByVercel} alt="Powered by Vercel" sizes="160px" />
        </a>
      </div>
    </footer>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';

import CollActionLogoWithText from 'public/black-logo-name.png';
import PoweredByVercel from 'public/powered-by-vercel.svg';

const phone = '+31640394005';
const email = 'contact@collaction.org';
const KvK = '65628608';
const RSIN = '856193690';

export default function Footer() {
  return (
    <footer className="bg-secondary text-black-400 absolute bottom-0 w-full h-940 md:h-440 py-24 px-5">
      <div className="flex flex-col md:flex-row md:justify-between w-full md:max-w-600 lg:w-208 lg:max-w-4xl mx-auto">
        <div>
          <Link href="/">
            <a className="block w-40 relative leading-none mb-5">
              <Image
                src={CollActionLogoWithText}
                alt="black CollAction logo with text"
                layout="responsive"
                placeholder="blur"
                sizes="160px"
              />
            </a>
          </Link>
          <p className="mb-5">
            © 2022 Copyright <br />
            All Rights Reserved.
          </p>
          <div className="flex mb-5 md:mb-0">
            <a
              href="https://www.instagram.com/collaction_org/"
              target="_blank"
              rel="noreferrer"
              className="bg-black-400 text-secondary h-10 w-10 p-2 mr-5 rounded-full"
              aria-label="Instagram"
            >
              <FiInstagram size="24" />
            </a>
            <a
              href="https://www.linkedin.com/company/stichting-collaction"
              target="_blank"
              rel="noreferrer"
              className="bg-black-400 text-secondary h-10 w-10 p-2 mr-5 rounded-full"
              aria-label="LinkedIn"
            >
              <FiLinkedin size="24" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-headline mb-5">Reach us</h5>
          <ul className="list-none">
            <li className="mb-5 md:mb-0">
              <a href={`tel:${phone}`}>+316 40394005</a>
            </li>
            <li className="mb-5 md:mb-0">
              <a href={`mailto:${email}`}>contact@collaction.org</a>
            </li>
            <li className="mb-5">NL20TRIO0391190008</li>
            <li className="mb-5 md:mb-0">
              Hyacintenlaan 25 <br />
              2015BA Haarlem
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-headline mb-5">Legal</h5>
          <ul className="list-none">
            <li className="mb-5 md:mb-0">
              <Link href="/privacy">
                <a>Privacy policy</a>
              </Link>
            </li>
            <li className="mb-5 md:mb-0">
              <Link href="/terms">
                <a>Terms of use</a>
              </Link>
            </li>
            <li className="mb-5">
              <Link href="/anbi">
                <a>ANBI</a>
              </Link>
            </li>
            <li className="mb-5 md:mb-0">KvK: {KvK}</li>
            <li className="mb-5 md:mb-0">RSIN: {RSIN}</li>
          </ul>
        </div>
      </div>

      <a
        href="https://vercel.com?utm_source=collaction&utm_campaign=oss"
        aria-label="Powered By Vercel"
        className="block w-40 md:mx-auto md:mt-5"
      >
        <Image
          src={PoweredByVercel}
          alt="Powered by Vercel"
          layout="responsive"
          sizes="160px"
        />
      </a>
    </footer>
  );
}

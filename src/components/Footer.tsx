import React, { ReactElement } from "react";

import { InstagramLogo, LinkedinLogo } from 'phosphor-react';

export default function Footer(): ReactElement {
  return (
    <div className="flex pb-5 px-3 m-auto pt-5 text-gray-800 text-sm flex-col md:flex-row max-w-6xl">
      <div className="md:w-1/3  mt-2 text-center md:text-left order-3 md:order-1">© Copyright 2021. All Rights Reserved.</div>

      <div className="md:w-1/3 text-center order-1 md:order-2 mt-2 flex-row flex justify-center">
        <a href="https://www.instagram.com/collaction_org/" target="_blank" rel="noreferrer" className="w-6 mx-1">
          <InstagramLogo size={24} />
        </a>
        <a href="https://www.linkedin.com/company/stichting-collaction" target="_blank" rel="noreferrer" className="w-6 mx-1">
          <LinkedinLogo size={24} />
        </a>
      </div>
      
      <div className="md:w-1/3 order-2 md:order-3 mt-3 mb-1 md:mb-0 md:mt-2 flex-row flex justify-center md:justify-end">
        <a href="https://vercel.com/?utm_source=collaction&utm_campaign=oss">
          <img className="block h-6 w-auto" src="/powered-by-vercel.svg" alt="CollAction" />
        </a>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Cookie } from "phosphor-react";
import { checkCookieSelection, makeCookieSelection } from "./utils";

export default function CookiesBanner() {
  // if the user has already accepted/rejected cookies, we don't want to show again
  if (checkCookieSelection()) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-secondary py-5 px-12 z-50">
      {/* TEXT */}
      <p className="max-w-600 mx-auto text-black-300 text-center mb-5 ">
        We value your privacy. We and our partners use trackers to measure the
        audience of our website and to provide you with offers and improve on
        our own operations.{" "}
        <Link href="/privacy">
          <a className="underline">
            More info on cookies and providers we use.
          </a>
        </Link>
      </p>

      {/* BUTTONS */}
      <div className="max-w-600 mx-auto flex flex-col-reverse items-center md:flex-row">
        {/* REJECT */}
        <button
          className="bg-black-0 text-black-100 font-bold leading-none text-center rounded-full p-3 h-13 w-72 mr-0 md:mr-3"
          onClick={() => makeCookieSelection("0")}
        >
          Reject
        </button>

        {/* ACCEPT */}
        <button
          className="bg-accent text-white leading-none font-bold text-center rounded-full p-3 h-13 w-72 mb-3 md:mb-0"
          onClick={() => makeCookieSelection("1")}
        >
          <span className="align-middle">Accept</span>
          <Cookie className="h-6 w-6 inline-block ml-4" weight="bold" />
        </button>
      </div>
    </div>
  );
}

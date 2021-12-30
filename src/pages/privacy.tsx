/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Privacy Policy | CollAction</title>
      </Head>

      <main className="bg-black-0 p-5 md:p-12">
        <div className="max-w-600 mx-auto">
          <h1 className="text-black-400 text-center mb-6">Terms of Use</h1>
          <p className="text-black-400 text-center mb-8">
            version dated December 30th, 2021
          </p>

          <h4 className="text-black-300 mb-8">Terms of Use Platform</h4>
          <p className="mb-6 last:mb-0">
            These terms of use, as amended from time to time (hereinafter
            referred to as the "Terms of Use") describe the terms under which
            use may be made of the website and the application (together and
            separately hereinafter also referred to as the "Platform") of and
            offered by Stichting CollAction (hereinafter referred to as
            "CollAction" or "we" or "us").
          </p>
        </div>
      </main>
    </>
  );
}

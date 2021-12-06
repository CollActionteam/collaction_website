import Head from "next/head";
import Image from "next/image";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Privacy Policy | CollAction</title>

        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=optional"
          rel="stylesheet"
        />
      </Head>

      <main className="h-screen w-screen relative flex flex-col justify-between py-4 px-0 md:pt-0">
        <div className="container mx-auto">
          <div className="px-4">
            <h1 className="text-collaction text-2xl font-medium">
              Privacy Policy
            </h1>
            <p>
              Privacy Policy will be visible here soon.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
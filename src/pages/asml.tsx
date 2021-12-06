import Head from "next/head";
import Image from "next/image";

export default function ASMLPage() {
  return (
    <>
      <Head>
        <title>ASML | CollAction</title>

        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=optional"
          rel="stylesheet"
        />
      </Head>

      <main className="h-screen w-screen relative flex flex-col justify-between py-4 px-0 md:pt-0">
        <div>
          <div className="relative w-full md:w-3/5 mx-auto">
            <Image
              priority
              src="/Veganuary-ASML.png"
              alt="asml veganuary banner"
              width={2076}
              height={990}
            />
          </div>

          <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl xl:text-6xl sm:leading-normal font-bold">
            Coming Soon
          </h1>
        </div>

        <div className="w-36 mx-auto">
          <div className="relative leading-none">
            <Image
              src="/logo.svg"
              alt="Collaction logo"
              width={623}
              height={152}
            />
          </div>
        </div>

        <style jsx>{`
          main {
            font-family: "Rubik", sans-serif;
            background-color: #efefef;
            color: #2b2f33;
          }

          h1 {
            text-decoration: wavy overline #01c29a;
            margin-top: 1.5rem;
          }
        `}</style>
      </main>
    </>
  );
}

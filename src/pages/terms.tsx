import Head from "next/head";
import Image from "next/image";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | CollAction</title>
      </Head>

      <main className="h-screen w-screen relative flex flex-col justify-between py-4 px-0 md:pt-0">
        <div className="container mx-auto">
          <div className="px-4">
            <h1 className="text-collaction text-2xl font-medium">
              Terms & Conditions
            </h1>
            <p>Terms & Conditions will be visible here soon.</p>
          </div>
        </div>
      </main>
    </>
  );
}
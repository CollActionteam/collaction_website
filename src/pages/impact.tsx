import Head from "next/head";
import Image from "next/image";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Impact | CollAction</title>
      </Head>

      <main className="h-screen w-screen relative flex flex-col justify-between py-4 px-0 md:pt-0">
        <div className="container mx-auto">
          <div className="px-4">
            <h1 className="text-collaction text-2xl font-medium">
              Impact Calculation
            </h1>
            <p>You can calculate your individual impact here!</p>
          </div>
        </div>
      </main>
    </>
  );
}

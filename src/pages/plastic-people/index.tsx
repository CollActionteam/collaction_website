import React from 'react';
import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import Greenlands2023 from 'public/Greenlands2023.png';
import collactionTranslations from 'src/helpers/collactionTranslations';

// import img1 from 'public/sjs/sjs1.jpg';
// import img2 from 'public/sjs/sjs2.jpg';
// import img3 from 'public/sjs/sjs3.jpg';
// import img4 from 'public/sjs/sjs4.jpg';
// import img5 from 'public/sjs/sjs5.jpg';
// import img6 from 'public/sjs/sjs6.jpg';
// import img8 from 'public/sjs/sjs8.jpg';
// import img9 from 'public/sjs/sjs9.jpg';
// import img10 from 'public/sjs/sjs10.jpg';
// import img11 from 'public/sjs/sjs11.jpg';
// import img12 from 'public/sjs/sjs12.jpg';
// import img13 from 'public/sjs/sjs13.jpg';
// import img14 from 'public/sjs/sjs14.jpeg';
// import img15 from 'public/sjs/sjs15.jpeg';

export default function UilenstedeIndexPage() {
  return (
    <>
      <PageSEO title="Plastic People | CollAction" />

      <main className="mt-8 mb-12">
        <section>
          <div className="text-center mx-auto max-w-700 sm:max-w-400 lg:max-w-600">
            <h1 className="text-collaction text-center mb-8">Plastic People</h1>
          </div>

          <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
            <Image
              priority
              src={Greenlands2023}
              alt="Greenlands2023"
              className="rounded-1"
              sizes="(max-width: 768px) 90vw, 830px"
              placeholder="blur"
            />
          </div>
          <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 py-5 px-5">
            <h4 className="text-collaction mt-6 mb-2">
              Wat is Plastic People?
            </h4>
            <p className="mb-2">To be filled</p>
            <h4 className="text-collaction mt-6 mb-2">Waarom zou ik komen?</h4>
            <p className="mb-2">
              Greenlands is een veelzijdig ... aantal voor u opgesomd:
            </p>
            <ul style={{ listStyleType: 'disc' }} className="pl-7">
              <li className="mb-2">reden 1</li>
              <li className="mb-2">reden 2</li>
            </ul>
            <h4 className="text-collaction mt-6 mb-2">Hoe kan ik meehelpen?</h4>
          </div>
        </section>

        <section>
          <InfoCard
            isSecondaryBg
            title="Kom je ook?"
            body="Schrijf je in via onze app!"
          >
            <div className="flex justify-center">
              <AppLinkApple className="mr-4 sm:mr-5" />
              <AppLinkGoogle />
            </div>
          </InfoCard>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      ...(await collactionTranslations(locale)),
    },
  };
}

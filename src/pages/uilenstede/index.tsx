import React from 'react';
import Image, { StaticImageData } from 'next/image';

import TomTomImg from 'public/actions/tomtom.png';
import Amstelveen from 'public/amstelveen.png';
import Uilenstede_banner from 'public/uilenstede_banner.png';
import Uilenstede_map from 'public/uilenstede_map.png';
import PageSEO from 'src/components/PageSEO';

import { useCountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';
import Sluipverbruik from 'public/actions/sluipverbruik.png';
import CO2Img from 'public/impact/co2.jpeg';
import CollActionLogoWithTextWhite from 'public/logo-white-small.png';

const formId = 'nvzkdCMO';

// const whatsAppUrl = '#';
// const ikDoeMeeUrl = '#';

export default function WestlandIndexPage() {
  return (
    <>
      <PageSEO
        title="CollAction meets Uilenstede | The Big Uilenstede Clean Up"
        // description=""
      />

      <main className="p-5 pt-10 md:pt-11">
        <div className="text-center mx-auto max-w-700 sm:max-w-400 lg:max-w-600">
          <h1 className="text-collaction text-center mb-9">
            The Big Uilenstede Clean Up
          </h1>
        </div>
        <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
          <Image
            priority
            src={Uilenstede_banner}
            alt="westland banner"
            className="rounded-1"
            layout="responsive"
            sizes="(max-width: 768px) 90vw, 830px"
            placeholder="blur"
          />
        </div>

        {/* <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500 mt-10 md:mt-11">
          <h4 className="text-primary-400 mb-7">Doe mee</h4>
          <p className="mb-6">
            Schrijf je in via de “Ik doe mee” knop en geef op wat je wil doen om
            energie te besparen deze zomer. Laat ons je meterstand weten zodat
            wij kunnen kijken wat je bespaard hebt. Samen kunnen we Westland
            groener maken! Kijk in onze WhatsApp groep voor tips en wie nog meer
            meedoen aan deze actie. Wij rekenen uit wat de impact is die wij met
            z’n allen hebben behaald en laten de resultaten hier zien.
          </p>
        </div> */}

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 mt-10 md:mt-11">
          <h4 className="text-collaction mb-2">Why should I participate?</h4>
          <p className="mb-6">
            <strong>
              Get free drinks in return for a clean campus, eenheid and room!{' '}
            </strong>
          </p>

          <h4 className="text-collaction mb-2">What is the campaign?</h4>
          <p className="mb-6">
            In September we’ll make the campus prettier by doing a
            start-of-the-year clean up. In the first 2 weeks, you can hand in
            your e-waste and bulk waste (grof afval) and you’ll get vouchers in
            return. In the 2 weeks after, we’ll organize 2 litter collection
            events to make our campus shine!
          </p>

          <h5 className="text-collaction mb-2">What is a voucher?</h5>
          <p className="mb-6">
            A voucher stands for one beer, soft drink or coffee at Sportcentrum
            VU, which can be redeemed anytime until October 31st 2022.
          </p>

          <h6 className="text-collaction mb-2">How do I get vouchers?</h6>
          <p className="mb-6">
            Together with your eenheid or another group formed by you, collect
            your e-waste and bulk waste and bring it to us. Each piece of
            garbage stands for a number of points. For each 5 points you hand
            in, you get 1 voucher! See the back of this paper for a conversion
            list. NB: is your garbage not there? You can still get points for
            it! Send us a Whatsapp or come to our stand and we’ll tell you how
            many points you get.
          </p>

          <h4 className="text-collaction mb-2">
            How many points do I get for my trash?
          </h4>
          <p className="mb-6">
            Get free drinks in return for a clean campus, garden, eenheid and
            room!
          </p>

          <h4 className="text-collaction mb-2">Can I win anything?</h4>
          <p className="mb-2">
            Yes! Prizes for the teams that collect the most points are listed
            below. You get these on top of the vouchers you already get for your
            garbage. To be eligible for the vouchers, your team must have
            collected at least the number of vouchers expressed in points.
          </p>

          <ul style={{ listStyleType: 'decimal' }} className="pl-7">
            <strong>
              <li className="mb-2">
                <strong>
                  100 vouchers & 14 tickets for Thuisfront Festival & personal
                  clinic at Sportcentrum VU
                </strong>
              </li>
              <li className="mb-2">
                <strong>
                  42 vouchers & rent Uilenkatten speakers for free
                </strong>
              </li>
              <li className="mb-6">
                <strong> 14 vouchers</strong>
              </li>
            </strong>
          </ul>
        </div>

        <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
          <Image
            priority
            src={Uilenstede_map}
            alt="westland banner"
            className="rounded-1"
            layout="responsive"
            sizes="(max-width: 768px) 90vw, 830px"
            placeholder="blur"
          />
        </div>
      </main>

      {/* COLLACTION TEAM IMAGE */}
      <section className="pb-11">
        <div
          className="relative text-center mx-auto xs:max-w-350 sm:max-w-400 lg:max-w-500 rounded-none xs:rounded-1"
          style={{ height: 450 }}
        >
          <div className="absolute h-full w-full rounded-none xs:rounded-1">
            <Image
              src={TomTomImg}
              alt="CollAction Team"
              layout="fill"
              objectFit="cover"
              className="rounded-none xs:rounded-1"
            />
          </div>
          <div
            className="absolute h-full w-full rounded-none xs:rounded-1"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0) 22.92%, rgba(0, 0, 0, 0.6) 75%)',
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 mb-9 mx-auto text-center w-full px-5 xs:max-w-350 sm:max-w-400 lg:max-w-500">
            <h4 className="text-headline-lg-1 text-secondary mb-6">
              Want to use CollAction for your project?
            </h4>
            <p className="text-body-short-1 text-secondary">
              Do you have a collective action idea? Can CollAction help? Send us
              a message at{' '}
              {
                <a
                  className="text-collaction"
                  href="mailto:use@collaction.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  use@collaction.org
                </a>
              }
            </p>
          </div>
        </div>
      </section>

      <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
        <Image
          priority
          src={Amstelveen}
          alt="westland banner"
          className="rounded-1"
          layout="responsive"
          sizes="(max-width: 768px) 90vw, 830px"
          placeholder="blur"
        />
      </div>
      {/* 
      <a
        className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 mb-0 w-72 shadow sticky bottom-7 inset-x-0 mx-auto z-40"
        style={{ marginTop: `calc(-3rem)` }}
        // href={ikDoeMeeUrl}
      >
        <PopupButton id={formId} size={80}>
          <button>Ik doe mee</button>
        </PopupButton>
      </a>
       */}
    </>
  );
}

// ===========
// IMAGE CARDS
// ===========
type ImageCard = {
  image: StaticImageData;
  top: string;
  value: number;
  bottom: string;
};

const imgCards: ImageCard[] = [
  {
    image: Sluipverbruik,
    top: 'Bespaar jaarlijks',
    value: 280,
    bottom: 'euro door sluipverbruik te verminderen',
  },
  {
    image: CO2Img,
    top: 'Gelijkwaardig aan',
    value: 47000,
    bottom: 'kg CO2',
  },
];

function ImageCard({ card, index }: { card: ImageCard; index: number }) {
  // https://www.npmjs.com/package/react-intersection-observer
  const [cardRef, inView] = useInView();

  // https://www.npmjs.com/package/use-count-up
  const { value } = useCountUp({
    end: card.value,
    start: card.value / 2,
    duration: 2,
    decimalPlaces: 0,
    isCounting: inView,
    thousandsSeparator: ',',
  });

  return (
    <div
      ref={cardRef}
      className="relative flex justify-center items-center w-full max-w-350 md:max-w-400 h-full aspect-[0.7] rounded-1 md:mx-5 mb-5 sm:mb-7"
    >
      <div className="block w-full h-full overflow-hidden rounded-1">
        <Image
          priority={index < 2}
          src={card.image}
          alt={card.bottom}
          placeholder="blur"
          layout="responsive"
          sizes="(max-width: 767px) 350px, 400px"
          className="rounded-1"
        />
      </div>
      <div
        className="absolute w-full h-full rounded-1"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 35.3%, rgba(0, 0, 0, 0.38) 100%)`,
        }}
      />
      <div className="absolute text-secondary text-center text-shadow">
        {/* top text */}
        {card.top && <div className="text-footnote">{card.top}</div>}
        {/* large middle value/text */}
        <div className="text-8xl font-bold mb-[10px]">{value}</div>
        {/* bottom text */}
        <div className="text-headline font-bold">{card.bottom}</div>
      </div>
      <div className="absolute text-center bottom-8 md:bottom-12">
        <Image
          src={CollActionLogoWithTextWhite}
          alt="Collaction White Logo"
          width={96}
          height={24}
        />
      </div>
    </div>
  );
}

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import TomTomImg from 'public/actions/tomtom.png';
import WestlandBanner from 'public/WestlandGroenDoen.png';
import PageSEO from 'src/components/PageSEO';
import { WestlandCard } from 'src/components/WestlandCard';

import { useCountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';
import Sluipverbruik from 'public/actions/sluipverbruik.png';
import CO2Img from 'public/impact/co2.jpeg';
import CollActionLogoWithTextWhite from 'public/logo-white-small.png';

// const whatsAppUrl = '#';
const ikDoeMeeUrl = '#';

export default function WestlandIndexPage() {
  return (
    <>
      <PageSEO
        title="CollAction meets Westland | Make an impact together"
        // description=""
      />

      <main className="p-5 pt-10 md:pt-11">
        <div className="text-center mx-auto max-w-350 sm:max-w-400 lg:max-w-500">
          <h1 className="text-headline-lg-1 text-secondary mt-7 mb-11">
            Groen doen in Westland
          </h1>
        </div>
        <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
          <Image
            priority
            src={WestlandBanner}
            alt="westland banner"
            className="rounded-1"
            layout="responsive"
            sizes="(max-width: 768px) 90vw, 830px"
            placeholder="blur"
          />
        </div>

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500 mt-10 md:mt-11">
          <h4 className="text-primary-400 mb-7">Doe mee</h4>
          <p className="mb-6">
            Schrijf je in via de “Ik doe mee” knop en geef op wat je wil doen om
            energie te besparen deze zomer. Samen kunnen we Westland groener
            maken. Kijk in onze WhatsApp groep voor tips en wie nog meer meedoen
            aan deze actie. Wij rekenen uiteindelijk uit wat de impact is die
            wij met z’n allen hebben behaald.
          </p>
        </div>
        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500 mt-10 md:mt-10">
          <h4 className="text-primary-400 mb-7">
            Goed voor het milieu en je portemonnee
          </h4>
          <p className="mb-6">
            Door mee te doen met de actie energiebesparing in de zomer bespaar
            je gemakkelijk honderden euros op je (energie)jaarrekening. Het
            leuke is dat je dit ook echt bij kan houden met je energiemeter.
          </p>
          <p className="mb-10">
            Wij zorgen voor alle tips die je nodig hebt om een zo goed mogelijk
            resultaat te krijgen. Duurzamer leven helpt met het creëren van een
            mooie toekomst voor onszelf en alle generaties die volgen.
          </p>
        </div>
        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500 mt-10 md:mt-10">
          <h4 className="text-primary-400 mb-7">Jouw huis, jouw regels</h4>
          <p className="mb-9 md:mb-2">
            Hoeveel aandacht je eraan besteedt bepaal je helemaal zelf! Hoe meer
            opdrachten je uitvoert, hoe duurzamer/energiezuiniger jouw huis
            wordt. Je focust je hier dan volledig op gedurende een periode van 1
            of 2 maanden. Ben je benieuwd wat voor soort opdrachten je kunt
            verwachten? Een voorbeeld is het verminderen van je sluipverbruik.
            Door er slim mee om te gaan kan je besparing al snel oplopen!
          </p>
          {/* <ul style={{ listStyleType: 'decimal' }} className="pl-7">
            <li className="mb-2">
              Bespaar jaarlijks per huishouden gemiddeld EUR280 door
              sluipverbruik te elimineren
            </li>
            <li className="mb-8">
              Voorkom samen de jaarlijkse uitstoot van 47.000 kg CO2 in Westland
              door sluipverbruik
            </li>
          </ul> */}
        </div>
        {/* IMAGE CARDS */}
        <div className="flex flex-wrap md:flex-row justify-center max-w-864 mx-auto mb-10 lg:mb-14 md:mt-10">
          {imgCards.map((card, i) => (
            <ImageCard key={card.bottom} card={card} index={i} />
          ))}
        </div>

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500">
          <h4 className="text-primary-400 mb-7">Doe mee en win</h4>
          <p className="mb-9 md:mb-2">
            Naast onze Ik doe mee kun je op 2 manieren meer betrokken raken! Op
            de volgende 2 kaarten beschrijven we hoe.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center mx-auto md:max-w-864 mt-12 lg:mt-15 mb-4 md:mb-8">
          {[
            {
              title: 'Groen groener groenst',
              image: '/garden.png',
              content: `We delen prijzen uit voor in jouw tuin. Laat zien hoe groen jouw tuin is (geworden) door een foto naar ons te sturen en maak kans! De vijf beste inzendingen vallen in de prijzen. Daag jij je buren uit?`,
              submitPhotoName: 'Deel je foto',
              submitPhotoUrl: 'mailto:westland@collaction.org',
            },
            {
              title: 'Doe mee in onze Whatsapp-groep',
              image: '/whatsapp.png',
              content: `Doe mee in de Whatsapp-groep en deel via ons jouw tips en resultaten. In de groepsbeschrijving vertellen we je meer over hoe je kunt deelnemen!`,
              submitPhotoName: 'Word onderdeel',
              submitPhotoUrl: '#',
            },
          ].map(details => (
            <WestlandCard key={details.title} {...details} />
          ))}
        </div>
        {/* <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500">
          <p className="mb-6">
            Elke 'actie' staat voor een bepaalde impact. Je ontvangt punten voor
            de grootte van de impact die je hebt gemaakt.
          </p>
          <p className="mb-10 sm:mb-11">
            Laten we kijken hoeveel we deze zomer kunnen besparen. Op onze
            energierekening én voor het milieu.
          </p>
        </div> */}
        {/* STAY CONNECTED
        <div className="mb-8 sm:mb-9 md:mb-10">
          <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500 text-center">
            <h4 className="text-headline-m-1 text-primary-400 mb-7">
              Stay connected
            </h4>
            <p className="text-body-long-1 text-primary-300 mb-6">
              Some text about the whatsapp group for the first crowdaction in
              westland
            </p>
          </div>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-secondary flex justify-between items-center mx-auto xs:max-w-350 sm:max-w-400 p-6 rounded-1"
          >
            <div className="bg-collaction h-10 w-10 flex items-center justify-center rounded-full">
              <FaWhatsapp className="text-secondary h-6 w-6" />
            </div>
            <span className="text-primary-400 text-headline font-normal">
              Join our WhatsApp group
            </span>
            <FiExternalLink className="text-primary-400 h-6 w-6" />
          </a>
        </div> */}
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
              Wij luisteren naar jouw idee
            </h4>
            <p className="text-body-short-1 text-secondary">
              Doe mee aan ons onderzoek en bepaal welke actie wij gaan doen
            </p>
          </div>
        </div>
      </section>

      <a
        className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 mb-0 w-72 shadow sticky bottom-7 inset-x-0 mx-auto z-40"
        style={{ marginTop: `calc(-3rem)` }}
        href={ikDoeMeeUrl}
      >
        Ik doe mee
      </a>
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
    bottom: 'Euro door sluipverbruik te verminderen',
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

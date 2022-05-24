import React from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import CollActionTeamPic from 'public/actions/collaction-team-pic.png';
import ASMLBanner from 'public/veganuary-ASML-banner.png';
import PageSEO from 'src/components/PageSEO';
import { WestlandCard } from 'src/components/WestlandCard';

const whatsAppUrl = '#';
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
            Groen doen in Westland. Samen maken we de zomer groener!
          </h1>
        </div>

        <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
          <Image
            priority
            src={ASMLBanner}
            alt="westland banner"
            className="rounded-1"
            layout="responsive"
            sizes="(max-width: 768px) 90vw, 830px"
            placeholder="blur"
          />
        </div>

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500 mt-10 md:mt-11">
          <h4 className="text-primary-400 mb-7">Actie!</h4>
          <p className="mb-6">
            Jij bepaalt hoe je mee doet, door je eigen 'actie' te kiezen.
            Gebaseerd op de opdrachten die je hebt gekozen, krijg je aan het
            einde van de maand een badge.
          </p>
          <p className="mb-10">
            Om je bij de les te houden, geven wij je tips om de acties zo goed
            mogelijk uit te voeren.
          </p>
        </div>

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500">
          <h4 className="text-primary-400 mb-7">
            Jouw acties, dus jij bepaalt.
          </h4>
          <p className="mb-9 md:mb-10">
            Hoe je deel wil nemen, bepaal je zelf door aan te kruisen hoe je mee
            wil doen.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center mx-auto md:max-w-864 mt-12 lg:mt-15 mb-4 md:mb-8">
          {[
            {
              title: 'The greenest garden',
              image: '/cow.png',
              content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis augue porttitor justo luctus placerat nec in nisi. In hac habitasse platea dictumst. Duis sit amet mi se...`,
              submitPhotoUrl: '#',
            },
            {
              title: 'The greenest garden',
              image: '/cow.png',
              content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
              submitPhotoUrl: '#',
            },
          ].map(details => (
            <WestlandCard key={details.title} {...details} />
          ))}
        </div>

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-500">
          <p className="mb-6">
            Elke 'actie' staat voor een bepaalde impact. Je ontvangt punten voor
            de grootte van de impact die je hebt gemaakt.
          </p>
          <p className="mb-10 sm:mb-11">
            Laten we kijken hoeveel we deze zomer kunnen besparen. Op onze
            energierekening én voor het milieu.
          </p>
        </div>

        {/* STAY CONNECTED */}
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
              src={CollActionTeamPic}
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
              The CollAction team
            </h4>
            <p className="text-body-short-1 text-secondary">
              Help us on our mission to make doing good fun & easy
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

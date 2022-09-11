import React from 'react';
import Image, { StaticImageData } from 'next/image';

import TomTomImg from 'public/actions/tomtom.png';
import Collaboration from 'public/uilenstede_collaboration.png';
import Uilenstede_banner from 'public/uilenstede_banner.jpg';
import Uilenstede_map from 'public/uilenstede_map.png';
import PageSEO from 'src/components/PageSEO';

import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import { useCountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';
import Sluipverbruik from 'public/actions/sluipverbruik.png';
import CO2Img from 'public/impact/co2.jpeg';
import CollActionLogoWithTextWhite from 'public/logo-white-small.png';

// const whatsAppUrl = '#';
// const ikDoeMeeUrl = '#';

export default function WestlandIndexPage() {
  return (
    <>
      <PageSEO
        title="CollAction meets Uilenstede | The Big Uilenstede Clean Up"
        // description=""
      />

      <main className="p-5 md:pt-8">
        <div className="text-center mx-auto max-w-700 sm:max-w-400 lg:max-w-600">
          <h1 className="text-collaction text-center mb-8">
            The Big Uilenstede Cleanup
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

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 ">
          Photographer: Isis Greven
          <h4 className="text-collaction mt-8 mb-2">Why participate?</h4>
          <p className="mb-6">
            <strong>
              Free drinks in return for your old phone, oven and more!
            </strong>{' '}
            So get your <i>eenheid </i> together, bring us your waste and enjoy
            drinks @ Sportcentrum VU!
          </p>
          <h4 className="text-collaction mb-2">What's the campaign?</h4>
          <p className="mb-6">
            In September we’ll make the campus prettier by doing a
            start-of-the-year clean up. From September 13-16 you can hand in
            your electronic and bulk waste <i>(grof afval)</i> at the red circle
            in return for vouchers. On September 17, 20 & 27 you can join us to
            collect litter
            <i> (zwerfafval)</i> around the campus to make it shine again!
          </p>
          <h4 className="text-collaction mb-2">What's a voucher?</h4>
          <p className="mb-6">
            A voucher equals one beer, soft drink (canned) or coffee at
            Sportcentrum VU, which can be redeemed anytime until October 31st
            2022.
          </p>
          <h4 className="text-collaction mb-2">How to get vouchers?</h4>
          <p className="mb-2">
            Together with your eenheid or another group formed by you, collect
            your e-waste and bulk waste and bring it to us. Each piece of
            garbage equals a number of points. For each 5 points* you hand in,
            you get 1 voucher! Check out the conversion list below to find out
            how many vouchers you'll get. Is your garbage not there? You can
            still get points for it! Send us a Whatsapp or come to our stand and
            we'll tell if you're eligible.
          </p>
          <p className="mb-6">
            * There's a limited number of vouchers. Depending on availability
            the 5 points could increase after the first day. Tip: to ensure you
            get 1 voucher per 5 points, bring your waste on September 13.
          </p>
          <h4 className="text-collaction mb-2">How can I help?</h4>
          <p className="mb-6">
            Want to help make our campus prettier? That’s possible! You can
            already do so by sharing the word, posting on social media and
            showing up at our stand. Would you like to do more? Want to meet
            neighbours that also like to do a bit extra? Send a WhatsApp message
            to +31625351135 and tell us why you’d like to be involved: Power to
            the Crowd!
          </p>
          <h4 className="text-collaction mb-2">Prizes</h4>
          <p className="mb-2">
            For the teams that collect the most points between 13-16 September,
            prizes are listed below. You get these on top of the vouchers you
            already received. To be eligible for the vouchers, your team must
            have collected at least the number of vouchers expressed in points.
          </p>
          <ul style={{ listStyleType: 'decimal' }} className="pl-7">
            <li className="mb-2">
              <strong>100 vouchers & 14 tickets for Thuisfront Festival</strong>{' '}
              & personal clinic at Sportcentrum VU
            </li>
            <li className="mb-2">
              42 vouchers & rent Uilenkatten speakers for free
            </li>
            <li className="mb-6">14 vouchers</li>
          </ul>
          <h4 className="text-collaction mb-4">When & Where</h4>
          <h6 className="text-collaction mb-2">Electronic & Bulk waste</h6>
          <p className="mb-6">
            Come by with your electronic and bulk waste on{' '}
            <strong>September 13, 14, 15 & 16 between 13:00 - 15:00 </strong>
            {'@ '}
            <a
              className="text-collaction"
              href="https://goo.gl/maps/kNan2DxwBtWHhrWv7"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              the red circle{' '}
            </a>
            and collect your vouchers!
          </p>
          <h6 className="text-collaction mb-2">Litter</h6>
          <p className="mb-4">
            Join us to collect litter around the campus. Afterwards you get a
            free drink & snacks @ Sportcentrum VU. To reserve a litter pick-up
            stick, please enroll in our app!{' '}
            <ul style={{ listStyleType: 'disc' }} className="pl-7">
              <li className="mb-2">
                <strong>September 17 between 10:30 - 11:30</strong> @
                Sportcentrum VU.*
              </li>
              <li className="mb-2">
                <strong>September 20 & 27 between 15:00 - 17:00 </strong>@
                <a
                  className="text-collaction"
                  href="https://goo.gl/maps/kNan2DxwBtWHhrWv7"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  the red circle
                </a>
                {'. '}
              </li>
            </ul>
          </p>
          <p className="mb-8">
            *September 17 is
            <a
              className="text-collaction"
              href="https://www.nationalcleanupday.org/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              National CleanUp Day
            </a>
            . <strong> GroenLinks Amstelveen</strong> joins us.
          </p>
          <h4 className="text-collaction mb-4 mt-6">Contact us</h4>
          <p className="mb-6">
            Would you like to contact us, e.g. when you cannot find us? Send a
            WhatsApp message to +31625351135 or an email to{' '}
            <a
              className="text-collaction"
              href="mailto:tom@collaction.org"
              target="_blank"
              rel="noreferrer"
            >
              tom@collaction.org
            </a>
            .
          </p>
        </div>

        <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-600 mx-auto mt-6 mb-6">
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

        <InfoCard
          isSecondaryBg
          title="Download the app"
          body="Reserve a litter pick-up stick and join us!"
        >
          <div className="flex justify-center mb-6">
            <AppLinkApple className="mr-4 sm:mr-5" />
            <AppLinkGoogle />
          </div>
        </InfoCard>

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 mt-10 md:mt-8 mb-6">
          <h4 className="text-collaction mb-4">Conversion list</h4>
          <h6 className="text-collaction mb-2">Bulk waste</h6>
          <p className="mb-6">
            Most garbage that is too big for your waste bin, very heavy, or
            both, is eligible as bulk waste. For example, couches, chairs, beds
            & mattresses. Depending on the size and weight of your bulk waste
            we'll determine the number of points you'll receive at the spot. So
            get your <i>eenheid </i> together, bring us your old furniture from
            the garden or common room, and enjoy drinks @ Sportcentrum VU
            afterwards!
          </p>
          <h6 className="text-collaction mb-2">Electronic waste</h6>
          <p className="mb-4">
            Electronic waste encompasses all clean, empty devices that have a
            plug or run on batteries. We've outlined below how many points you
            get for your device. Is your device qualified as e-waste but not
            listed below? Don't worry: just send us a Whatsapp message or come
            by and we'll award you points. Note that batteries must be removed
            in order to get points.
          </p>
          <h6 className="text-body mt-4">7 points</h6>
          smartphone, laptop, washing machine
          <h6 className="text-body mt-4">5 points</h6>
          fridge, freezer, television, monitor, microwave, oven
          <h6 className="text-body mt-4">3 points</h6>
          camera, playstation, iron, tosti device, printer, scanner,
          motherboard, radio, cd player, mp3 player, sound system, answering
          machine, regular phone, electric toothbrush
          <i>
            <h6 className="text-body mt-4">2 points (special)</h6>
            together with your team mates, share on your socials. The 2 points
            can be redeemed once per team.
          </i>
          <h6 className="text-body mt-4">1 point</h6>5 cables/earplugs/lamps,
          keyboard, mouse, kettle, powerbank, 10 batteries, clock, torch,
          calculator, hair dryer
        </div>
      </main>

      {/* COLLACTION TEAM IMAGE */}
      <section className="pb-11">
        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 mb-6">
          <h4 className="text-collaction mb-4">Did you know</h4>
          <ul style={{ listStyleType: 'disc' }} className="pl-7">
            <li className="mb-2">
              <strong>
                Separating waste is valuable! All unrecycled waste is either
                burned or ends up in nature/landfills.
              </strong>{' '}
              By separating waste, you help mother nature and your
              municipality's waste department to transform it into valuable
              resources again!
            </li>
            <li className="mb-2">
              You get free (30 liter) PMD bags at DUWO to collect your plastic
              separately{' '}
            </li>
            <li className="mb-2">
              A big problem of recycled plastic is the smell originating from
              organic material. Therefore, clean your plastic a bit before you
              put it in your PMD bag and be careful not to put food in it.
              Furthermore, don't put kit/aerosols/paint cans in PMD, as these
              might explode in the machines
            </li>
            <li className="mb-2">
              Dutch people throw away 120kg of plastic every year{' '}
            </li>
            <li className="mb-2">
              Every municipality has its own waste policy. For example,
              Amstelveen collects plastic seperately from general waste (
              <i>voorsortering</i>), whereas Amsterdam puts everything on one
              big pile (<i>nasortering</i>)
            </li>
            <li className="mb-2">
              There are 4 worm hotels at Uilenstede that collect bio waste. If
              you want to sign up for one, send us a message
            </li>
            <li className="mb-2">
              Paper can be recycled and reused 7 times, aluminium cans
              indefinitely
            </li>
            <li className="mb-2">
              Making one can from raw materials uses the same amount of energy
              that it takes to recycle 20 cans{' '}
            </li>
            <li className="mb-2">
              Pizza boxes from the pizzeria should be placed in general waste
              due to the oil in the paper. Pizza boxes from the supermarket are
              suited for recycling
            </li>
            <li className="mb-2">
              As of 2023, there will be <i>statiegeld</i> charged on aluminium
              cans in the Netherlands, 20 years after Germany introduced it as
              the first EU country{' '}
            </li>

            <li className="mb-2">
              It costs €130 (including taxes!) in NL to burn 1000kg of waste
            </li>
            <li className="mb-2">
              Paper got 5x more expensive during the corona pandemic
            </li>
            <li className="mb-2">
              1kg of gold can be extracted from 50,000 mobile phones. There's 7
              million old mobile phones lying around in Dutch drawers, which
              amounts to 140kg of gold{' '}
            </li>

            <li className="mb-2">
              During 2020, more than 100 billion tonnes of raw materials were
              extracted from the Earth. 70% of all 2020 greenhouse gas emissions
              comes from extraction to end use of these materials
            </li>
            <li className="mb-2">
              <a
                className="text-collaction"
                href="https://www.knapzak.nl/en/5/5-myths-about-separating-waste.aspx"
                target="_blank"
                rel="noreferrer"
              >
                5 myths about separating waste by knapzak
              </a>
            </li>

            <li className="mb-2">
              <a
                className="text-collaction"
                href="https://ewasterace.nl/filmmateriaal"
                target="_blank"
                rel="noreferrer"
              >
                facts & videos by e-waste race (Dutch)
              </a>
            </li>
          </ul>
          Would you like to add something to this list? Send us a message at{' '}
          <a
            className="text-collaction"
            href="mailto:tom@collaction.org"
            target="_blank"
            rel="noreferrer"
          >
            tom@collaction.org
          </a>
          .
        </div>

        <div
          className="relative text-center mx-auto xs:max-w-350 sm:max-w-400 lg:max-w-600 rounded-none xs:rounded-1"
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

          <div className="absolute bottom-0 left-0 right-0 mb-9 mx-auto text-center w-full px-5 xs:max-w-350 sm:max-w-400 lg:max-w-600">
            <h4 className="text-headline-lg-1 text-secondary mb-6">
              Want to use CollAction for your project?
            </h4>
            <p className="text-body-short-1 text-secondary">
              Do you have an initiative for collective action and would you like
              to reach a larger public? Send us a message at{' '}
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

      <div className="relative block w-full md:w-11/12 lg:w-208 mb-12 mx-auto">
        <Image
          priority
          src={Collaboration}
          alt="uilenstede banner"
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

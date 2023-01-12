import React from 'react';
import Image from 'next/image';

// import Collaboration from 'public/uilenstede_collaboration.png';
import SteunSchool_banner from 'public/education_february.jpeg';
import Sjs1 from 'public/sjs1.jpg';
import Sjs2 from 'public/sjs2.jpg';
// import Uilenstede_map from 'public/uilenstede_map.png';
import PageSEO from 'src/components/PageSEO';

import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

export default function UilenstedeIndexPage() {
  return (
    <>
      <PageSEO
        title="CollAction meets Uilenstede | The Big Uilenstede Clean Up"
        // description=""
      />

      <main className="mt-8 mb-12">
        <div className="text-center mx-auto max-w-700 sm:max-w-400 lg:max-w-600">
          <h1 className="text-collaction text-center mb-8">Steun je School</h1>
        </div>

        <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
          <Image
            priority
            src={SteunSchool_banner}
            alt="westland banner"
            className="rounded-1"
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

        {/* WHY SECTION */}
        {/* <ContentBlock
          className="pt-8 pb-8"
          title="testtest"
          greenHeader={true}
          hasBg={false}
          body="
          We zijn op De Brug in contact gekomen met CollAction, een duurzaamheidsbeweging geleid 
          door jonge enthousiaste mensen. Zij werken hieraan op vrijwillige basis en proberen 
          in contact te komen met (jonge) mensen/kinderen/organisaties en dan is een school 
          hiervoor een geschikte plek. Het hoogste doel van de actie is bewustwording creëren bij 
          de kinderen en in de gezinnen en over te gaan tot acties in het belang van het klimaat; 
          samen hopelijk de wereld een beetje mooier en beter maken. Op De Brug gaan we hier de 
          maand februari actief mee aan de slag: Steun je school en bespaar energie! De kinderen 
          zullen een doelenkaart krijgen waar ze thuis en op school mee aan de slag kunnen gaan, 
          wordt vervolgd.

          Vanochtend hebben we dit besproken met de leerlingenraad en de kinderen zijn al enthousiast! 
          Het plan is nog lang niet klaar, maar wat we wel weten willen we heel graag met jullie delen 
          en dat is het volgende:
          De opening is op 1 februari en hiervoor willen we samen een sjaal breien/haken/vingerhaken of 
          welk creatief idee ook, en deze stukjes aan elkaar verbinden en om de school knopen. 
          De sjaal geeft de school warmte en vormt de verbinding tussen iedereen, kinderen en omgeving. 
          Alle verschillende stukjes staan tevens symbool dat iedereen anders is en dat we samen weer 
          het grote geheel vormen. Daarvoor hebben we elkaar nodig en zijn we in verbinding.

          Met de vakantie voor de deur hopen we dat jullie thuis alvast beginnen met breien/haken/vingerhaken, 
          hoe meer mensen meedoen, hoe langer de sjaal uiteindelijk wordt! Ook opa's/oma's/broers/zussen/buren, 
          iedereen mag meedoen. De kinderen kunnen de stukjes na de vakantie meenemen naar school en deze 
          stukjes gaan we aan elkaar verbinden. Foto's kunnen via de mail worden gedeeld en daar 
          kunnen we weer een mooie collage van in school hangen. Ook willen we in januari schoolbreed een 
          talentenmiddag organiseren waarin handwerken centraal staat. Nadere informatie hierover volgt in 
          de eerste week na de vakantie evenals een oproep voor getalenteerde workshopbegeleiders😊.
          "
        /> */}

        <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 py-5 px-5">
          <h4 className="text-collaction mt-6 mb-2">Wat houdt de actie in?</h4>
          <p className="mb-2">
            Op 1 februari start een groep basisscholen aan de actie 'Steun je
            School'. Tijdens deze actie creëren we de gehele maand februari
            bewustwording bij kinderen, gezinnen en ieder ander rondom het thema
            energie. Dit kan door de thermostaat lager te zetten, korter te
            douchen of op andere wijze energie te besparen. Of het nu opa's en
            oma's zijn die warme sjaals breien, of de buren die kleedjes
            uitlenen aan de school. Centraal staat dat iedereen op zijn of haar
            manier kan meedoen: Steun je School en bespaar energie!
          </p>
          <h4 className="text-collaction mt-6 mb-2">Waarom zou ik meedoen?</h4>
          <p className="mb-2">
            Meedoen aan de actie kan om allerlei verschillende redenen. We
            hebben er een paar voor u opgesomd:
          </p>
          <ul style={{ listStyleType: 'disc' }} className="pl-7">
            <li className="mb-2">
              Minder uitstoot - dat is goed voor het klimaat
            </li>
            <li className="mb-2">Leer kinderen bewust omgaan met energie</li>
            <li className="mb-2">Nieuwe intiatieven in uw omgeving</li>
            <li className="mb-2">Bespaar op uw energierekening</li>
          </ul>
          <h4 className="text-collaction mt-6 mb-2">Hoe kan ik meedoen?</h4>
          <p className="mb-2">
            Iedereen kan op zijn of haar manier deelnemen aan de actie.
            Afhankelijk van uw situatie kiest u 1 of meerdere van de volgende
            opties:
          </p>

          <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-6">
            <li className="mb-2">
              <strong>School:</strong> als school kunt u zich opgeven voor de
              actie door te mailen naar school@collaction.org.
            </li>
            <li className="mb-2">
              <strong>Gezin/Buurtgenoot:</strong> als gezin/buurgenoot kunt u
              zich opgeven door de CollActin-app te downloaden en daar aan te
              geven hoe u wilt deelnemen. Tevens kunt u contact opnemen met de
              basisschool van uw kind/buurt om te kijken wat u nog meer kunt
              doen.
            </li>
            <li className="mb-2">
              <strong>Bedrijf/Organisatie:</strong> wilt u als
              bedrijf/organisatie dit project ondersteunen? Bijvoorbeeld door
              warme kleden uit te lenen, de school te sponsoren, of op andere
              wijze? Neem dan contact op met school@collaction.org.
            </li>
            {/* <li className="mb-2">
              <strong>Organisatie:</strong> als organisatie
            </li> */}
          </ul>

          <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 mb-6">
            <h4 className="text-collaction mb-4">Actiefoto's</h4>
          </div>

          <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-600 mx-auto mt-6 mb-6">
            <Image
              priority
              src={Sjs1}
              alt="uilenstede banner"
              className="rounded-1"
              sizes="(max-width: 768px) 90vw, 830px"
              placeholder="blur"
            />
          </div>

          <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-600 mx-auto mt-6 mb-6">
            <Image
              priority
              src={Sjs2}
              alt="uilenstede banner"
              className="rounded-1"
              sizes="(max-width: 768px) 90vw, 830px"
              placeholder="blur"
            />
          </div>

          {/* DOWNLOAD APP SETION
          <TwoColumnSection
            isReverseOrder={false}
            first={
              <Image
                src={Sjs1}
                alt="Download App"
                className="mx-auto"
                width={450}
              />
            }
            second={
              <Image
                src={Sjs1}
                alt="Download App"
                className="mx-auto"
                width={450}
              />
            }
          /> */}

          {/*           
          <p className="mb-6">
            <h4 className="text-collaction mb-2">Prizes</h4>
            <p className="mb-2">
              For the teams that collect the most points between 13-16
              September, prizes are listed below. You get these on top of the
              vouchers you already received. To be eligible for the vouchers,
              your team must have collected at least the number of vouchers
              expressed in points.
            </p>
            <ul style={{ listStyleType: 'decimal' }} className="pl-7">
              <li className="mb-2">
                <strong>
                  100 vouchers & 14 tickets for Thuisfront Festival
                </strong>{' '}
                & personal clinic at Sportcentrum VU
              </li>
              <li className="mb-2">
                42 vouchers & rent Uilenkatten speakers for free
              </li>
              <li className="mb-6">14 vouchers</li>
            </ul>

            <strong>... invulling</strong>
          </p> */}
          {/* <h4 className="text-collaction mb-2">What's the campaign?</h4>
          <p className="mb-6">
            In September we’ll make the campus prettier by doing a
            start-of-the-year clean up. From September 13-16 you can hand in
            your electronic and bulk waste <i>(grof afval)</i> at the red circle
            below in return for vouchers. On September 17, 20 & 27 you can join
            us to collect litter
            <i> (zwerfafval)</i> around the campus to make it shine again!
          </p>
          <h4 className="text-collaction mb-2">What's a voucher?</h4>
          <p className="mb-6">
            A voucher equals one beer, (canned) soft drink or coffee at
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
            <strong>September 13, 14, 15 & 16* </strong> between 13:00 - 15:00
            {' @ '}
            <a
              className="text-collaction"
              href="https://goo.gl/maps/kNan2DxwBtWHhrWv7"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              the red circle below{' '}
            </a>
            and collect your vouchers!
          </p>
          <h6 className="text-collaction mb-2">Litter</h6>
          <p className="mb-4">
            Join us to collect litter around the campus. Afterwards you get a
            free drink & snacks @ Sportcentrum VU. To reserve a litter pick-up
            stick, enroll in our app:{' '}
            <ul style={{ listStyleType: 'disc' }} className="pl-7">
              <li className="mb-2">
                <strong>September 17**</strong> between 10:30 - 11:30 @
                Sportcentrum VU.
              </li>
              <li className="mb-2">
                <strong>September 20 & 27 </strong> between 15:00 - 17:00 @
                <a
                  className="text-collaction"
                  href="https://goo.gl/maps/kNan2DxwBtWHhrWv7"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  the red circle below
                </a>
                {'. '}
              </li>
            </ul>
          </p>
          <p className="mb-8">
            *On September 16 the 4th Worm Hotel of Uilenstede will be opened at
            16:00.
          </p>
          <p className="mb-8">
            **September 17 is
            <a
              className="text-collaction"
              href="https://www.nationalcleanupday.org/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              National CleanUp Day
            </a>
            , so <strong> GroenLinks Amstelveen</strong> joins!
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
            , so <strong> GroenLinks Amstelveen</strong> joins!
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
          </p> */}
        </div>

        {/* <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-600 mx-auto mt-6 mb-6">
          <Image
            priority
            src={Uilenstede_map}
            alt="westland banner"
            className="rounded-1"
            sizes="(max-width: 768px) 90vw, 830px"
            placeholder="blur"
          />
        </div> */}

        <InfoCard
          isSecondaryBg
          title="Download de app"
          body="Schrijf je in en steun je school!"
        >
          <div className="flex justify-center">
            <AppLinkApple className="mr-4 sm:mr-5" />
            <AppLinkGoogle />
          </div>
        </InfoCard>

        {/* <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 mt-10 md:mt-8 mb-6">
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
          <i>
            <h6 className="text-body mt-4">5 points (special)</h6>
            together with your team mates, share on your socials. The 5 points
            can be redeemed once per team.
          </i>
          <h6 className="text-body mt-4">5 points</h6>
          fridge, freezer, television, monitor, microwave, oven, vacuum cleaner
          <h6 className="text-body mt-4">3 points</h6>
          camera, playstation, iron, tosti device, printer, scanner,
          motherboard, radio, cd player, mp3 player, sound system, answering
          machine, regular phone, electric toothbrush
          <h6 className="text-body mt-4">1 point</h6>2 cables/earplugs/lamps,
          keyboard, mouse, kettle, powerbank, 5 batteries, clock, torch,
          calculator, hair dryer, weegschaal
        </div> */}
      </main>

      {/* <section className="pb-2">
        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 mb-6">
          <h4 className="text-collaction mb-4">Did you know</h4>
          <ul style={{ listStyleType: 'disc' }} className="pl-7">
            <li className="mb-2">
              <strong>
                We can create valuable resources from your separated waste!
              </strong>{' '}
              Separate your waste to prevent it from being burned or ending up
              in landfills. Help nature by enabling the municipality to recycle
              what you don't use anymore. Your tidy house can equal a happy
              planet!
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

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 mb-6">
          <h4 className="text-collaction mb-4">In collaboration with</h4>
        </div>

        <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-600 mx-auto mt-6 mb-6">
          <Image
            priority
            src={Collaboration}
            alt="uilenstede banner"
            className="rounded-1"
            sizes="(max-width: 768px) 90vw, 830px"
            placeholder="blur"
          />
        </div> 
      </section> */}
    </>
  );
}

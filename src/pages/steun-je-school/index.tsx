import React from 'react';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import ImageMasonry from 'src/components/ImageMasonry';

import PageHero from 'src/components/PageHero';
import HeroImg from 'public/sjs_banner_3imgs.jpg';

import img1 from 'public/sjs/sjs1.jpg';
import img2 from 'public/sjs/sjs2.jpg';
import img3 from 'public/sjs/sjs3.jpg';
import img4 from 'public/sjs/sjs4.jpg';
import img5 from 'public/sjs/sjs5.jpg';
import img6 from 'public/sjs/sjs6.jpg';
import img7 from 'public/sjs/sjs7.jpg';
import img8 from 'public/sjs/sjs8.jpg';
import img9 from 'public/sjs/sjs9.jpg';
import img10 from 'public/sjs/sjs10.jpg';
import img11 from 'public/sjs/sjs11.jpg';
import img12 from 'public/sjs/sjs12.jpg';
import img13 from 'public/sjs/sjs13.jpg';
import img14 from 'public/sjs/sjs14.jpg';
import img15 from 'public/sjs/sjs15.jpg';

import collactionTranslations from 'src/helpers/collactionTranslations';

export default function UilenstedeIndexPage() {
  return (
    <>
      <PageSEO
        title="CollAction op School | Steun je School"
        description="CollAction organises CrowdAction for schools"
      />

      <main className="mb-12">
        <PageHero image={HeroImg} title={'Steun je School'} />

        <section>
          <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 py-5 px-5">
            {/* <h4 className="text-collaction mt-6 mb-2">
              Meer dan €400 voor Giro555 door jullie!
            </h4>

            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/9bQ-TGXBERw"
              title="trots"
            ></iframe> */}

            <h4 className="text-collaction mt-6 mb-2">
              Jordi op bezoek bij Energiefeest De Brug
            </h4>

            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/Q3HjG6pdw9E"
              title="werfTV"
            ></iframe>

            <h4 className="text-collaction mt-6 mb-2">
              Wat houdt de actie in?
            </h4>
            <p className="mb-2">
              Op 1 februari starten basisscholen De Brug en Willem-Alexander aan
              de actie 'Steun je School'. Tijdens deze actie creëren we de
              gehele maand februari bewustwording bij kinderen, gezinnen en
              ieder ander rondom het thema energie. Dit kan door de thermostaat
              lager te zetten, korter te douchen of op andere wijze energie te
              besparen. Of het nu opa's en oma's zijn die warme sjaals breien,
              of de buren die kleedjes uitlenen aan de school. Centraal staat
              dat iedereen op zijn of haar manier kan meedoen: Steun je School
              en bespaar energie!
            </p>

            <h4 className="text-collaction mt-6 mb-2">Actie in het nieuws</h4>

            <ul style={{ listStyleType: 'disc' }} className="pl-7">
              <li className="mb-2">
                <a
                  className="text-collaction"
                  href="https://dvhn.nl/weekbladendrenthe/emmercourant/Leerlingen-van-CB-De-Brug-in-Klazienaveen-douchen-korter-en-zetten-de-thermostaat-een-graadje-lager-28261461.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dagblad van het Noorden: Korter douchen en de thermostaat een
                  graadje lager op De Brug in Klazienaveen.
                </a>
              </li>

              <li className="mb-2">
                <a
                  className="text-collaction"
                  href="https://dvhn.nl/weekbladendrenthe/emmercourant/Afval-scheiden-en-korter-douchen.-Leerlingen-van-CBS-Willem-Alexander-in-Erica-zijn-bezig-met-duurzaamheid-en-energie-28246194.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dagblad van het Noorden: Afval scheiden en korter douchen. De
                  leerlingen in Erica zijn bezig met duurzaamheid
                </a>
              </li>

              <li className="mb-2">
                <a
                  className="text-collaction"
                  href="https://www.zo34.nl/nieuws/7078/150-meter-sjaal-uit-erica-voor-giro-555/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ZO!34: 150 meter sjaal uit Erica voor Giro 555 op De
                  Willem-Alexander
                </a>
              </li>
              <li className="mb-4">
                {
                  <a
                    className="text-collaction"
                    href="https://www.rtvdrenthe.nl/article/f7a7e10d-7c93-547e-8f84-4e722fd0f0c7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    RTV Drenthe: Sjaals verkopen voor Giro 555 op De
                    Willem-Alexander
                  </a>
                }
              </li>
            </ul>

            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/d-bcFoEY8YI"
              title="radio"
            ></iframe>

            <h4 className="text-collaction mt-8 mb-2">Actiefoto's</h4>
            <p className="mb-2">
              Jouw actiefoto's hier ook tussen? Stuur ze naar
              school@collaction.org!
            </p>
          </div>
        </section>
        <section>
          <div className="pb-2 mx-auto w-11/12 max-w-536 sm:max-w-640 md:max-w-960 lg:max-w-960 py-5 px-5">
            <ImageMasonry
              columnsCountBreakPoints={{ 320: 1, 640: 2, 960: 3, 1280: 4 }}
              gutter="10px"
              images={[
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
                img9,
                img10,
                img11,
                img12,
                img13,
                img14,
                img15,
              ]}
            />
          </div>
        </section>
        <section>
          <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 py-5 px-5">
            <h4 className="text-collaction mt-6 mb-2">
              Waarom zou ik meedoen?
            </h4>
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
            <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-2">
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
            </ul>
            <h4 className="text-collaction mt-6 mb-2">
              Wat kan er op de doelenkaart?
            </h4>
            <p className="mb-2">
              Hieronder een aantal tips over doelen die je op je doelenkaart
              kunt zetten:
            </p>
            <ul style={{ listStyleType: 'disc' }} className="pl-7">
              <li className="mb-2">Licht uit als je een ruimte verlaat</li>
              <li className="mb-2">Afval scheiden in de juiste bakken</li>
              <li className="mb-2">
                Bidons en bekers gebruiken in plaats van pakjes drinken
              </li>
              <li className="mb-2">Één doekje per keer na het handen wassen</li>
              <li className="mb-6">Deuren sluiten</li>
            </ul>
          </div>
        </section>

        <section>
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

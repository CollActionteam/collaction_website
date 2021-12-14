/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { ArrowSquareOut } from "phosphor-react";
import ASMLBanner from "public/veganuary-ASML-banner.png";
import CollActionLogoWithText from "public/black-logo-name.png";

export default function ASMLPage() {
  return (
    <>
      <Head>
        <title>ASML | CollAction</title>
      </Head>

      <div className="bg-black-0">
        {/* CHECK THE PADDING-BOTTOM ONCE ALL CONTENT IS ADDED */}
        <div className="px-5 md:px-8 pt-28 pb-14 md:pb-12 lg:pb-1">
          <div className="max-w-400 mx-auto mb-15 md:mb-18 lg:mb-22">
            <h1 className="text-black-400 text-center mb-8">
              We connect people to solve collective action problems
            </h1>

            <div className="w-32 mx-auto relative leading-none">
              <Image
                priority
                src={CollActionLogoWithText}
                alt="black CollAction logo with text"
                layout="responsive"
                placeholder="blur"
                sizes="128px"
              />
            </div>
          </div>

          <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
            <Image
              priority
              src={ASMLBanner}
              alt="asml veganuary banner"
              className="rounded-3xl"
              layout="responsive"
              sizes="(max-width: 768px) 90vw, 830px"
              placeholder="blur"
            />
          </div>

          <a
            href="https://forms.office.com/r/haw1WhtRz1"
            target="_blank"
            rel="noreferrer"
            className="bg-accent font-bold leading-none text-white text-center rounded-full p-3.5 w-72 shadow fixed bottom-8 inset-x-0 mx-auto"
            aria-label="Participate"
          >
            <span className="align-middle">Participate</span>
            <ArrowSquareOut
              className="h-6 w-6 inline-block ml-4"
              weight="bold"
            />
          </a>

          <div className="max-w-400 mx-auto my-12 md:my-15 lg:my-26">
            <div className="mb-13">
              <h3 className="mb-8">
                Hi! Welcome to the ASML edition of Veganuary.
              </h3>
              <p className="mb-6">
                Veganuary is an annual challenge that promotes veganism and
                sustainable food consumption. Joining is easy, you will go
                through the following steps:
              </p>
              <ul
                style={{ listStyleType: "disclosure-closed" }}
                className="pl-8"
              >
                <li className="mb-1">
                  <strong>Step one:</strong> choose if you want to participate 5
                  or 7 days a week
                </li>
                <li className="mb-1">
                  <strong>Step two:</strong> choose your commitments
                </li>
                <li className="mb-1">
                  <strong>Step three:</strong> stay tuned for extra activities
                  and discounts
                </li>
                <li className="mb-1">
                  <strong>Step four:</strong> see how big the impact is of the
                  dietary change of you and your colleagues
                </li>
              </ul>
            </div>

            <div className="mb-13">
              <h3 className="mb-8">Commitments</h3>
              <p className="mb-6">
                We'd love to optimize your personal impact. Eating vegan for a
                full month can be a difficult task. To maximize the impact of
                the ASML edition of Veganuary, there are multiple levels at
                which you can participate at your own pace. Your challenge, your
                rules. Therefore, it is still possible to join the challenge by
                eating vegan for a full month, but eating vegetarian,
                pescatarian, or simply not eating beef/cheese is also possible.
              </p>
            </div>

            <div className="mb-13">
              <h3 className="mb-8">Part-time</h3>
              <p className="mb-6">
                Would you like to have the weekends off? We've added a 5/7 days
                a week option! :)
              </p>
              <p className="mb-6">
                For each commitment you can earn points, depending on how many
                kg CO2 equivalents were saved. The 5/7 days a week commitment
                implies you do your commitments 5/7 days a week. The number of
                points is then multiplied by 5/7.
              </p>
            </div>

            <div className="mb-13">
              <h3 className="mb-8">Extra activities</h3>
              <p className="mb-6">
                To keep you engaged, we have several events/discounts. You’ll be
                informed about them later on here:
              </p>
              <ul
                style={{ listStyleType: "disclosure-closed" }}
                className="pl-8"
              >
                <li className="mb-1">Discount 1 - Coming Soon</li>
                <li className="mb-1">Discount 2 - Coming Soon</li>
              </ul>
            </div>

            <div className="mb-13">
              <h3 className="mb-8">The impact you’ve made </h3>
              <p className="mb-6">
                Depending on your commitment you receive a certain badge at the
                end of the month. We'll calculate your individual impact, as
                well as that of the whole group!
              </p>
              <p className="mb-6">
                Veganuary is a month where we can challenge ourselves. Let's try
                it out together and help each other by sharing recipes, tips,
                supplements, and more. Shifting to a more plant-based diet is
                great for your health and the environment. Want to participate?
                Click the participate button and fill out the form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { ArrowSquareOut } from "phosphor-react";

import ASMLBanner from "public/veganuary-ASML-banner.png";
import CollActionLogoWithText from "public/black-logo-name.png";
import AppPreviewCard1 from "public/app-preview-card-1.png";
import AppPreviewCard2 from "public/app-preview-card-2.png";
import AppPreviewCard3 from "public/app-preview-card-3.png";
import Discounts from "src/components/asml/Discounts";

export default function ASMLPage() {
  return (
    <>
      <Head>
        <title>ASML | CollAction</title>
      </Head>

      <div>
        <div className="bg-black-0 px-5 md:px-8 py-28 md:pb-18">
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
            className="bg-accent font-bold leading-none text-white text-center rounded-full p-3.5 w-72 shadow fixed bottom-8 inset-x-0 mx-auto z-50"
            aria-label="Participate"
          >
            <span className="align-middle">Participate</span>
            <ArrowSquareOut
              className="h-6 w-6 inline-block ml-4"
              weight="bold"
            />
          </a>

          <div className="mt-12 md:mt-15 lg:mt-26">
            <div className="max-w-500 mx-auto mb-13">
              <h4 className="mb-8">
                Hi! Welcome to the ASML edition of Veganuary.
              </h4>
              <p className="mb-6 last:mb-0">
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

            <div className="max-w-500 mx-auto mb-13">
              <h4 className="mb-8">Commitments</h4>
              <p className="mb-6 last:mb-0">
                We'd love to optimize your personal impact. Eating vegan for a
                full month can be a difficult task. To maximize the impact of
                the ASML edition of Veganuary, there are multiple levels at
                which you can participate at your own pace. Your challenge, your
                rules. Therefore, it is still possible to join the challenge by
                eating vegan for a full month, but eating vegetarian,
                pescatarian, or simply not eating beef/cheese is also possible.
              </p>
            </div>

            <div className="max-w-500 mx-auto mb-13">
              <h4 className="mb-8">Part-time</h4>
              <p className="mb-6 last:mb-0">
                Would you like to have the weekends off? We've added a 5/7 days
                a week option! :)
              </p>
              <p className="mb-6 last:mb-0">
                For each commitment you can earn points, depending on how many
                kg CO2 equivalents were saved. The 5/7 days a week commitment
                implies you do your commitments 5/7 days a week. The number of
                points is then multiplied by 5/7.
              </p>
            </div>

            <div className="mb-13">
              <h4 className="max-w-500 mx-auto mb-8">Extra activities</h4>
              {/* if we add another paragraph, use the commented line in both and remove the used one */}
              {/* <p className="max-w-500 mx-auto mb-6 last:mb-0"> */}
              <p className="max-w-500 mx-auto mb-0">
                To keep you engaged, we have several events/discounts on the
                horizon. Come back soon to stay updated on our currently
                offerings.
              </p>
              <Discounts />
            </div>

            <div className="max-w-500 mx-auto mb-0">
              <h4 className="mb-8">The impact you’ve made </h4>
              <p className="mb-6 last:mb-0">
                Depending on your commitment you receive a certain badge at the
                end of the month. We'll calculate your individual impact, as
                well as that of the whole group!
              </p>
              <p className="mb-6 last:mb-0">
                Veganuary is a month where we can challenge ourselves. Let's try
                it out together and help each other by sharing recipes, tips,
                supplements, and more. Shifting to a more plant-based diet is
                great for your health and the environment. Want to participate?
                Click the participate button and fill out the form.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black-400 px-5 md:px-8 pt-20 pb-24 md:pb-22 text-center">
          <div className="max-w-500 mx-auto">
            <h2 className="text-secondary mb-8">
              The CollAction app is launching soon
            </h2>
            <p className="text-black-0 mb-12">
              We’re working hard on getting the app in the App/Play Store. First
              the Android build goes live, after which Apple will shortly
              follow. We’ll let you know at the top of this page when they are
              live!
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start md:max-w-400 lg:max-w-4xl lg:w-208 mx-auto">
            {/* APP CARD */}
            <div className="bg-secondary text-black-400 max-w-400 w-full rounded-3xl px-10 lg:px-13 py-8 pb-0 mb-5 md:mb-8 lg:mr-8 overflow-hidden">
              <h4 className="text-black-400 mb-5">Make a change today</h4>
              <p className="text-black-200">
                Join a CrowdAction you want to be part of.
              </p>
              <div className="block -mb-14">
                <Image
                  src={AppPreviewCard1}
                  alt="app preview card 1"
                  layout="responsive"
                  sizes="(min-width: 769px) 275px, 300px"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="bg-secondary text-black-400 max-w-400 w-full rounded-3xl px-10 lg:px-13 py-8 mb-5 md:mb-8 lg:mr-8 overflow-hidden lg:order-3">
              <h4 className="text-black-400 mb-5">
                Participate at your own pace
              </h4>
              <p className="text-black-200 mb-4">
                Choose your commitments for the CrowdAction.
              </p>
              <div className="block">
                <Image
                  src={AppPreviewCard2}
                  alt="app preview card 2"
                  layout="responsive"
                  sizes="275px"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="bg-secondary text-black-400 max-w-400 w-full rounded-3xl px-10 lg:px-13 py-8 mb-5 md:mb-8 lg:mr-0 overflow-hidden lg:order-2">
              <div className="block -mt-14">
                <Image
                  src={AppPreviewCard3}
                  alt="app preview card 3"
                  layout="responsive"
                  sizes="275px"
                  placeholder="blur"
                />
              </div>
              <h4 className="text-black-400 mb-5">Join the wave</h4>
              <p className="text-black-200">Make an impact together.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import PageSEO from 'src/components/PageSEO';

import HeroImg from 'public/placeholder-hero-bg.png';
// /Users/margaretmwaura/Projects/website/public/crowdaction_graphic.png';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';

import { getProjectsData } from 'src/lib/getProjects';
import PageHero from 'src/components/PageHero';
import Image from 'next/image';
import CollActionLogoWithText from 'public/crowdaction_graphic.png';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'

export default function ProjectListPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  const [status, setStatus] = useState('Status');

  function logValue() {
    console.log(status);
  }
  return (
    <>
      <PageSEO
        title="CollAction | Projects organised by CollAction"
        description="View a selection of projects that CollAction organised. "
      />

      <main className="bg-secondary">
        {/* HERO SETION */}
        <PageHero image={HeroImg} />
        <div className="h-auto w-full mx-auto bg-secondary md:bg-white">
          <div className="mx-5 md:mx-5 lg:mx-0 bg-primary-0 md:bg-white rounded-lg md:rounded-none">
            <div
              className="h-auto
          mx-auto max-w-400 md:max-w-750 lg:max-w-924
          mt-16 md:mt-0 lg:mt-0 flex flex-wrap justify-center md:justify-start lg:justify-start"
            >
              <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center md:justify-start lg:justify-start pt-8 md:pt-0 lg:pt-0">
                {/* px-auto */}
                <div className="max-w-320 sm:max-w-320 lg:max-w-320">
                  <p className="font-bold text-lg mb-4 text-center md:text-left">
                    Crowdactions
                  </p>
                  <p className="text-primary-200 text-center md:text-left">
                    CrowdActions are the basis of our endeavor. It is the common
                    goal of each CrowdAction that unites people of similar
                    convictions
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center md:justify-end pt-8">
                <Image
                  src={CollActionLogoWithText}
                  alt="black CollAction logo with text"
                  // layout="responsive"
                  // placeholder="blur"
                  width="400"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto w-full">
          <div className="mx-5 md:mx-5 lg:mx-0">
            <div
              className="h-auto
          mx-auto max-w-400 md:max-w-750 lg:max-w-924
          mt-4 md:mt-4 lg:mt-4 flex justify-center md:justify-start lg:justify-start"
            >
              <div className="max-w-320 sm:max-w-320 lg:max-w-320 pt-10 pb-6">
                <p className="font-bold text-lg mb-4 text-center md:text-left">
                  Explore CrowdActions
                </p>
                <p className="text-primary-200 text-center md:text-left">
                  Here you can explore all of our upcoming, on-going and
                  previous crowdactions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto w-full">
          <div className="mx-5">
            <div
              className="h-auto bg-white rounded-lg
          mx-auto max-w-400 md:max-w-750 lg:max-w-924
          mt-4 md:mt-4 lg:mt-4 p-6"
            >
              <div className="flex justify-between">
                <p className="font-semibold">Filters</p>
                <button className="font-semibold rounded-full bg-primary-0 pl-6 pr-6 pt-2 pb-2 hidden md:block lg:block">
                  Reset
                </button>
                <MdOutlineKeyboardArrowUp className="w-7 h-7 block md:hidden font-light" />
              </div>
              <div className="flex flex-wrap space-x-0 md:space-x-6 lg:space-x-6 space-y-6 md:space-y-0 lg:space-y-0 mt-4">
                <div className="bg-primary-0 py-2 pr-4 w-full md:w-48 lg:w-48 rounded-full">
                  <select
                    value={status}
                    onChange={e => {
                      setStatus(e.target.value);
                    }}
                    className="bg-primary-0 py-2 px-4 w-full md:w-42 lg:w-42 
                    rounded-full font-light focus:outline-none"
                  >
                    <option value="Status">Status</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                  </select>
                </div>
                <div className="bg-primary-0 py-2 pr-4 w-full md:w-48 lg:w-48 rounded-full">
                  <select
                    value={status}
                    onChange={e => {
                      setStatus(e.target.value);
                    }}
                    className="bg-primary-0 py-2 px-4 w-full md:w-42 lg:w-42 
                    rounded-full font-light focus:outline-none"
                  >
                    <option value="Status">Status</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                  </select>
                </div>
                <div className="bg-primary-0 py-2 pr-4 w-full md:w-48 lg:w-48 rounded-full">
                  <select
                    value={status}
                    onChange={e => {
                      setStatus(e.target.value);
                    }}
                    className="bg-primary-0 py-2 px-4 w-full md:w-42 lg:w-42 
                    rounded-full font-light focus:outline-none"
                  >
                    <option value="Status">Status</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const projects = getProjectsData('featured');

  return {
    props: {
      projects,
      locale,
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  };
}

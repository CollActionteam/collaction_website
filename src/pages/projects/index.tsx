import React, { useState, useRef, useEffect } from 'react';
import PageSEO from 'src/components/PageSEO';

import HeroImg from 'public/placeholder-hero-bg.png';
import actions from 'public/cow.png';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';

import PageHero from 'src/components/PageHero';
import Image from 'next/image';
import CollActionLogoWithText from 'public/crowdaction_graphic.png';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import TwoColumnSection from 'src/components/TwoColumnSection';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import DownloadImg from 'public/download_app.png';
import { toast } from 'react-toastify';
import Pagination from 'src/components/Pagination';

export default function ProjectListPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  const [status, setStatus] = useState('Status');
  const [currentPage, setCurrentPage] = useState(1);

  // To use this after changing the current page,
  // challenge is on how to update the props
  useEffect(() => {
    fetch(
      `https://devapi.collaction.org/v1/crowdactions?page=${currentPage}&pageSize=3`
    )
      .then(response => response.json())
      .then(data => {
        return data;
      });
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (event: any) => {
    event?.preventDefault();

    const axios = (await import('axios')).default;

    if (form.current == null) {
      toast.warn('Kindly fill in all the details');
      return;
    }

    axios
      .post('https://api.collaction.org/v1/contact', {
        title: "[Contact] New submission from CollAction's website",
        email: event.target.email.value,
        body: event.target.message.value,
      })
      .then(res => {
        if (res.data.id) {
          toast.success('Your message has been sent successfully');
        } else {
          toast.error('Something went wrong, please try again later');
        }
      })
      .catch(() => {
        toast.error('Something went wrong, please try again later');
      });
  };
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
                    {t('projects:crowdaction.title')}
                  </p>
                  <p className="text-primary-200 text-center md:text-left">
                    {t('projects:crowdaction.description')}
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
                  {t('projects:explore.title')}
                </p>
                <p className="text-primary-200 text-center md:text-left">
                  {t('projects:explore.description')}
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
                <p className="font-semibold">{t('projects:change.filters')}</p>
                <button className="font-semibold rounded-full bg-primary-0 pl-6 pr-6 pt-2 pb-2 hidden md:block lg:block">
                  {t('projects:change.reset')}
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
                    <option value="Status">
                      {t('projects:change.status')}
                    </option>
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
                    <option value="Status">
                      {t('projects:change.status')}
                    </option>
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
                    <option value="Status">
                      {t('projects:change.status')}
                    </option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end block md:hidden lg:hidden ">
                <button className="font-semibold rounded-full bg-primary-0 pl-6 pr-6 pt-2 pb-2 mt-4">
                  {t('projects:change.reset')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mx-auto h-auto
          grid grid-cols-1 md:grid-cols-3 lg:grid-col-3
          max-w-400 md:max-w-750 lg:max-w-924
          mt-6 md:mt-8 lg:mt-8 gap-x-4 md:gap-x-3 lg:gap-x-4 gap-y-8 "
        >
          {projects.items.map(
            ({
              title,
              description,
              id,
            }: {
              title: string;
              description: string;
              id: string;
            }) => (
              <div
                className="bg-white rounded-t-lg overflow-hidden"
                key={`${id} card`}
              >
                <Image src={actions} alt="black CollAction logo with text" />
                <div className="flex pl-4 md:pl-3 lg:pl-4 space-x-1 mt-4">
                  <button
                    className="font-light rounded-full 
                   bg-collaction-400 py-2 px-4 md:py-1 md:px-2 lg:py-2 lg:px-4
                    text-white text-sm"
                  >
                    Now Open
                  </button>
                  <button
                    className="font-light rounded-full 
                border-2 border-primary-0 py-2 px-4 md:py-1 md:px-2 lg:py-2 lg:px-4 text-black text-sm"
                  >
                    Sustainability
                  </button>
                  <button
                    className="font-light rounded-full 
                border-2 border-primary-0 py-2 px-4 md:py-1 md:px-2 lg:py-2 lg:px-4
                text-black text-sm"
                  >
                    Food
                  </button>
                </div>
                <div className="pl-4 md:pl-3 lg:pl-4 mt-4">
                  <p className="font-semibold text-lg">{title}</p>
                  <p className="mt-4 text-primary-300">
                    {description.length > 150
                      ? `${description.substring(0, 150)}...`
                      : description}
                  </p>
                </div>
                <div className="py-4 flex justify-center">
                  <button
                    className="font-light rounded-full w-5/6
                   border-2 border-collaction-400 py-2 px-4 text-black text-sm"
                  >
                    Read More
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        <div className="mx-auto max-w-400 md:max-w-750 lg:max-w-924 flex justify-center mb-24">
          <Pagination
            currentPage={currentPage}
            total={projects.items.length}
            limit={3}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
        <div className="w-full bg-secondary md:bg-white lg:bg-white py-0 md:py-10 lg:py-10 mx-auto">
          <div className="mx-5 md:mx-5 lg:mx-0">
            <div
              className="h-auto
          mx-auto max-w-400 md:max-w-750 lg:max-w-924
          mt-16 md:mt-0 lg:mt-0 flex flex-wrap justify-center"
            >
              <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center">
                <div className="mx-auto max-w-320 ">
                  <p className="font-bold text-3xl text-center leading-8">
                  {t('contact:reachout.title')}
                  </p>
                  <br />
                  <p className="text-center text-lg leading-6">
                  {t('contact:reachout.description')}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 flex flex-wrap justify-center">
                <form
                  className="p-2 rounded w-80 md:w-80 lg:w-96"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    type="email"
                    name="email"
                    required
                    className="required rounded-full bg-primary-0 w-80 md:w-80 lg:w-96  h-9 mt-6 p-4 text-black font-light"
                    placeholder={t('contact:form.email')}
                  ></input>
                  <p className="text-primary-400 text-sm pl-4">
                  {t('contact:form.emaildescription')}
                  </p>
                  <textarea
                    name="message"
                    rows={6}
                    cols={30}
                    required
                    className="required rounded-md bg-primary-0 mt-6 p-4 text-black font-light border w-80 md:w-80 lg:w-96"
                    placeholder={t('contact:form.emaildescription')}
                  ></textarea>
                  <button
                    className="w-80 md:w-80 lg:w-96 h-9 mt-4 items-center bg-primary-0 hover:bg-collaction-300 text-primary-300
          font-semibold hover:text-black py-2 px-4 rounded-full"
                  >
                    {t('contact:form.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <TwoColumnSection
          isReverseOrder={false}
          first={
            <Image src={DownloadImg} alt="Download App" className="mx-auto" />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              isSecondaryBg
              title={t('common:downloadApp.title')}
              body={t('common:downloadApp.description')}
            >
              <div className="flex justify-center mb-6">
                <AppLinkApple className="mr-4 sm:mr-5" />
                <AppLinkGoogle />
              </div>
            </InfoCard>
          }
        />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const projects = await fetch(
    'https://devapi.collaction.org/v1/crowdactions?page=1&pageSize=3'
  )
    .then(response => response.json())
    .then(data => {
      return data;
    });

  return {
    props: {
      projects,
      locale,
      ...(await serverSideTranslations(locale, ['common', 'projects', 'contact'])),
    },
  };
}

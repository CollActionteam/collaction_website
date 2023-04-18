import React, { useRef } from 'react';
import PageSEO from 'src/components/PageSEO';

import HeroImg from 'public/education_february.jpeg';

import { useTranslation } from 'next-i18next';

import PageHero from 'src/components/PageHero';
import Image from 'next/image';
import CollActionLogoWithText from 'public/crowdaction_graphic.png';
import TwoColumnSection from 'src/components/TwoColumnSection';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import DownloadImg from 'public/download_app.png';
import { toast } from 'react-toastify';
import Pagination from 'src/components/Pagination';
import { useRouter } from 'next/router';
import ContentBlock from 'src/components/ContentBlock';
import CrowdActionCard, { CrowdAction } from 'src/components/CrowdActionCard';
import Quote from 'src/components/Quote';
import collactionTranslations from 'src/helpers/collactionTranslations';

export default function ProjectListPage({ projects, pagination }: any) {
  const router = useRouter();

  let { page } = router.query;

  if (page == null) {
    page = '1';
  }

  const { t } = useTranslation();
  // const [status, setStatus] = useState('Status');

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
      .then((res: any) => {
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
        <PageHero
          image={HeroImg}
          title={t('projects:hero.title')}
          description={t('projects:hero.description')}
        />

        <TwoColumnSection
          className=""
          isReverseOrder={false}
          isSecondaryBg={false}
          mobile={
            <div>
              {/* howweworkSection  */}
              <ContentBlock
                title={t('projects:howwework.title')}
                body={t('projects:howwework.description')}
                className="w-5/6 flex flex-col lg:flex-row lg:items-center"
              />
              {/* begSection  */}
              <ContentBlock
                title={t('projects:begSection.title')}
                body={t('projects:begSection.description')}
                className="w-5/6 flex flex-col lg:flex-row lg:items-center"
              />
            </div>
          }
          first={
            <ContentBlock
              title={t('projects:howwework.title')}
              body={t('projects:howwework.description')}
              className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-7"
            />
          }
          second={
            <ContentBlock
              title={t('projects:begSection.title')}
              body={t('projects:begSection.description')}
              className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-7"
            />
          }
        />

        {/* CrowdActionFor  */}
        {/* <ContentBlock
          title={t('projects:projectSection.title')}
          body={t('projects:projectSection.description')}
          // hasBg={false}
        /> */}

        {/* Quote Tom */}
        <Quote
          className="pt-8"
          isSecondaryBg={true}
          quote={t('projects:tom.quote')}
          name={t('projects:tom.name')}
          position={t('projects:tom.position')}
          // hasBg={false}
        />

        {/* Project on our Platform? */}
        <TwoColumnSection
          isReverseOrder={false}
          isSecondaryBg={false}
          mobile={
            <div>
              <ContentBlock
                title={t('projects:projectSection.title')}
                body={t('projects:projectSection.description')}
                isSecondaryBg={false}
                className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-18"
              />
              <Image
                src={CollActionLogoWithText}
                alt="Participants"
                height={450}
                className="relative left-[50%] transform  translate-y-[10%] translate-x-[-50%]"
              />
            </div>
          }
          first={
            <ContentBlock
              title={t('projects:projectSection.title')}
              body={t('projects:projectSection.description')}
              isSecondaryBg={false}
              className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-18"
            />
          }
          second={
            <Image
              src={CollActionLogoWithText}
              alt="Participants"
              height={450}
              className="absolute top-[50%] left-[50%] transform translate-y-[-45%] translate-x-[-50%]"
            />
          }
        />
        {/* 
        <div className="h-auto w-full mx-auto bg-secondary md:bg-white">
          <div className="mx-5 md:mx-5 lg:mx-0 bg-primary-0 md:bg-white rounded-lg md:rounded-none">
            <div
              className="h-auto
          mx-auto max-w-400 md:max-w-750 lg:max-w-924
          mt-16 md:mt-0 lg:mt-0 flex flex-wrap justify-center md:justify-start lg:justify-start"
            >
              <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center md:justify-start lg:justify-start pt-8 md:pt-0 lg:pt-0">
                <div className="max-w-320 sm:max-w-320 lg:max-w-320">
                  <p className="font-bold text-lg mb-4 text-center md:text-left">
                    {t('projects:crowdaction.title')}
                  </p>
                  <p className="text-primary-300 text-center md:text-left">
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
        </div> */}

        {/* 4PHASES */}
        <TwoColumnSection
          isReverseOrder={false}
          isSecondaryBg={true}
          mobile={
            <div>
              <ContentBlock
                title={t('projects:crowdresearch.title')}
                body={t('projects:crowdresearch.description')}
                isSecondaryBg={true}
                className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-8"
              />
              <ContentBlock
                title={t('projects:crowdscaling.title')}
                body={t('projects:crowdscaling.description')}
                isSecondaryBg={true}
                className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-4 mb-8"
              />
            </div>
          }
          first={
            <ContentBlock
              title={t('projects:crowdresearch.title')}
              body={t('projects:crowdresearch.description')}
              isSecondaryBg={true}
              className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-10"
            />
          }
          second={
            <ContentBlock
              title={t('projects:crowdscaling.title')}
              body={t('projects:crowdscaling.description')}
              isSecondaryBg={true}
              className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-10"
            />
          }
        />

        <TwoColumnSection
          className=""
          isReverseOrder={false}
          isSecondaryBg={false}
          mobile={
            <div>
              {/* first ContentBlock is fill as e.g. mt-8 didn't work to create fill above CrowdAction part on mobile */}
              <ContentBlock
                title=""
                body=""
                isSecondaryBg={false}
                className=""
              />
              <ContentBlock
                title={t('projects:crowdaction.title')}
                body={t('projects:crowdaction.description')}
                className="w-4/5 flex flex-col lg:flex-row lg:items-center"
                isSecondaryBg={false}
              />
              <ContentBlock
                title={t('projects:crowdimpact.title')}
                body={t('projects:crowdimpact.description')}
                className="w-4/5 flex flex-col lg:flex-row lg:items-center mt-4"
                isSecondaryBg={false}
              />
              {/* last ContentBlock is fill as e.g. mb-8 didn't work to create fill below CrowdImpact part on mobile */}
              <ContentBlock
                title=""
                body=""
                isSecondaryBg={false}
                className=""
              />
            </div>
          }
          first={
            <ContentBlock
              title={t('projects:crowdaction.title')}
              body={t('projects:crowdaction.description')}
              className="w-4/5 flex flex-col lg:flex-row lg:items-center mt-11"
              isSecondaryBg={false}
            />
          }
          second={
            <ContentBlock
              title={t('projects:crowdimpact.title')}
              body={t('projects:crowdimpact.description')}
              className="w-4/5 flex flex-col lg:flex-row lg:items-center mt-11"
              isSecondaryBg={false}
            />
          }
        />

        <ContentBlock
          title={t('projects:explore.title')}
          body={t('projects:explore.description')}
          isSecondaryBg={true}
          leftAlign={false}
          className="mt-18"
        />

        {/* <div className="h-auto w-full" id="crowdActions">
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
                <p className="text-primary-300 text-center md:text-left">
                  {t('projects:explore.description')}
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="h-auto w-full">
          <div className="mx-5">
            <div
              className="h-auto bg-white rounded-lg
          mx-auto max-w-400 md:max-w-750 lg:max-w-924
          mt-4 md:mt-4 lg:mt-4 p-6"
            >
              <div className="flex justify-between">
                <p className="font-semibold">
                  {t('projects:change.filters')}
                </p>
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
              <div className="justify-end block md:hidden lg:hidden ">
                <button className="font-semibold rounded-full bg-primary-0 pl-6 pr-6 pt-2 pb-2 mt-4">
                  {t('projects:change.reset')}
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div
          className={`mx-auto w-full h-auto justify-items-center grid 
          ${
            projects.length == 1
              ? 'grid-cols-1 max-w-400 md:max-w-750 lg:max-w-924'
              : projects.length == 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-400 md:max-w-750'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-400 md:max-w-750 lg:max-w-924'
          }
          mt-6 md:mt-8 lg:mt-8 lg:gap-x-4 gap-y-8`}
        >
          {projects?.map((crowdAction: CrowdAction) => (
            <CrowdActionCard
              key={crowdAction.id}
              id={crowdAction.id}
              title={crowdAction.title}
              type={crowdAction.type}
              description={crowdAction.description}
              category={crowdAction.category}
              subcategory={crowdAction.subcategory}
              location={crowdAction.location}
              images={crowdAction.images}
              participantCount={crowdAction.participantCount}
              commitmentOptions={crowdAction.commitmentOptions}
              status={crowdAction.status}
              joinStatus={crowdAction.joinStatus}
              slug={crowdAction.slug}
            ></CrowdActionCard>
          ))}
        </div>
        <div className="mx-auto max-w-400 md:max-w-750 lg:max-w-924 flex justify-center">
          <Pagination
            currentPage={page}
            total={pagination?.totalPages}
            limit={3}
            onPageChange={async (page: number) => {
              const element = document.getElementById('crowdActions');
              element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });

              await router.push({ query: { page } }, undefined, {
                scroll: false,
              });
            }}
          />
        </div>

        <TwoColumnSection
          className=""
          isReverseOrder={false}
          first={
            <Image
              src={DownloadImg}
              alt="Download App"
              className="mx-auto mt-4"
              width={450}
            />
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

        <div className="w-full bg-secondary md:bg-secondary lg:bg-secondary py-0 md:py-10 lg:py-10 mx-auto">
          <div className="mx-5 md:mx-5 lg:mx-0">
            <div
              className="h-auto
          mx-auto max-w-400 md:max-w-750 lg:max-w-924
          mt-16 md:mt-0 lg:mt-0 flex flex-wrap justify-center"
            >
              <div className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center">
                <div className="mx-auto max-w-320 ">
                  <p className="font-bold text-3xl text-primary-400 text-center leading-8">
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
                    placeholder={t('contact:form.message')}
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

        {/* crowdresearchSection  */}
        {/* <ContentBlock
          // className="pt-10"
          title={t('projects:crowdresearch.title')}
          body={t('projects:crowdresearch.description')}
          // hasBg={false}
        /> */}
        {/* crowdscalingSection  */}
        {/* <ContentBlock
          // className="pt-10"
          title={t('projects:crowdscaling.title')}
          body={t('projects:crowdscaling.description')}
          // hasBg={false}
        /> */}
        {/* crowdactionSection  */}
        {/* <ContentBlock
          // className="pt-10"
          title={t('projects:crowdaction.title')}
          body={t('projects:crowdaction.description')}
          // hasBg={false}
        /> */}
        {/* crowdimpactSection  */}
        {/* <ContentBlock
          // className="pt-10"
          title={t('projects:crowdimpact.title')}
          body={t('projects:crowdimpact.description')}
          // hasBg={false}
        /> */}
      </main>
    </>
  );
}

export async function getServerSideProps({ query, locale }: any) {
  const page: string = query?.page || 1;

  const { items, pageInfo } = await fetch(
    `https://api.collaction.org/v1/crowdactions?page=${page}&pageSize=3`
  )
    .then(response => response.json())
    .then(data => {
      return data;
    });

  return {
    props: {
      projects: items,
      pagination: pageInfo,
      locale,
      ...(await collactionTranslations(locale, [
        'common',
        'projects',
        'contact',
      ])),
    },
  };
}

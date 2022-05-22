import Link from 'next/link';
import clsx from 'clsx';
import {
  FiMapPin as MapPinIcon,
  FiDollarSign as DollarSignIcon,
  FiArrowRight as ArrowRightIcon,
} from 'react-icons/fi';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import { getJoinsData } from 'src/lib/getJoins';
import { JoinDataType, JoinTagTokenType } from 'src/types/joins';

type JoinTagsMapType = {
  [K in JoinTagTokenType]: {
    icon: any;
    text: string;
  };
};

const joinTagsMap: JoinTagsMapType = {
  voluntary: {
    icon: <DollarSignIcon />,
    text: 'Voluntary',
  },
  remote: {
    icon: <MapPinIcon />,
    text: 'Remote',
  },
};

export default function JoinListPage({ data }: { data: JoinDataType[] }) {
  return (
    <>
      <PageSEO
        title="CollAction | Join Our Team"
        description="Want to join our team in making the world a better place? Check out our current openings."
      />

      <main className="bg-secondary p-5 pt-10 md:pt-11">
        <div className="text-center mx-auto max-w-350 sm:max-w-400 lg:max-w-500 mb-9 md:mb-10">
          <h1 className="text-headline-m-1 md:text-headline-lg-1 mb-6">
            Become part of the CollAction Team
          </h1>
          <p className="text-body-short-1 text-primary-200">
            Help us on our mission to make doing good fun & easy
          </p>
        </div>

        {data.map(({ title, description, tags }) => (
          <div
            key={`${title} card`}
            className={clsx(
              'bg-primary-0 p-6 mx-auto mb-6 rounded-1',
              'w-full md:w-3/4 max-w-350 sm:max-w-400 lg:max-w-864'
            )}
          >
            <h3 className="text-headline-m-1 my-6">{title}</h3>
            <p className="text-body-short-1 text-primary-200 mb-6">
              {description}
            </p>
            <div className="flex flex-wrap mb-4">
              {tags.map(tag => {
                const currentTag = joinTagsMap[tag];
                return (
                  <div
                    key={title + currentTag.text}
                    className="flex items-center bg-secondary text-primary-400 rounded-1 py-3 px-4 mb-4 mr-4"
                  >
                    {currentTag.icon}
                    <span className="ml-4">{currentTag.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="w-full flex justify-end">
              <Link
                href={`/join/as/${title.split(' ').join('-').toLowerCase()}`}
              >
                <a
                  className="bg-collaction h-8 w-8 -mr-4 -mb-4 p-4 rounded-full text-secondary"
                  aria-label={`Visit ${title} posting`}
                >
                  <ArrowRightIcon />
                </a>
              </Link>
            </div>
          </div>
        ))}

        <InfoCard
          isSecondaryBg
          title="Our individual actions are a drop in the ocean. But together, we make waves!"
        >
          <div className="flex justify-center mb-6">
            <AppLinkApple className="mr-4 sm:mr-5" />
            <AppLinkGoogle />
          </div>
        </InfoCard>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = getJoinsData();

  return {
    props: {
      data,
    },
  };
};

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

type JoinTagTokens = 'voluntary' | 'remote';
type JoinTagsType = {
  [K in JoinTagTokens]: {
    icon: any;
    text: string;
  };
};

const joinTags: JoinTagsType = {
  voluntary: {
    icon: <DollarSignIcon />,
    text: 'Voluntary',
  },
  remote: {
    icon: <MapPinIcon />,
    text: 'Remote',
  },
};

const JoinCard = ({
  title,
  description,
  tags,
  href,
}: {
  title: string;
  description: string;
  tags: JoinTagTokens[];
  href: string;
}) => {
  return (
    <div
      className={clsx(
        'bg-primary-0 p-6 mx-auto mb-6 rounded-1',
        'w-full md:w-3/4 max-w-350 sm:max-w-400 lg:max-w-864'
      )}
    >
      <h3 className="text-headline-m-1 my-6">{title}</h3>
      <p className="text-body-short-1 text-primary-200 mb-6">{description}</p>
      <div className="flex mb-6">
        {tags.map(tag => {
          const currentTag = joinTags[tag];
          return (
            <div
              key={title + currentTag.text}
              className="flex items-center bg-secondary text-primary-400 rounded-1 py-3 px-4 mr-4"
            >
              {currentTag.icon}
              <span className="ml-4">{currentTag.text}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-end">
        <Link href={href}>
          <a
            className="bg-collaction h-8 w-8 -mr-4 -mb-4 p-4 rounded-full text-secondary"
            aria-label={`Visit ${title} posting`}
          >
            <ArrowRightIcon />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default function JoinPage() {
  return (
    <>
      <PageSEO title="CollAction | Sustainable choices made easy" />

      <main className="bg-secondary p-5 pt-10 md:pt-11">
        <div className="text-center mx-auto max-w-350 sm:max-w-400 lg:max-w-500 mb-9 md:mb-10">
          <h1 className="text-headline-m-1 md:text-headline-lg-1 mb-6">
            Become part of the CollAction-team
          </h1>
          <p className="text-body-short-1 text-primary-200">
            Help us on our mission to make doing good fun & easy
          </p>
        </div>

        <JoinCard
          title="Product Designer"
          description="Native application for iOS and android, web design, UI system"
          tags={['remote', 'voluntary']}
          href="/product-designer"
        />
        <JoinCard
          title="Web Developer"
          description="Native application for iOS and android, web design, UI system"
          tags={['remote', 'voluntary']}
          href="/web-developer"
        />

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

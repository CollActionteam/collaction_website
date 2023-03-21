import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import { getJoinsData } from 'src/lib/getJoins';
import { JoinDataType } from 'src/types/joins';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getJoinData } from 'src/lib/getJoin';
import { InferGetStaticPropsType } from 'next';
import collactionTranslations from 'src/helpers/collactionTranslations';
import { log } from 'console';

  export default function SingleJoinPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  
  if (!props) return <></>;
  return (
    <>
      <PageSEO
        title="CollAction | Join Our Team"
        description={`Passionate about what we do? Consider joining our team as a ${props.data.title}.`}
      />

      <main className="bg-secondary p-5 md:p-12">
        <div className="max-w-600 mx-auto">
          <h1 className="text-primary-400 mb-6">{props.data.title}</h1>
          <p className="text-primary-300 mb-7">{props.data.description}</p>

          <h4 className="text-primary-400 mb-4">General</h4>
          <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-7">
            <li>Location: {props.data.location}</li>
            <li>Pay: {props.data.pay}</li>
            <li>
              Contact:{' '}
              <a
                href={`mailto:${props.data.contact}?subject=${props.data.title} Position at Collaction`}
                className="text-collaction font-bold"
              >
                {props.data.contact}
              </a>
            </li>
          </ul>

          <h4 className="text-primary-400 mb-4">About you</h4>
          <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-7">
            {props.data.aboutYou.map( (aboutYouPoint : string) => (
              <li key={aboutYouPoint}>{aboutYouPoint}</li>
            ))}
          </ul>

          <h4 className="text-primary-400 mb-7">About us</h4>
          <p className="mb-6">
            The dev team has grown to ~30 engineers and is spread all across the
            globe. We meet every Tuesday at 7pm Amsterdam time, but you're free
            to decide if you'd like to be there or not. Most of our ambassadors
            are located in the Netherlands, in particular Amsterdam. connect
            people to solve collective action problems. We aspire to make doing
            good fun & easy.
          </p>
          <p className="mb-9">
            Our organisational goal is to be a self-sustaining non-profit that
            functions independently from donations. We hope to achieve this
            through a paid version of our product in the future. As soon as we
            have fixed this, we'll start compensating team members for their
            efforts!
          </p>

          <h4 className="text-primary-400 mb-7">Commitment</h4>
          <p className="mb-6">
            CollAction is a non-profit organisation and is currently run by
            volunteers only. We are not able to provide a salary at this point,
            therefore: your commitment to CollAction is exactly what you want it
            to be. We understand that family, work, etc. are more important. We
            understand that first things go first, so we don't try to force each
            other to do something. We simply try to keep each other updates on
            how things are going, so we know what to expect from each other.
            your schedule.
          </p>
        </div>

        <InfoCard
          isSecondaryBg
          title="Our individual actions are a drop in the ocean. But together, we make waves!"
        >
          <div className="flex justify-center">
            <AppLinkApple className="mr-4 sm:mr-5" />
            <AppLinkGoogle />
          </div>
        </InfoCard>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = getJoinsData();
  const paths = data.map(({ title }) => ({
    params: {
      title: title.split(' ').join('-').toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = getJoinData(ctx.params?.title as string);
  const locale = ctx.locale as string;

  return {
    props: {
      data,
      ...(await collactionTranslations(locale)),
    },
  };
};

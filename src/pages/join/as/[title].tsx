import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import { getJoinsData } from 'src/lib/getJoins';
import { JoinDataType } from 'src/types/joins';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getJoinData } from 'src/lib/getJoin';

export default function SingleJoinPage({ data }: { data: JoinDataType }) {
  return (
    <>
      <PageSEO
        title="CollAction | Join Our Team"
        description={`Passionate about what we do? Consider joining our team as a ${data.title}.`}
      />

      <main className="bg-primary-0 p-5 md:p-12">
        <div className="max-w-600 mx-auto">
          <h1 className="text-primary-400 mb-6">{data.title}</h1>
          <p className="text-primary-400 mb-7">{data.description}</p>

          <h4 className="text-primary-400 mb-4">General</h4>
          <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-7">
            <li>Location: {data.location}</li>
            <li>Pay: {data.pay}</li>
            <li>
              Contact:{' '}
              <a
                href={`mailto:${data.contact}?subject=${data.title} Position at Collaction`}
                className="text-collaction font-bold"
              >
                {data.contact}
              </a>
            </li>
          </ul>

          <h4 className="text-primary-400 mb-4">About you</h4>
          <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-7">
            {data.aboutYou.map(aboutYouPoint => (
              <li key={aboutYouPoint}>{aboutYouPoint}</li>
            ))}
          </ul>

          <h4 className="text-primary-400 mb-7">About us</h4>
          <p className="mb-6">
            We connect people to solve collective action problems. We aspire to
            make doing good fun & easy.
          </p>
          <p className="mb-6">
            CollAction is an Amsterdam-based non-profit Public Benefit
            Organisation. Our team has grown from 3 to 21 international
            volunteers since July 2021 and we are currently building a native
            app to solve collective action problems. Our focus is on
            sustainability-related issues.
          </p>
          <p className="mb-9">
            Our organisational goal is to be a self-sustaining non-profit that
            functions independently from donations. Through a paid version of
            our product for companies and municipalities, we aspire to
            financially compensate everyone on the team in the future.
          </p>

          <h4 className="text-primary-400 mb-7">Commitment</h4>
          <p className="mb-6">
            CollAction is a non-profit organisation and is currently run by
            volunteers only. We are not able to provide a salary at this point,
            therefore: your commitment to CollAction is exactly what you want it
            to be. You are not expected to deliver something that does not fit
            your schedule.
          </p>
          <p className="mb-10">
            We love proactive people that take initiative, however: this works
            best if you are honest about what can realistically be done, given
            your individual schedule. There is no shame in saying no to certain
            tasks or in reaching out to someone on the team to help out if you
            don’t have the means to finish a task you committed to.
          </p>
        </div>

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

export const getStaticProps: GetStaticProps = async ctx => {
  const data = getJoinData(ctx.params?.title as string);

  return {
    props: {
      data,
    },
  };
};

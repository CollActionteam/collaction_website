import PageSEO from 'src/components/PageSEO';
import pos_criteria from '../../data/pos_criteria.json';
import { useRouter } from 'next/router';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
export default function Position() {
  const router = useRouter();
  const position = router.query?.position;
  const posDetails = pos_criteria[position as keyof typeof pos_criteria];
  return (
    <>
      <PageSEO
        title="CollAction | Join Team"
        description="These terms of use, as amended from time to time describe the terms under which use may be made of the website and the application."
      />

      <main className="bg-primary-0 p-5 md:p-12">
        {posDetails && (
          <div className="max-w-600 mx-auto">
            <h1 className="text-primary-400  mb-6">{posDetails.title}</h1>
            <p className="text-primary-400  mb-7">{posDetails.desc}</p>

            <h4 className="text-primary-400 mb-4">General</h4>
            <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-7">
              <li>location: {posDetails.general.location}</li>
              <li>{posDetails.general.voluntary ? 'Voluntary' : 'Paid'}</li>
              <li>
                contacts:{' '}
                <span className="text-collaction font-bold">
                  {' '}
                  {posDetails.general.contact}
                </span>
              </li>
            </ul>

            <h4 className="text-primary-400 mb-4">About you</h4>
            <ul style={{ listStyleType: 'disc' }} className="pl-7 mb-7">
              {position &&
                posDetails['about'].map(desc => <li key={desc}>{desc}</li>)}
            </ul>
            <h4 className="text-primary-400 mb-7">About us</h4>
            <p className="mb-6 last:mb-0">
              We connect people to solve collective action problems. We aspire
              to make doing good fun & easy. CollAction is an Amsterdam-based
              non-profit Public Benefit Organisation. Our team has grown from 3
              to 21 international volunteers since July 2021 and we are
              currently building a native app to solve collective action
              problems. Our focus is on sustainability-related issues. Our
              organisational goal is to be a self-sustaining non-profit that
              functions independently from donations. Through a paid version of
              our product for companies and municipalities, we aspire to
              financially compensate everyone on the team in the future.
            </p>

            <h4 className="text-primary-400 mb-7">Commitment</h4>
            <p className="mb-6 ">
              CollAction is a non-profit organisation and is currently run by
              volunteers only. We are not able to provide a salary at this
              point, therefore: your commitment to CollAction is exactly what
              you want it to be. You are not expected to deliver something that
              does not fit your schedule. We love proactive people that take
              initiative, however: this works best if you are honest about what
              can realistically be done, given your individual schedule. There
              is no shame in saying no to certain tasks or in reaching out to
              someone on the team to help out if you don’t have the means to
              finish a task you committed to.
            </p>
          </div>
        )}
        <InfoCard
          isSecondaryBg
          title="Our individual actions are a drop in the ocean. But together, we make waves!"
        >
          <div className="flex justify-center mb-6">
            <AppLinkApple className="mr-4 sm:mr-5" />
            <AppLinkGoogle />
          </div>
        </InfoCard>
        <div className="grid place-content-center">
          <button className="my-6 text-white bg-collaction rounded-lg mx-auto w-72 h-12">
            Apply
          </button>
        </div>
      </main>
    </>
  );
}

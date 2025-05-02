import PageSEO from 'src/components/PageSEO';
import collactionTranslations from 'src/helpers/collactionTranslations';

export default function Impact() {
  return (
    <>
      <PageSEO
        title="CollAction | ANBI"
        description="The goal of CollAction is to solve collective action problems. We do so by collaborating with like minded organisations to bring positive change. "
      />

      <main className="bg-primary-0 p-5 md:p-12">
        <div className="max-w-600 mx-auto">
          <h1 className="text-collaction text-center mb-6">ANBI</h1>

          <p className="mb-6 last:mb-0">
            Stichting CollAction is recognised by the Dutch tax authorities as
            an ANBI. This stands for "Algemeen Nut Beogende Instelling", which
            translates to{' '}
            {
              <a
                className="text-collaction"
                href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/business-public-benefit-organisations/public_benefit_organisations/what_is_pbo/what_is_a_pbo"
                target="_blank"
                rel="noreferrer"
              >
                Public Benefit Organisation
              </a>
            }
            .
          </p>

          <p className="mb-6 last:mb-0">
            The goal of CollAction is to solve
            <a
              href="https://en.wikipedia.org/wiki/Collective_action_problem"
              className="text-collaction"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              collective action problems
            </a>
            . We do so by collaborating with like minded organisations to bring
            positive change. The board of CollAction comprises of Tana Viviers,
            Tom Tetteroo and Tom Siebring. The board members are volunteers and
            are not entitled to any financial compensation. CollAction's most
            recent annual report, including current policy and other required
            ANBI documentation, can be found
            <a
              href="https://docs.google.com/document/d/1r80ESRH_BmW57iRAcB7GMRIkLrhwdMr-oy0In3rkXgo/edit?usp=sharing"
              className="text-collaction"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              here
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      ...(await collactionTranslations(locale)),
    },
  };
}

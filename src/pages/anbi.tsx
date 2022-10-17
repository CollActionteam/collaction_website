import PageSEO from 'src/components/PageSEO';

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
            positive change. The board of CollAction comprises of Tom Siebring
            and Tana Viviers. The board members are volunteers and are not
            entitled to any financial compensation. CollAction's financial
            statement of 2021 can be found
            <a
              href="https://drive.google.com/file/d/1T1vyi1oP79NY_V0HuauL3DJnK8tVg3Zl/view?usp=sharing"
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

import PageSEO from 'src/components/PageSEO';

export default function HomePage() {
  return (
    <>
      <PageSEO title="CollAction | Sustainable choices made easy" />

      <main className="bg-primary-0 p-5 md:p-12">
        <div className="max-w-600 mx-auto">
          <h1 className="text-primary-400 text-center mb-6">
            Privacy and Cookie Policy
          </h1>
          <p className="text-primary-400 text-center mb-7 text-body-short-1 rounded-1">
            version dated January 23rd, 2022
          </p>
        </div>
      </main>
    </>
  );
}

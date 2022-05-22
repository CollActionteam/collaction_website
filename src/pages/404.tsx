import Image from 'next/image';
import PageSEO from 'src/components/PageSEO';

export default function Custom404() {
  return (
    <>
      <PageSEO title="Page Not Found" />

      <main className="bg-secondary p-5 md:p-12">
        <div className="max-w-600 mx-auto text-center">
          <h1 className="text-primary-400 mb-6">Page Not Found</h1>
          <Image
            unoptimized
            src="/im-lost.gif"
            alt="lost dog"
            width={300}
            height={395}
          />
        </div>
      </main>
    </>
  );
}

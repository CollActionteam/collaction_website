import Image from 'next/image';
import PageSEO from 'src/components/PageSEO';

export default function Custom404() {
  return (
    <>
      <PageSEO title="Page Not Found" />

      <main className="bg-secondary p-5 md:p-12">
        <div className="max-w-320 mx-auto text-center">
          <h4 className="text-primary-400 mb-6">Page Not Found {'  '}</h4>
          <Image
            unoptimized
            src="/im-lost.gif"
            alt="lost dog"
            className="rounded-1"
            width={300}
            height={395}
          />
        </div>
      </main>
    </>
  );
}

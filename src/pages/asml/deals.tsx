import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { DealsCard } from 'src/components/DealsCard';
import { getDealsData } from 'src/lib/getDeals';

export default function DealsPage({
  deals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>ASML Deals | CollAction</title>
      </Head>

      <div className="bg-black-0 p-5 md:p-12">
        <div className="flex flex-wrap justify-center lg:justify-start mx-auto lg:max-w-4xl lg:w-208">
          {deals.map(deal => (
            <DealsCard key={deal.title} {...deal} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const deals = getDealsData();

  return {
    props: {
      deals,
    },
  };
};

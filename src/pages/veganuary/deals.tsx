import { InferGetStaticPropsType } from 'next';
import PageSEO from 'src/components/PageSEO';
import { DealsCard } from 'src/components/DealsCard';
import { getDealsData } from 'src/lib/getDeals';

export default function DealsPage({
  deals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title="CollAction meets Veganuary | Make an impact together"
        description="Participate in Veganuary: an annual challenge that promotes veganism and sustainable food consumption. Browse through all restaurant deals."
      />

      <div className="bg-primary-0 p-5 md:p-12">
        <div className="flex flex-wrap justify-center mx-auto w-full">
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

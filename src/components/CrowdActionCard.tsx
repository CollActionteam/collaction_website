import Image from 'next/image';
import Link from 'next/link';
import CrowdActionChipList from './CrowdActionChipList';

export interface CrowdAction {
  id: string;
  title: string;
  type: string;
  description: string;
  category: string;
  subcategory: string;
  location: CrowdActionLocation;
  images: CrowdActionImages;
  participantCount: number;
  commitmentOptions: any[];
  status: string;
  joinStatus: string;
  slug: string;
}

export interface CrowdActionImages {
  card: string;
  banner: string;
}

export interface CrowdActionLocation {
  code: string;
  name: string;
}

const staticUrl = process.env.NEXT_PUBLIC_STATIC_URL;

export default function CrowdActionCard({ ...crowdAction }: CrowdAction) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden w-[300px] h-[492px] drop-shadow-lg relative"
      key={`${crowdAction.id} card`}
    >
      {crowdAction?.images?.card && (
        <Image
          src={`${staticUrl}${crowdAction.images.card}`}
          alt={crowdAction.title}
          width={300}
          height={180}
          className="max-w-[300px] max-h-[180px] h-[180px] w-[300px]"
        />
      )}
      <CrowdActionChipList
        status={crowdAction.status}
        joinStatus={crowdAction.joinStatus}
        category={crowdAction.category}
        subcategory={crowdAction.subcategory}
      ></CrowdActionChipList>
      <div className="mt-4 px-5 pb-5">
        <p className="font-bold text-xl text-primary-400">
          {crowdAction.title}
        </p>
        {crowdAction?.description && (
          <p className="mt-4 text-primary-300 text-sm leading-6">
            {crowdAction.description.length > 175
              ? `${crowdAction.description.substring(0, 175)}...`
              : crowdAction.description}
          </p>
        )}
      </div>
      <div className="py-5 px-5 flex justify-center absolute bottom-0 left-0 right-0">
        <Link
          href={`/projects/${crowdAction.slug}`}
          className="font-bold text-collaction rounded-full w-full border-2 border-collaction-400 py-[6px] px-4 text-[12px] text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

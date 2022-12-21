import Image from 'next/image';

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
      <Image
        src={`${staticUrl}${crowdAction.images.card}`}
        alt={crowdAction.title}
        width={300}
        height={180}
        className="max-w-[300px] max-h-[180px] h-[180px] w-[300px]"
      />
      <div className="flex space-x-2 mt-4 px-5">
        <button className="font-semibold text-[10px] rounded-full bg-collaction-400 py-1 px-4 text-white">
          Now Open
        </button>
        <button className="font-semibold text-[10px] rounded-full border-2 border-primary-0 py-1 px-4 text-black">
          {crowdAction.category.toUpperCase()}
        </button>
        <button className="font-semibold text-[10px] rounded-full border-2 border-primary-0 py-1 px-2 text-black">
          {crowdAction.subcategory.toUpperCase()}
        </button>
      </div>
      <div className="mt-4 px-5 pb-5">
        <p className="font-bold text-xl">{crowdAction.title}</p>
        <p className="mt-4 text-primary-300 text-sm leading-6">
          {crowdAction.description.length > 175
            ? `${crowdAction.description.substring(0, 175)}...`
            : crowdAction.description}
        </p>
      </div>
      <div className="py-5 px-5 flex justify-center absolute bottom-0 left-0 right-0">
        <button className="font-bold text-collaction rounded-full w-full border-2 border-collaction-400 py-3 px-4 text-[12px]">
          Read More
        </button>
      </div>
    </div>
  );
}
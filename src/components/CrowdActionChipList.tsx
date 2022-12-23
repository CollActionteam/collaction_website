import CrowdActionChip from './CrowdActionChip';

interface CrowdActionChipListProps {
  status: string;
  joinStatus: string;
  onWhite?: boolean;
  category: string;
  subcategory: string;
}

export default function CrowdActionChipList({
  status,
  joinStatus,
  onWhite = true,
  category,
  subcategory,
}: CrowdActionChipListProps) {
  return (
    <div className="flex space-x-2 mt-4 px-5">
      <CrowdActionChip
        isPrimary={true}
        text={
          joinStatus == 'OPEN'
            ? 'Now open'
            : status == 'STARTED'
            ? 'Currently running'
            : status == 'WAITING'
            ? 'Starting soon'
            : 'Finished'
        }
      ></CrowdActionChip>
      <CrowdActionChip text={category} onWhite={onWhite}></CrowdActionChip>
      <CrowdActionChip text={subcategory} onWhite={onWhite}></CrowdActionChip>
    </div>
  );
}

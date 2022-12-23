import clsx from 'clsx';

interface CrowdActionChipProps {
  isPrimary?: boolean;
  onWhite?: boolean;
  text: string;
}

export default function CrowdActionChip({
  isPrimary = false,
  onWhite = true,
  text,
}: CrowdActionChipProps) {
  return (
    <div
      className={clsx(
        'font-semibold text-[10px] rounded-full border-2 px-3',
        isPrimary
          ? 'border-collaction bg-collaction text-white'
          : onWhite
          ? 'border-primary-0 text-black'
          : 'border-primary-100 text-black'
      )}
    >
      {text}
    </div>
  );
}

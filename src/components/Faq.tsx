import { FiPlus as Plus } from 'react-icons/fi';

export default function Faq() {
  return (
    <div
      className="flex items-center w-full h-full gap-2.5
  py-6 px-3 bg-primary-0 rounded-[10px]"
    >
      <p className="w-[292px] h-[24px] font-light text-body-long-1 text-primary-400">
        This is a question?
      </p>
      <Plus className="w-[24px] h-[24px]" />
    </div>
  );
}

import { UspsType } from 'src/types/usps';
import Image from 'next/image';

export function UspCard({
  title,
  icon,
  content,
}: Omit<UspsType, 'publish' | 'featured'>) {
  return (
    <div className="bg-primary-0 max-w-400 w-full rounded-1 overflow-hidden relative mb-7 md:mx-5">
      <div className="pb-6 sm:pb-7">
        {/* ICON */}
        <div className="px-6 xs:px-7 sm:px-8 py-6 flex">
          <a
            target="_blank"
            rel="noreferrer"
            className="bg-primary-400 text-secondary p-3 mr-3 xs:mr-5 rounded-full"
          >
            <Image
              src={icon}
              alt=""
              className="object-cover"
              sizes="min-width(450px) 90vw, 400px"
              width={64}
              height={64}
            />
          </a>
        </div>
        {/* TITLE & CONTENT */}
        <div className="px-6 xs:px-7 sm:px-8 mb-6 sm:mb-7">
          <h4 className="text-primary-400 mb-5 sm:mb-7">{title}</h4>
          <div className="text-primary-300 h-full max-h-32 line-clamp-5 whitespace-pre-line">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { FiPlus as PlusIcon, FiX as XIcon } from 'react-icons/fi';

export function WestlandCard({
  title,
  image,
  content,
  submitPhotoName,
  submitPhotoUrl,
}: {
  title: string;
  image: string;
  content: string;
  submitPhotoName: string;
  submitPhotoUrl: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [showContent, setShowContent] = useState(false);
  const [contentOverflow, setContentOverflow] = useState(true);

  // used to check if text content is overflowing it's container
  // if so, we'll show an expand button
  // saves valuable space on one column layouts
  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      setContentOverflow(contentEl.scrollHeight - contentEl.clientHeight > 5);
    }
  }, []);

  return (
    <div className="bg-secondary max-w-400 w-full rounded-1 overflow-hidden relative mb-7 md:mx-5">
      {/* IMAGE */}
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <Image
          src={image}
          alt={title}
          // placeholder="blur"
          fill={true}
          className="object-cover"
          sizes="min-width(450px) 90vw, 400px"
        />
      </div>
      {/* ICONS */}
      <div className="px-6 xs:px-7 sm:px-8 my-6 sm:my-7 h-8 flex">
        <a
          href={submitPhotoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Order From Vendor"
          className={clsx(
            'bg-collaction text-secondary',
            'text-button font-bold leading-none text-center rounded-full p-4 align-top'
          )}
        >
          {/* Submit your photo */}
          {submitPhotoName}
        </a>
      </div>
      {/* TITLE & CONTENT */}
      <div className="px-6 xs:px-7 sm:px-8">
        <h4 className="text-primary-400 mb-5 sm:mb-7">{title}</h4>
        <div
          ref={contentRef}
          className="text-primary-300 h-full max-h-32 line-clamp-5 whitespace-pre-line"
        >
          {content}
        </div>
      </div>
      {/* MAXIMIZE CONTENT ICON */}
      <div className="py-6 sm:py-7 pl-7 pr-5 sm:pl-8 sm:pr-7 text-right">
        {contentOverflow && (
          <button
            onClick={() => setShowContent(true)}
            className="inline-block bg-primary-100 text-secondary p-3 rounded-full"
          >
            <PlusIcon size={24} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* OPENED CARD */}
      {contentOverflow && (
        <div
          className={clsx(
            'absolute top-0 left-0 w-full h-full bg-collaction text-secondary rounded-1 transition-opacity',
            showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          style={{
            transitionDuration: '300ms',
            transitionTimingFunction: 'cubic-bezier(0,0,0.58,1)',
          }}
        >
          <div className="flex flex-col justify-between h-full">
            {/* TITLE & CONTENT */}
            <div className="overflow-auto px-7 sm:px-8 pt-7 flex flex-col">
              <h5 className="text-title-3 mb-6 sm:mb-7">{title}</h5>
              <div className="overflow-y-scroll scrollbar-track-collaction-500 scrollbar-thumb-secondary whitespace-pre-line">
                {content}
              </div>
            </div>
            {/* MINIMIZE CONTENT ICON */}
            <div className="py-6 sm:py-7 pl-7 pr-5 sm:pl-8 sm:pr-7 text-right shrink-0">
              <button
                onClick={() => setShowContent(false)}
                className="inline-block bg-secondary text-primary-100 p-3 rounded-full"
              >
                <XIcon size={24} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

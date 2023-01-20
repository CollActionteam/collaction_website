import clsx from 'clsx';

type QuoteTypes = {
  isSecondaryBg?: boolean;
  hasBg?: boolean;
  quote: string;
  name: string;
  position: string;
  className?: string;
};

export default function Quote({
  isSecondaryBg = false,
  hasBg = true,
  quote,
  name,
  position,
  className,
}: QuoteTypes) {
  return (
    <div
      className={clsx(
        hasBg ? (isSecondaryBg ? 'bg-secondary' : 'bg-primary-0') : 'bg-white'
      )}
    >
      <div className={clsx('text-center', 'py-5 px-5', className)}>
        <div>
          <h3
            className={clsx(
              'text-headline-m-1 mt-10 mb-10',
              'text-primary-400 mx-auto w-4/5'
              // body ? 'mb-6' : 'mb-9'
              // body ? 'mb-3' : 'mb-6'
            )}
          >
            {quote}
          </h3>
          <p className={clsx('text-body-long-1 mb-3', 'text-primary-400')}>
            <strong>{name}</strong>
          </p>

          <p className={clsx('text-body-long-1 mb-10', 'text-primary-300')}>
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}

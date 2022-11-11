import clsx from 'clsx';

type InfoCardTypes = {
  isSecondaryBg?: boolean;
  hasBg?: boolean;
  leftAlign?: boolean;
  title: string;
  body?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function InfoCard({
  isSecondaryBg,
  hasBg = true,
  leftAlign = false,
  title,
  body,
  children,
  className,
}: InfoCardTypes) {
  return (
    <div
      className={clsx(
        hasBg ? (isSecondaryBg ? 'bg-collaction' : 'bg-primary-0') : '',
        'p-6 mx-auto rounded-1',
        'w-full md:w-3/4 max-w-350 sm:max-w-400 lg:max-w-600',
        'mb-6',
        leftAlign ? 'text-left' : 'text-center',
        className
      )}
    >
      <div>
        <h3
          className={clsx(
            'text-headline-m-1',
            isSecondaryBg ? 'text-secondary mt-9' : 'text-primary-400 mt-6',
            body ? 'mb-6' : 'mb-9'
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            'text-body-long-1',
            isSecondaryBg ? 'text-secondary' : 'text-primary-200',
            body ? 'block' : 'none',
            'mb-9'
          )}
        >
          {body}
        </p>
      </div>
      {children}
    </div>
  );
}

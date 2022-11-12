import clsx from 'clsx';

type InfoCardTypes = {
  isSecondaryBg?: boolean;
  hasBg?: boolean;
  leftAlign?: boolean;
  title: string;
  body?: string | JSX.Element;
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
        'mx-auto rounded-1',
        'w-full md:w-3/4 max-w-350 sm:max-w-400 lg:max-w-600',
        'py-8 px-8',
        leftAlign ? 'text-left' : 'text-center',
        className
      )}
    >
      <div>
        <h3
          className={clsx(
            'text-headline-m-1',
            isSecondaryBg ? 'text-secondary' : 'text-primary-400',
            body != null ? 'mb-6' : ''
          )}
        >
          {title}
        </h3>
        {typeof body === 'string' ? (
          <p
            className={clsx(
              'text-body-long-1 mb-6',
              isSecondaryBg ? 'text-secondary' : 'text-primary-200',
              body ? 'block' : 'none'
            )}
          >
            {body}
          </p>
        ) : (
          body
        )}
      </div>
      {children}
    </div>
  );
}

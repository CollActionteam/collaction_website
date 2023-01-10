import clsx from 'clsx';

type ContentBlockTypes = {
  isSecondaryBg?: boolean;
  hasBg?: boolean;
  leftAlign?: boolean;
  title?: string;
  body?: string | JSX.Element;
  children?: React.ReactNode;
  className?: string;
  greenHeader?: boolean;
};

export default function ContentBlock({
  isSecondaryBg = true,
  hasBg = true,
  leftAlign = true,
  title,
  body,
  children,
  className,
  greenHeader = false,
}: ContentBlockTypes) {
  return (
    <div
      className={clsx(
        hasBg ? (isSecondaryBg ? 'bg-secondary' : 'bg-primary-0') : ''
      )}
    >
      <div
        className={clsx(
          'mx-auto',
          'w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600',
          'py-5 px-5',
          leftAlign ? 'text-left' : 'text-center',
          className
        )}
      >
        <div>
          <h3
            className={clsx(
              'text-headline-m-1',
              greenHeader ? 'text-collaction' : 'text-primary-400',
              // body ? 'mb-6' : 'mb-9'
              body ? 'mb-3' : 'mb-6'
            )}
          >
            {title}
          </h3>
          {typeof body === 'string' ? (
            <p
              className={clsx(
                'text-body-long-1 mb-3',
                'text-primary-300',
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
    </div>
  );
}

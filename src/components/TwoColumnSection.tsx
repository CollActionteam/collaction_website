import clsx from 'clsx';

export interface TwoColumnSectionProps {
  isSecondaryBg?: boolean;
  isReverseOrder?: boolean;
  mobile?: JSX.Element;
  first?: JSX.Element;
  second?: JSX.Element;
  className?: string;
}

export default function TwoColumnSection(props: TwoColumnSectionProps) {
  return (
    <div
      className={clsx(
        `${
          props.isSecondaryBg
            ? props.mobile
              ? 'lg:bg-secondary'
              : 'bg-secondary' // ? 'lg:bg-secondary'
            : 'bg-primary-0'
        }`,
        props.className
      )}
    >
      {props.mobile ? (
        <div className="w-full lg:hidden">{props.mobile}</div>
      ) : (
        ''
      )}
      <div
        className={`${
          props.mobile ? 'hidden lg:grid' : 'grid'
        } grid-cols-1 lg:grid-cols-2 lg:max-w-5xl mx-auto grid-flow-col ${
          props.isSecondaryBg ? 'bg-secondary' : 'bg-primary-0'
        }`}
      >
        <div
          className={`${
            props.isReverseOrder
              ? 'hidden lg:col-start-2 lg:block'
              : 'hidden lg:col-start-1 lg:block'
          } col-span-1 w-full lg:w-[512px] h-[440px] mx-auto relative `}
        >
          {props.first}
        </div>
        <div
          className={`${
            props.isReverseOrder ? 'col-start-1' : 'col-start-1 lg:col-start-2'
          } col-span-1 w-full lg:w-[512px] h-[480px] mx-auto relative`}
        >
          {props.second}
        </div>
      </div>
    </div>
  );
}

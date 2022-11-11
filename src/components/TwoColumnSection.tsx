export interface TwoColumnSectionProps {
  isWhiteBg?: boolean;
  isReverseOrder?: boolean;
  mobile?: JSX.Element;
  first?: JSX.Element;
  second?: JSX.Element;
}

export default function TwoColumnSection(props: TwoColumnSectionProps) {
  return (
    <div
      className={`${
        props.isWhiteBg
          ? props.mobile
            ? 'lg:bg-white'
            : 'bg-white'
          : 'bg-secondary'
      }`}
    >
      {props.mobile ? (
        <div className="w-full lg:hidden">{props.mobile}</div>
      ) : (
        ''
      )}
      <div
        className={`${
          props.mobile ? 'hidden lg:grid' : 'grid'
        } grid-cols-1 lg:grid-cols-2 lg:max-w-5xl mx-auto grid-flow-col`}
      >
        <div
          className={`${
            props.isReverseOrder
              ? 'hidden lg:col-start-2 lg:block'
              : 'hidden lg:col-start-1 lg:block'
          } col-span-1 w-full lg:w-[512px] h-[512px] mx-auto relative ${
            props.isWhiteBg ? 'bg-white' : 'bg-secondary'
          }`}
        >
          {props.first}
        </div>
        <div
          className={`${
            props.isReverseOrder ? 'col-start-1' : 'col-start-1 lg:col-start-2'
          } col-span-1 w-full lg:w-[512px] h-[512px] mx-auto relative ${
            props.isWhiteBg ? 'bg-white' : 'bg-secondary'
          }`}
        >
          {props.second}
        </div>
      </div>
    </div>
  );
}

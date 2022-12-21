import React from 'react';

type ButtonProps = {
  children: string;
  customStyle: string;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>;

export default function Button({
  children,
  customStyle,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center box-border font-[500] 
      text-sm leading-[22px] h-[48px] shadow-xl ${customStyle}`}
      {...rest}
    >
      {children}
    </button>
  );
}

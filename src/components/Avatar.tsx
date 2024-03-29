import React from 'react';
import Image from 'next/image';
import { CircleFlag } from 'react-circle-flags';

interface AvatarProps {
  src: string;
  alt: string;
  linkedin_github?: string;
  role?: string;
  country?: string;
}

/* flex itemcenter*/
export default function Avatar(props: AvatarProps) {
  return (
    <div className="w-[186px] h-[196px] flex-col text-center flex justify-center items-center pb-5">
      <a href={props.linkedin_github}>
        <div className="h-20 relative">
          <Image
            src={props.src}
            className="rounded-full"
            alt={props.alt}
            role={props.alt}
            width="90"
            height="90"
          />
          <span className="bottom-[-11px] right-[-2px] absolute">
            <CircleFlag
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              countryCode={props.country}
              className="rounded-full"
              width="36px"
            />
          </span>
        </div>
      </a>

      <p className="w-[186px] pt-5 text-lg font-bold text-center leading-5">
        {props.alt}
      </p>

      <div className="w-[186px] items-center">
        <p className="pt-3 pb-3 text-sm text-center leading-5">{props.role}</p>
      </div>
    </div>
  );
}

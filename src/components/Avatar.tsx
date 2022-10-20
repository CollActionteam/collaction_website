import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  linkedin_github?: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div className="w-20 h-fit flex-col text-center flex flex-col justify-center items-center pb-5">
      <a href={props.linkedin_github}>
        <div className="h-20 overflow-hidden">
          <Image
            src={props.src}
            className="rounded-full"
            alt={props.alt}
            width="90px"
            height="90px"
          />
        </div>
      </a>
      <p className="md:w-auto sm:w-fit lg:w-fit pt-2 text-lg font-bold text-center leading-5">
        {props.alt}
      </p>

      <div className="">
        <p className="pt-3 text-sm text-center leading-5">Developer</p>
        <p className="pt-2  text-sm text-center leading-5">NL</p>
      </div>
    </div>
  );
}

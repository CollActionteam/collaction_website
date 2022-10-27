import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  linkedin_github?: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div className="min-w-186 h-fit flex-col text-center justify-center items-center pb-5">
      <a href={props.linkedin_github}>
        <div className="min-w-186 overflow-hidden">
          <Image
            src={props.src}
            className="rounded-full"
            alt={props.alt}
            width="90px"
            height="90px"
            
          />
        </div>
      </a>
      <p className="w-46 pt-2 text-lg font-bold text-center leading-5">
        {props.alt}
      </p>

      <div>
        <p className="pt-3 text-sm text-center leading-5">Developer</p>
        <p className="pt-2  text-sm text-center leading-5">NL</p>
      </div>
    </div>
  );
}

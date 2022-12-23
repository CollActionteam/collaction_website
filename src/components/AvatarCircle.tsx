import React, { useState } from 'react';
import Image from 'next/image';

import DefaultAvatar from 'public/default_avatar.png';

const staticUrl = process.env.NEXT_PUBLIC_STATIC_URL;

const AvatarCircle = (props: any) => {
  const { participant, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(`${staticUrl}${participant.avatar}`);

  return (
    <Image
      alt={participant.fullName}
      className="w-10 h-10 rounded-full outline outline-4 outline-white"
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(DefaultAvatar.src);
      }}
    />
  );
};

export default AvatarCircle;

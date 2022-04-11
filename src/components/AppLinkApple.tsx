import clsx from 'clsx';
import Image from 'next/image';
import BadgeApple from 'public/Badge-Apple.png';
import { AppLinkTypes } from 'src/types/app-link';

export default function AppLinkApple({ className }: AppLinkTypes) {
  return (
    <a
      href="https://apps.apple.com/app/id1597643827"
      aria-label="apple download badge"
      className={clsx(className)}
    >
      <Image
        src={BadgeApple}
        alt="apple download badge"
        width={143}
        height={48}
      />
    </a>
  );
}

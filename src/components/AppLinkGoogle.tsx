import clsx from 'clsx';
import Image from 'next/image';
import BadgeGoogle from 'public/Badge-Google.png';
import { AppLinkTypes } from 'src/types/app-link';

export default function AppLinkGoogle({ className }: AppLinkTypes) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=org.collaction.collaction_app"
      aria-label="google download badge"
      className={clsx(className)}
    >
      <Image
        src={BadgeGoogle}
        alt="google download badge"
        width={162}
        height={48}
      />
    </a>
  );
}

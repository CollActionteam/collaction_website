import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ThemeButton({
  href,
  children,
  className,
  type = 'rectangle',
  disabled = false,
  noBackground = false,
  fetchOnClick = false,
  onClick = (_e: any) => {
    /*action*/
  },
  onKeyDown = (_e: any) => {
    /*action*/
  },
  onKeyUp = (_e: any) => {
    /*action*/
  },
  onFetchDone = async (_response: any) => {
    /*response*/
  },
}: any) {
  const [fetchStatus, setFetchStatus] = useState(false);

  const pillFormat = `${type == 'pill' ? 'rounded-full ' : ''}`;
  const noBackgroundFormat = `${
    disabled
      ? `cursor-not-allowed${
          noBackground ? ' ' : ' bg-black-0 '
        }text-black-200 `
      : `cursor-pointer${
          noBackground ? ' text-accent-500' : ' bg-accent-500 text-secondary'
        }`
  }`;

  function onClickInternal(e: any) {
    if (disabled) return;
    if (fetchOnClick) {
      setFetchStatus(true);
      fetch(href).then(res => {
        setFetchStatus(false);
        onFetchDone(res);
      });
    }
    onClick(e);
  }

  const content = (
    <a
      className={twMerge(
        'px-5 py-3 flex items-center justify-center font-sans font-bold text-button',
        pillFormat,
        noBackgroundFormat,
        className
      )}
      role="button"
      onClick={onClickInternal}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      {fetchOnClick && fetchStatus ? (
        <>
          <svg
            width="26"
            height="26"
            viewBox="0 0 44.6 44.6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0V4C31.9411 4 40 12.0589 40 22C40 31.9411 31.9411 40 22 40C12.0589 40 4 31.9411 4 22H0C0 34.1503 9.84974 44 22 44Z"
              fill="currentColor"
            />
            <mask
              id="mask0_659_4098"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="25"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0V4C31.9411 4 40 12.0589 40 22C40 31.9411 31.9411 40 22 40C12.0589 40 4 31.9411 4 22H0C0 34.1503 9.84974 44 22 44Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_659_4098)"></g>
          </svg>
        </>
      ) : (
        children
      )}
    </a>
  );

  if (disabled || fetchOnClick) {
    return content;
  } else {
    return <Link href={href}>{content}</Link>;
  }
}

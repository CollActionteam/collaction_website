import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo, NextSeoProps } from 'next-seo';

type Props = NextSeoProps & {
  children?: React.ReactNode;
};

const baseUrl = 'https://www.collaction.org';

export default function PageSEO({ children, ...seoProps }: Props) {
  const { asPath } = useRouter();

  const { openGraph, ...rest } = seoProps;

  return (
    <>
      <NextSeo
        {...rest}
        openGraph={{
          url: baseUrl + asPath,
          ...openGraph,
        }}
      />

      {children && children}
    </>
  );
}

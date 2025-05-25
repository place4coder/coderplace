import '@coderplace/style/global';

import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';

import { METADATA } from '~/constants';

export const metadata: Metadata = {
  title: METADATA.SITE.TITLE,
  description: METADATA.SITE.DESCRIPTION,
  keywords: METADATA.SITE.KEYWORDS,
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value ?? 'en';

  return (
    <html lang={lang}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-jp-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

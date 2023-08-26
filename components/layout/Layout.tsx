import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';
import { Footer } from '../ui/Footer';

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
  imageUrl?: string;
}

export const Layout: FC<Props> = ({ title, description, children, imageUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* OG meta tags */}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={imageUrl ? imageUrl : '/logo'} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={typeof window !== 'undefined' ? window.location.href : ''} />
      </Head>
      <Navbar />
      <main className='overflow-x-hidden overflow-y-hidden'>{children}</main>
      <Footer />
    </>
  );
};

import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';
import { Footer } from '../ui/Footer';

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
}

export const Layout: FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='overflow-x-hidden overflow-y-hidden'>{children}</main>
      <Footer />
    </>
  );
};

import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';
import { Footer } from '../ui/Footer';
import { Whatsapp } from '../ui/Whatsapp';

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
  imageUrl?: string;
  lang?: string;
}

export const Layout: FC<Props> = ({ title, description, children, imageUrl, lang = 'es' }) => {
  const keywords =
    lang === 'es'
      ? 'Nazca Travel, Agencia de viajes, Islas Galápagos, turismo en Galápagos, viajes a Galápagos, paquetes turísticos Galápagos, excursiones en Galápagos, tours de aventura Galápagos, experiencias Galápagos, naturaleza Galápagos, guías turísticas Galápagos, destinos populares Galápagos, viajes de lujo Galápagos, viajes familiares Galápagos, vacaciones en Galápagos, agencia de viajes de confianza, turismo sostenible Galápagos, explorar Galápagos'
      : 'Nazca Travel, Travel agency, Galapagos Islands, tourism in Galapagos, trips to Galapagos, Galapagos tour packages, excursions in Galapagos, adventure tours Galapagos, Galapagos experiences, nature Galapagos, tourist guides Galapagos, popular destinations Galapagos, luxury trips Galapagos, family trips Galapagos, holidays in Galapagos, trusted travel agency, sustainable tourism Galapagos, explore Galapagos';

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel='icon' href='/images/logo-bird.png' type='image/png'></link>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name='keywords' content={keywords}></meta>

        {/* OG meta tags */}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={imageUrl ? imageUrl : 'https://nazcatravelgps.com/images/logo-bird.png'} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={typeof window !== 'undefined' ? window.location.href : ''} />
      </Head>
      <Navbar />
      <main className='overflow-x-hidden overflow-y-hidden'>{children}</main>
      <Whatsapp />
      <Footer />
    </>
  );
};

import { Layout } from '@/components/layout';
import { Slider } from '@/components/shared';
import ReserveTour from '@/components/tour/ReserveTour';
import { ITour } from '@/interfaces';
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticPathsContext, GetStaticPropsContext, NextPage } from 'next';
import { FC } from 'react';

import parse from 'html-react-parser';
import { useTranslations } from 'next-intl';

import { FaWhatsapp } from 'react-icons/fa6';
import { SliderCoverFlow } from '@/components/shared/SliderCoverFlow';

interface Props {
  tour: ITour;
}

const TourPage: NextPage<Props> = ({ tour }) => {
  const listStyle = {
    paddingLeft: '1rem',
    listStyleType: 'disc',
  };

  const html = `
  <div class="App" style="text-align: center;">
    <h1>html-react-parser</h1>
    <p>
      <a
        href="https://github.com/remarkablemark/html-react-parser"
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub repository
      </a>
    </p>
    <hr class="remove">
  </div>
`;

  const options = {
    replace: (domNode: any) => {
      if (domNode.attribs && domNode.attribs.class === 'remove') {
        return <></>;
      }
    },
  };

  const t = useTranslations('tours');

  return (
    <Layout title={tour.title} description={tour.shortDescription}>
      <div className='max-w-screen-2xl mx-auto min-h-screen mt-16'>
        <div className='grid grid-cols-5'>
          <div className='md:relative col-span-3'>
            <Slider images={tour.images} />
            {/* <SliderCoverFlow /> */}
            {/* <ReserveTour tour={tour} /> */}
          </div>
          <div className='pt-4 mb-7 col-span-2'>
            <p className='text-center text-xl font-semibold py-2'>{tour.title}</p>
            <div style={listStyle} dangerouslySetInnerHTML={{ __html: tour.body || '' }} />
            {/* {parse(tour.body || '', options)} */}
            <div className='flex justify-center'>
              <a
                className='flex justify-center items-center bg-blue-500 text-white px-2 py-1 rounded-md text-lg'
                href={`https://api.whatsapp.com/send?phone=593989399841&text=${t('text_message')}${tour.title}`}
                target='_blank'
              >
                {t('more')}
                <FaWhatsapp className='ml-3 h-7 w-7' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, params }: GetServerSidePropsContext) => {
  const { slug = '' } = params as { slug: string };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/tours/${slug}`);

  const tour: ITour = await res.json();

  if (!tour) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
      tour,
    },
  };
};

export default TourPage;

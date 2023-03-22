import { Layout } from '@/components/layout';
import { AboutUsCard } from '@/components/pages/aboutUs';
import { BackGroundImage } from '@/components/shared';
import { navButtom } from '@/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const AboutUsPage: NextPage = () => {
  const navButtoms: navButtom[] = [
    {
      title: 'Contactanos',
      url: '/contact',
    },
  ];

  return (
    <Layout title={'Nazca Travel | Nosotros'} description={''}>
      <div className='min-h-screen'>
        <div className='grid sm:grid-cols-3 max-w-5xl mx-auto pt-12'>
          <div className='sm:col-span-1'>
            <div className='relative w-full h-96 sm:translate-y-12 sm:shadow-2xl'>
              <Image
                src={
                  'https://res.cloudinary.com/dbpb5pque/image/upload/v1679343065/computer-2846160_1280_ahjvjs.jpg'
                }
                alt={''}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className='sm:col-span-2 px-8'>
            <h1 className='text-3xl font-semibold pt-4 text-center sm:text-left sm:pt-20'>
              Sobre nosotros
            </h1>
            <p className='text-gray-800 text-lg pb-6 sm:pb-0 pt-5 sm:pt-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              facere maxime illum aliquid dignissimos optio! Repudiandae vitae
              cumque culpa aliquam exercitationem, nisi quae, voluptatum ea ad
              neque quos deserunt alias!
            </p>
          </div>
        </div>
        <div className='bg-sky-100 py-16'>
          <div className='max-w-6xl mx-auto'>
            <h1 className='text-center text-3xl font-semibold pb-5'>
              Nuestros valores
            </h1>
            <div className='grid md:grid-cols-3 mx-4 gap-4'>
              <AboutUsCard
                title={'1'}
                subTitle={'Responsabilidad'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, sed sint quos nihil quae dolorum consequatur aut nobis laudantium repudiandae autem odit odio nulla neque ad tenetur quibusdam ab nesciunt!'
                }
              />
              <AboutUsCard
                title={'2'}
                subTitle={'Honestidad'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, sed sint quos nihil quae dolorum consequatur aut nobis laudantium repudiandae autem odit odio nulla neque ad tenetur quibusdam ab nesciunt!'
                }
              />
              <AboutUsCard
                title={'3'}
                subTitle={'Respeto'}
                text={
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, sed sint quos nihil quae dolorum consequatur aut nobis laudantium repudiandae autem odit odio nulla neque ad tenetur quibusdam ab nesciunt!'
                }
              />
            </div>
          </div>
        </div>
        <div className='bg-white'>
          <div className='grid sm:grid-cols-2 max-w-6xl mx-auto py-10 sm:py-20 gap-6'>
            <div className='mx-4'>
              <h1 className='text-center text-3xl font-semibold pb-1'>
                Nuestra vision
              </h1>
              <p className='text-gray-800 text-lg text-justify'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia tempora qui, nisi iure natus nobis esse, aliquam aut
                officiis dolorem quas rem distinctio laboriosam commodi, modi
                ipsam sed? Eius, facere.
              </p>
            </div>
            <div className='mx-4'>
              <h1 className='text-center text-3xl font-semibold pb-1'>
                Nuestra vision
              </h1>
              <p className='text-gray-800 text-lg text-justify'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia tempora qui, nisi iure natus nobis esse, aliquam aut
                officiis dolorem quas rem distinctio laboriosam commodi, modi
                ipsam sed? Eius, facere.
              </p>
            </div>
          </div>
        </div>

        <BackGroundImage
          imgUrl={
            'https://cdn.pixabay.com/photo/2022/12/06/11/31/trees-7638777_1280.jpg'
          }
          text={'Comunicate con nosotros y resolveremos tus dudas'}
          imgPosition={'center'}
          navButtoms={navButtoms}
        />

        {/* <div className='w-full h-100v md:h-80v max-w-screen-2xl mx-auto  flex items-center justify-center relative'>
          <Image
            src={
              'https://cdn.pixabay.com/photo/2022/12/06/11/31/trees-7638777_1280.jpg'
            }
            alt={''}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
          <div className='max-w-3xl absolute'>
            <h1 className='text-white text-center text-5xl mb-9'>
              Comunicate con nosotros y resolveremos tus dudas
            </h1>
            <div className='flex justify-center'>
              <Link
                href='/contact'
                className='bg-white text-xl py-3 px-3 rounded-md transition  hover:text-blue-500'
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default AboutUsPage;

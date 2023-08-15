import { Layout } from '@/components/layout';
import { ContactForm } from '@/components/pages/contact';
import { BackGroundImage } from '@/components/shared';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { GetStaticPropsContext, NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <Layout title={'Nazca Travel | Contacto'} description={''}>
      <BackGroundImage
        imgUrl={'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg'}
        text={'Contactáctanos'}
        imgPosition={'top'}
        isImageAtTop
      />
      <div className='max-w-4xl mx-auto mb-16'>
        <h1 className='text-2xl text-gray-800 text-center font-semibold py-10 px-4 sm:px-0' data-aos='fade-up'>
          Envianos un mensaje y con gusto uno de nuestros agentes te responderá
        </h1>
        <div className='grid sm:grid-cols-12 border mb-10 mx-4' data-aos='fade-down'>
          {/* TODO:Contado */}
          <div className='bg-blue-500 sm:col-span-4 text-white p-6 flex flex-col gap-4'>
            <p className='text-center text-xl font-semibold'>Información de Contacto</p>
            <p className='text-center text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <div className='flex justify-center items-center gap-2'>
              <PhoneIcon className='h-5' />
              <p className='text-center text-sm font-medium'>+593 96 789 7586</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <EnvelopeIcon className='h-5' />
              <p className='text-center text-sm font-medium'>mafer.0199@gmail.com</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <MapPinIcon className='h-5' />
              <p className='text-center text-sm font-medium'>Ciudadela el maestro Km 1/2</p>
            </div>
          </div>
          <div className='sm:col-span-8'>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default ContactPage;

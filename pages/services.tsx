import { Layout } from '@/components/layout';
import { NextPage } from 'next';
import { BackGroundImage } from '@/components/shared';

const ServicesPage: NextPage = () => {
  return (
    <Layout title={'Nazca Travel | Servicios'} description={''}>
      <BackGroundImage
        imgUrl={
          'https://cdn.pixabay.com/photo/2015/08/18/16/39/galapagos-islands-894462_1280.jpg'
        }
        text={'Nuestros Servicios'}
        isImageAtTop
      />
    </Layout>
  );
};

export default ServicesPage;

import { Layout } from '@/components/layout';
import { BackGroundImage } from '@/components/shared';
import { NextPage } from 'next';

const ToursPage: NextPage = () => {
  return (
    <Layout title={'Nazca Travel | Tours'} description={''}>
      <BackGroundImage
        imgUrl={
          'https://cdn.pixabay.com/photo/2018/12/02/16/17/beach-3851535_1280.jpg'
        }
        text={'Nuestros Tours'}
        isImageAtTop
      />
    </Layout>
  );
};

export default ToursPage;

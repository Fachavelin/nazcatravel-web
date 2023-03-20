import { Layout } from '@/components/layout';
import { NextPage } from 'next';
import Image from 'next/image';

const NotFoundPage: NextPage = () => {
  return (
    <Layout title={'Página no econtrada'} description={'Página no encontrada'}>
      <div className='h-80v flex items-center justify-center'>
        <div>
          <h1 className='text-3xl font-semibold text-gray-800 pt-20 text-center'>
            Error 404 | Página no encontrada
          </h1>
          <div className='flex justify-center'>
            <div className='h-96 w-96 relative'>
              <Image src={'404.svg'} alt={'Not found'} fill />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

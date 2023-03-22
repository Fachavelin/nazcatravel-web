import { FC } from 'react';
import { BackGroundImage } from '@/components/shared';
import { navButtom } from '@/interfaces';

export const Hero: FC = () => {
  const navButtoms: navButtom[] = [
    {
      title: 'Nuestros paquetes',
      url: '/tours',
    },
    {
      title: 'Nuestros Servicios',
      url: '/services',
    },
  ];
  return (
    <BackGroundImage
      imgUrl={
        'https://res.cloudinary.com/dbpb5pque/image/upload/v1679273034/mountain-7690893_1920_wlvx3a.jpg'
      }
      text={'Explora las maravillas de las Islas Galápagos con nosotros'}
      navButtoms={navButtoms}
    />
  );
};

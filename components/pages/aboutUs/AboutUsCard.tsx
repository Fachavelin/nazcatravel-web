import { FC } from 'react';

interface Props {
  title: string;
  subTitle: string;
  text: string;
  dataAosDuration?: number;
}

export const AboutUsCard: FC<Props> = ({
  title,
  subTitle,
  text,
  dataAosDuration = 1000,
}) => {
  return (
    <div
      className='bg-white p-4 rounded-lg shadow-2xl'
      data-aos='fade-down'
      data-aos-duration={dataAosDuration}
    >
      <p className='text-center text-4xl font-bold text-gray-800'>{title}</p>
      <p className='text-center text-2xl font-semibold'>{subTitle}</p>
      <p className='text-justify text-sm text-gray-800'>{text}</p>
    </div>
  );
};

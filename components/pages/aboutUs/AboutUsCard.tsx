import { FC } from 'react';

interface Props {
  title: string;
  subTitle: string;
  text: string;
}

export const AboutUsCard: FC<Props> = ({ title, subTitle, text }) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-2xl'>
      <p className='text-center text-4xl font-bold text-gray-800'>{title}</p>
      <p className='text-center text-2xl font-semibold'>{subTitle}</p>
      <p className='text-justify text-sm text-gray-800'>{text}</p>
    </div>
  );
};

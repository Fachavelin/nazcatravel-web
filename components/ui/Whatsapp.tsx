import { FC, MouseEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export const Whatsapp: FC = () => {
  const text = '';

  const redirectToWhatsapp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let link = document.createElement('a');
    link.setAttribute('href', 'https://api.whatsapp.com/send?phone=593989399841');
    link.setAttribute('target', '_blank');
    link.click();
  };

  return (
    <button
      onClick={redirectToWhatsapp}
      className='fixed rounded-full transition z-40 cursor-pointer right-5 bottom-5 
       p-0.5 bg-[#25D366] text-[#fff] heart animate-bounce'
    >
      <FaWhatsapp className='h-14 w-14' />
    </button>
  );
};

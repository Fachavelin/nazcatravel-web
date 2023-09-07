import { FC } from 'react';
import { ITour } from '@/interfaces';

interface Props {
  tour: ITour;
}

const ReserveTour: FC<Props> = ({ tour }) => {
  return (
    <div className='md:absolute bottom-0 w-full mb-8'>
      <div className='m-4 p-4 border shadow-blue-100 shadow-2xl rounded-xl'>
        <p>Reserva este tour con nosostros!</p>
        <div className='flex justify-between mb-2'>
          <p>Precio:</p>
          <p className='font-bold'>{tour.price}$</p>
        </div>

        <div className='flex justify-between mb-2'>
          <p>Fecha:</p>
          <input type='date' />
        </div>
        <div className='flex justify-between mb-2'>
          <p>N de pasajeros:</p>

          <input type='number' />
        </div>
        <div className='flex justify-end'>
          <button className='bg-blue-500 py-1 px-2 text-white rounded-md'>Reservar</button>
        </div>
      </div>
    </div>
  );
};

export default ReserveTour;

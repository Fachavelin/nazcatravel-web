import { Formik, Form, Field } from 'formik';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

interface formValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: FC = () => {
  const initialValues: formValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const t = useTranslations('contact');

  return (
    <div className='w-full'>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          console.log('submit');
        }}
      >
        <Form>
          <div className='p-6'>
            <div className='grid'>
              <label>{t('name')}</label>
              <Field
                className='border-b-2 bg-slate-100 border-blue-200 focus:border-blue-300 focus:outline-none py-1 px-2 text-gray-800'
                name='name'
                type='text'
              />
            </div>
            <div className='grid'>
              <label>{t('email')}</label>
              <Field
                className='border-b-2 bg-slate-100 border-blue-200 focus:border-blue-300 focus:outline-none py-1 px-2 text-gray-800'
                name='email'
                type='email'
              />
            </div>
            <div className='grid'>
              <label>{t('phone')}</label>
              <Field
                className='border-b-2 bg-slate-100 border-blue-200 focus:border-blue-300 focus:outline-none py-1 px-2 text-gray-800'
                name='phone'
                type='text'
              />
            </div>
            <div className='grid'>
              <label>{t('message')}</label>
              <Field
                className='border-b-2 bg-slate-100 border-blue-200 focus:border-blue-300 focus:outline-none py-1 px-2 text-gray-800'
                name='message'
                type='textarea'
                rows='10'
              />
            </div>
            <div className='grid pt-2'>
              <button
                type='submit'
                className='bg-gradient-to-t bg-blue-500 hover:bg-blue-600 hover:shadow-blue-600 shadow-2xl transition py-2 rounded-md text-white font-semibold'
              >
                {t('send_message')}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

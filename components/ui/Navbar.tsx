import { FC, useState } from 'react';
import { XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Field, Formik, Form } from 'formik';
import { Router, useRouter } from 'next/router';

export const Navbar: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const t = useTranslations('Navbar');

  const linkValues = [
    {
      title: t('index'),
      url: '/',
    },
    {
      title: t('about_us'),
      url: '/about-us',
    },
    {
      title: t('contact'),
      url: '/contact',
    },
    {
      title: t('tours'),
      url: '/tours',
    },
    {
      title: t('services'),
      url: '/services',
    },
  ];

  const router = useRouter();

  const defaultLocale = useLocale();

  const locales = [
    {
      name: 'Es',
      value: 'es',
    },
    {
      name: 'En',
      value: 'en',
    },
  ];

  console.log(defaultLocale);

  return (
    <nav className=' w-full bg-white shadow fixed z-50'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Image src='/logo.png' alt={''} width={220} height={220} />
          </div>
          <div className='hidden md:ml-6 md:flex md:items-center md:justify-end w-full'>
            {linkValues.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className='text-sm font-semibold text-blue-500 hover:text-blue-600 transition px-3 py-2 rounded-md'
              >
                {item.title}
              </Link>
            ))}
            <Formik
              initialValues={{ locale: defaultLocale }}
              onSubmit={({ locale }) => {
                router.push(router.asPath, router.asPath, { locale: locale });
                //router.push(`${locale}${router.asPath}`, `${locale}${router.asPath}`, { locale: false });
              }}
            >
              {({ handleSubmit, handleChange }) => (
                <Form>
                  <Field
                    as='select'
                    name='locale'
                    defaultValue={defaultLocale}
                    onChange={(e: any) => {
                      handleChange(e);
                      handleSubmit();
                    }}
                  >
                    {locales.map((l) => (
                      <option key={l.value} value={l.value} className='capitalize'>
                        {l.name}
                      </option>
                    ))}
                  </Field>
                </Form>
              )}
            </Formik>
          </div>
          <div className='flex md:hidden'>
            <button
              type='button'
              onClick={toggleMobileNav}
              className='my-3 inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-blue-600 hover:scale-105 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500'
              aria-controls='mobile-menu'
              aria-expanded={isMobileNavOpen}
            >
              <span className='sr-only'>Open main menu</span>
              {isMobileNavOpen ? (
                <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Bars3BottomLeftIcon className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
        {isMobileNavOpen && (
          <div className='md:hidden' id='mobile-menu'>
            <div className='pt-2 pb-3 space-y-1'>
              {linkValues.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className='text-base font-bold text-blue-500 hover:text-blue-600 transition block px-3 py-2 rounded-md'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

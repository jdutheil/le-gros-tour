'use client';

import Crowdfunding from '@/components/crowdfunding';
import Edito from '@/components/edito';
import TourDates from '@/components/tour-dates';
import { tourDates } from '@/config/tourDates2024';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const caveat = Caveat({ subsets: ['latin'] });

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='flex min-h-screen flex-col items-center'>
        <Image
          src='/couv-img.jpg'
          alt='Le Grôs Tour'
          width={1920}
          height={1080}
          className='w-full animate-descend'
        />

        <Image
          src='/logo.png'
          alt='Le Grôs Tour - Collectif Festif'
          width={1400}
          height={1400}
          className='w-1/2 h-auto absolute top-[65%] left-[50%] md:w-[500px] md:top-[50%] -translate-x-[50%] -translate-y-[50%] animate-spin-descend'
        />

        <div
          className={`fixed bottom-10 left-1/2 -translate-x-1/2 ${
            !hasScrolled ? 'animate-blink' : 'hidden'
          } transition-opacity duration-300 ease-in-out ${
            hasScrolled ? '' : 'opacity-0'
          }`}
          style={{
            animationDelay: '3s',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            className='h-8 w-8 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </div>

      <div className='md:container md:mx-auto md:mt-12'>
        <Edito />

        <Image
          src='/tour-dates.jpg'
          alt='Le Grôs Tour en concert'
          className='my-20 w-full h-auto'
          width={1392}
          height={906}
        />

        <div className='mt-12'>
          <h2
            className={`text-3xl md:text-5xl font-bold text-center ${caveat.className}`}
          >
            La Grôsse Tournée
          </h2>

          <TourDates tourDates={tourDates} />
        </div>

        <div className='mt-8'>
          <h2
            className={`text-3xl md:text-5xl font-bold text-center ${caveat.className}`}
          >
            Le Grôs Album
          </h2>

          <p className='text-md px-4 text-justify md:text-center mt-4'>
            En 2024, Le Grôs Tour enregistre son premier album,{' '}
            <strong>en live</strong> ! Comme un résumé de cette belle tournée,
            le disque sera disponible à l&apos;automne 2024. <br />
            Pour mener à bien ce projet, nous avons besoin de votre soutien ;
            rendez-vous sur la page Ulule ci-dessous pour plus
            d&apos;informations !
          </p>

          <Crowdfunding />
        </div>

        <div className='mt-8 '>
          <h2
            className={`text-3xl md:text-5xl font-bold text-center ${caveat.className}`}
          >
            Les Grôs Contacts
          </h2>

          <div className='md:flex md:flex-row md:gap-6 md:justify-center md:items-center'>
            <p className='text-md px-4 text-justify md:text-center mt-4 '>
              <strong>Booking : </strong> Jérémy Dutheil <br />
              jeremy@jeremy-dutheil.fr <br />
              06 85 38 22 16
            </p>

            <p className='text-md px-4 text-justify md:text-center mt-4'>
              <strong>Production : </strong> Bruno Derpmann <br />
              b.derpmann@gmail.com <br />
              06 62 37 73 73
            </p>

            <p className='text-md px-4 text-justify md:text-center mt-4'>
              <strong>Technique : </strong> Simon Cremel <br />
              simon.cremel@gmail.com <br />
              06 27 35 43 54
            </p>
          </div>
        </div>

        <div className='flex flex-row gap-4 justify-center mt-8'>
          <SocialIcon url='https://www.facebook.com/legrostour' />
          <SocialIcon url='https://www.instagram.com/le.gros.tour/' />
          <SocialIcon url='https://www.youtube.com/@legrostourbandorganise6229' />
        </div>

        <div className='mt-8 mb-4 flex flex-row gap-4 items-center justify-center'>
          <Image
            src='/trivial-tango.png'
            alt='Trivial Tango'
            width={100}
            height={100}
          />

          <Image src='/adami.png' alt='Adami' width={100} height={50} />
        </div>
      </div>
    </>
  );
}

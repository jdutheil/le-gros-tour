import Crowdfunding from '@/components/crowdfunding';
import TourDates from '@/components/tour-dates';
import { tourDates } from '@/config/tourDates2024';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='flex min-h-screen flex-col items-center'>
        <Image
          src='/couv-img.jpg'
          alt='Le Grôs Tour'
          width={1920}
          height={1080}
          className='w-full'
        />

        <Image
          src='/logo.png'
          alt='Le Grôs Tour - Collectif Festif'
          width={1400}
          height={1400}
          className='w-1/2 h-auto absolute top-[65%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
        />
      </div>

      <div>
        <h2 className='text-2xl font-bold text-center'>
          Collectif festif de chanteurs musiciens lorrains
        </h2>

        <p className='text-md px-4 text-justify mt-4'>
          Imaginez un savant mélange des artistes suivants : Les Garçons
          Trottoirs, Alex Toucourt, David Vincent, Julien m’a dit, La P’tite
          Sœur, La French Vapeur et La Casa Bancale. Dix trublions qui, tout
          naturellement, réarrangent et jouent sur scène les morceaux de chaque
          groupe dans des versions inédites dans un seul but : vous donner du
          plaisir. <br />
          Accrochez vous bien, ça va envoyer du Grôs !
        </p>
      </div>

      <Image
        src='/tour-dates.jpg'
        alt='Le Grôs Tour en concert'
        className='my-20 w-full h-auto'
        width={1392}
        height={906}
      />

      <div className='mt-12'>
        <h2 className='text-2xl font-bold text-center'>La Grôsse Tournée</h2>

        <TourDates tourDates={tourDates} />
      </div>

      <div className='mt-8'>
        <h2 className='text-2xl font-bold text-center'>Le Grôs Album</h2>

        <p className='text-md px-4 text-justify mt-4'>
          En 2024, Le Grôs Tour enregistre son premier album,{' '}
          <strong>en live</strong> ! Comme un résumé de cette belle tournée, le
          disque sera disponible à l&apos;automne 2024. <br />
          Pour mener à bien ce projet, nous avons besoin de votre soutien ;
          rendez-vous sur la page Ulule ci-dessous pour plus d&apos;informations
          !
        </p>

        <Crowdfunding />
      </div>

      <div className='mt-8'>
        <h2 className='text-2xl font-bold text-center'>Les Grôs Contacts</h2>

        <p className='text-md px-4 text-justify mt-4'>
          <strong>Booking : </strong> Jérémy Dutheil <br />
          jeremy@jeremy-dutheil.fr <br />
          06 85 38 22 16
        </p>

        <p className='text-md px-4 text-justify mt-4'>
          <strong>Production : </strong> Bruno Derpmann <br />
          b.derpmann@gmail.com <br />
          06 62 37 73 73
        </p>

        <p className='text-md px-4 text-justify mt-4'>
          <strong>Technique : </strong> Simon Cremel <br />
          simon.cremel@gmail.com <br />
          06 27 35 43 54
        </p>
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
    </>
  );
}

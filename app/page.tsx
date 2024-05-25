import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
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
        className='w-1/2 h-auto'
      />

      <p className='text-2xl font-bold text-center'>
        Collectif festif de chanteurs musiciens lorrains
      </p>

      <p className='text-md px-4 text-justify mb-8'>
        Imaginez un savant mélange des artistes suivants : Les Garçons
        Trottoirs, Alex Toucourt, David Vincent, Julien m’a dit, La P’tite Sœur,
        La French Vapeur et La Casa Bancale. Dix trublions qui, tout
        naturellement, réarrangent et jouent sur scène les morceaux de chaque
        groupe dans des versions inédites dans un seul but : vous donner du
        plaisir. <br />
        Accrochez vous bien, ça va envoyer du Grôs !
      </p>
    </main>
  );
}

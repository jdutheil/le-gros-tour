'use client';

import { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

export default function QRCode() {
  useEffect(() => {
    window.location.assign('https://fr.ulule.com/legrostour-album-live');
  }, []);

  return (
    <>
      <div className='flex flex-col items-center pt-8 pb-8git'>
        <h2 className={`text-3xl font-bold text-center mb-4`}>Le Grôs Album</h2>

        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/Mr2Ql0qYfrg?si=Mxt4j11mzQe97eQf'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>

        <p className='text-md px-4 text-justify mt-4'>
          Si tu es arrivé sur cette page, c&apos;est que tu as flashé notre
          QrCode lors de l&apos;un des derniers concerts.. Merci !
        </p>

        <p className='text-md px-4 text-justify mt-4'>
          Cette année, Le Grôs Tour se lance dans l&apos;enregistrement
          d&apos;un album live, dont la production démarrera à l&apos;Automne
          2024 avec des extraits de toute les dates de cette année. La sortie
          est prévue pour début 2025 ! <br />
          Pour cela, on va avoir besoin de toi pour nous aider financièrement,
          car on fonctionne de manière complètement indépendante !
        </p>

        <p className='text-md px-4 text-justify mt-4'>
          Nous sommes en train de finaliser notre campagne Ulule, qui devrait
          être en ligne tout bientôt ; tu pourras alors y précommander ton
          album, ou choisir de nous soutenir encore plus en commandant une des
          autres contreparties ! <br />
          On te propose de revenir sur cette page d&apos;ici quelques jours,
          nous pourrons te rediriger vers notre campagne Ulule directement !
        </p>

        <p className='text-md px-4 text-justify mt-4'>
          En attendant, n&apos;hésite pas à nous suivre sur les réseaux afin de
          suivre notre avancée et les dernières nouvelles de la tournée !
        </p>

        <div className='flex flex-row gap-4 justify-center mt-8'>
          <SocialIcon url='https://www.facebook.com/legrostour' />
          <SocialIcon url='https://www.instagram.com/le.gros.tour/' />
          <SocialIcon url='https://www.youtube.com/@legrostourbandorganise6229' />
        </div>
      </div>
    </>
  );
}

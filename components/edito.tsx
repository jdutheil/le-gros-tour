'use client';

import { useInView } from 'react-intersection-observer';

export default function Edito() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.75,
  });

  return (
    <div ref={ref}>
      <h2
        className={`text-2xl font-bold text-center ${
          inView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        Collectif festif de chanteurs musiciens lorrains
      </h2>

      <p
        className={`text-md px-4 text-justify mt-4 ${
          inView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        Imaginez un savant mélange des artistes suivants : Les Garçons
        Trottoirs, Alex Toucourt, David Vincent, Julien m’a dit, La P’tite Sœur,
        La French Vapeur et La Casa Bancale. Dix trublions qui, tout
        naturellement, réarrangent et jouent sur scène les morceaux de chaque
        groupe dans des versions inédites dans un seul but : vous donner du
        plaisir. <br />
        Accrochez vous bien, ça va envoyer du Grôs !
      </p>
    </div>
  );
}

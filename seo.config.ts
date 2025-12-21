export const seoConfig = {
  siteName: 'Pan Akompaniator',
  description: 'Profesjonalna platforma edukacyjno-handlowa dla wokalistów z kursami wideo i podkładami fortepianuowymi',
  canonical: 'https://panakompaniator.pl',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://panakompaniator.pl',
    siteName: 'Pan Akompaniator',
    images: [
      {
        url: 'https://panakompaniator.pl/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pan Akompaniator',
      },
    ],
  },
  twitter: {
    handle: '@panakompaniator',
    site: '@panakompaniator',
    cardType: 'summary_large_image',
  },
  robots: 'index, follow',
};

export const getPageSeoConfig = (page: 'home' | 'kursy' | 'podklady' | 'sklep' | 'o-nas' | 'kontakt') => {
  const configs: Record<typeof page, any> = {
    home: {
      title: 'Pan Akompaniator | Kursy i Podkłady Fortepianowe',
      description: 'Dołącz do muzycznej rewolucji. Profesjonalne kursy wideo i podkłady fortepianu dla wokalistów.',
      url: 'https://panakompaniator.pl',
    },
    kursy: {
      title: 'Kursy Online | Pan Akompaniator',
      description: 'Kursy wideo akompaniamentu. Rozwiń swoje umiejętności z naszymi kursami na żywo i offline.',
      url: 'https://panakompaniator.pl/kursy',
    },
    podklady: {
      title: 'Podkłady Fortepianowe | Pan Akompaniator',
      description: 'Bogata biblioteka podkładów fortepianowych do piosenek. Znajdź idealne podkłady do swoich piosenek.',
      url: 'https://panakompaniator.pl/podklady',
    },
    sklep: {
      title: 'Sklep | Pan Akompaniator',
      description: 'Kup kursy i podkłady. Dostęp do wszystkich produktów edukacyjnych.',
      url: 'https://panakompaniator.pl/sklep',
    },
    'o-nas': {
      title: 'O Nas | Pan Akompaniator',
      description: 'Poznaj nasze zespół i historię. Jak powstała platforma Pan Akompaniator?',
      url: 'https://panakompaniator.pl/o-nas',
    },
    kontakt: {
      title: 'Kontakt | Pan Akompaniator',
      description: 'Skontaktuj się z nami. Pytania? Chętnie odpowiemy na wszystkie Twoje wiadomości.',
      url: 'https://panakompaniator.pl/kontakt',
    },
  };
  return configs[page];
};

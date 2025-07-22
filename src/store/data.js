export default {
  experience: [
        {
      id:1,
      function: 'Developpeur integrateur web',
      company: 'FimaInfo',
      period: '2022',
      stacks: 'JavaScript, SQL, Git',
      description: 'Developpement de solution web pour plateforme de telephonie',
      url_img: '/public/experience/web_developper.png',
      tasks: [
        "Analyse des besoins clients",
        'Conception et développement d’interfaces utilisateur',
        'Intégration de services backend',
        'Gestion de bases de données SQL',
        'Tests et débogage des applications web',
        'Collaboration avec les équipes de développement',
        'Mise en production et maintenance des applications',
      ]
    },
    {
      id: 2,
      function: 'Developpeur web',
      company: 'Servius',
      period: '2021-2022',
      stacks: 'Vuejs, Java, Git',
      description: "Developpement d'interface web de gestion de livraison par facturation de colis",
      url_img: '/public/experience/logistic.png',
      tasks: [
        "Analyse des besoins fonctionnels et techniques",
        'Conception et développement d’interfaces utilisateur',
        'Intégration de services backend',
        'Utilisation de frameworks Vuejs',
      ]
    },
    {
      id:3,
      function: "Operateur sur centre d'usinage",
      company: 'Monnot, JTEKT, Tyco, etc...',
      period: '2013-2020',
      stacks: 'CATIA V5',
      description: 'Fabrication de pièces mécaniques à usage industriel, automobile, ferroviaire.',
      url_img: '/public/experience/operator_milling_tools.png',
      tasks: [
        "Analyse des plans de fabrication",
        'Programmation de machines à commande numérique',
        'Contrôle qualité des pièces usinées',
        'Maintenance préventive et corrective des machines',
        'Collaboration avec les équipes de production',
        'Optimisation des processus de fabrication',
        'Formation des nouveaux opérateurs',
        'Utilisation de logiciels de CAO/FAO pour la conception et la programmation',
      ]
    }
  ],
  skill:[
    {
      id: 1,
      name: 'Vuejs',
      url_img: '/public/skill/logo_vue.png'
    },
    {
      id: 2,
      name: 'Laravel',
      url_img: '/public/skill/logo_laravel.png'
    },
    {
      id: 3,
      name: 'Git',
      url_img: '/public/skill/logo_git.png'
    }
  ],
  project: [
    {
      id: 1,
      name: 'DaVinciMedia',
      description: 'Bibliotèque de medias avec connection à l\'API TMDB',
      url_img: '/project/davincimedia.jpeg',
      stacks: ['Vuejs', 'Laravel'],
      img_stack: [
        '/skill/logo_vue.png',
        '/skill/logo_laravel.png',
      ],
      img_stack_alt: ['Vuejs', 'Laravel'],
      url_github: 'https://github.com/Kevin-DA-RE/davincimedia',
      descriptif: [
        "Biblioteque regroupant tous les medias par compte utilisateur.",
        "Gestion complete des medias par l'utilisateur",
        "Récupération des informations par media importé",
        "Recherche intuitive des medias par titre",
        "Tri personnalisé des medias par catégorie",
      ]
    },
    {
      id: 2,
      name: 'Yu-Gi-Oh Card Maker',
      description: 'Createur de cartes personnalisés pour le jeu Yu-Gi-Oh',
      url_img: '/project/yugioh-card-maker.png',
      stacks: ['Vuejs', 'Laravel'],
      img_stack: [
        '/skill/logo_vue.png',
        '/skill/logo_laravel.png',
      ],
      img_stack_alt: ['Vuejs', 'Laravel'],
      url_github: 'https://github.com/Kevin-DA-RE/yugioh-card-maker',
      descriptif: [
        "Création de cartes personnnalisées inspirées du jeu Yu-Gi-Oh!",
        "Creation de deck à partir des vraies cartes mais aussi celles crée par l'utilisateur",
        "Partage des créations sur les réseaux afin de les faire découvrir à des amis",
        "Création de compte personnalies afin de sauvegarder les créations",
      ]
    }
  ]
}
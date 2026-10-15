export type LandingSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

export type ServicePageContent = {
  slug: string;
  label: string;
  title: string;
  lead: string;
  intro: string;
  sections: LandingSection[];
  image: string;
  imageAlt: string;
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "reparation-pneu-dimanche",
    label: "Réparation pneu dimanche",
    title: "Un pneu crevé le dimanche ?",
    lead: "Retrouvez une solution claire, même quand les ateliers sont fermés.",
    intro:
      "Une crevaison peut immobiliser votre voiture à la maison, sur votre lieu de travail ou sur la route. Décrivez-nous le problème et votre emplacement : nous vous orientons vers la prise en charge adaptée.",
    sections: [
      {
        title: "Un diagnostic avant toute réparation",
        paragraphs: [
          "Un pneu n’est réparable que si son état et la zone touchée le permettent. Notre équipe contrôle le dommage et la structure du pneu avant de vous proposer une réparation ou un remplacement.",
          "Si le pneu ne peut pas être réparé en sécurité, nous vous expliquons les options possibles avant d’intervenir.",
        ],
        points: [
          "Crevaison ou perte de pression",
          "Contrôle de l’état général du pneu",
          "Conseil sur la réparation ou le remplacement",
        ],
      },
      {
        title: "Une prise en charge adaptée à votre situation",
        paragraphs: [
          "Indiquez le modèle du véhicule, la dimension du pneu si vous la connaissez et l’endroit où vous êtes immobilisé. Ces informations nous aident à préparer l’intervention.",
        ],
      },
    ],
    image: "/images/pneu-tire-service.png",
    imageAlt: "Pneu et jante dans un atelier automobile",
  },
  {
    slug: "montage-changement-pneu-sur-place",
    label: "Montage et changement pneu sur place",
    title: "Montage et changement de pneu sur place",
    lead: "Le bon montage commence par les bonnes dimensions.",
    intro:
      "Un pneu à remplacer ou à monter ? Nous vous accompagnons pour trouver la solution adaptée au véhicule et à votre situation, en atelier ou sur place selon le besoin.",
    sections: [
      {
        title: "Montage soigné, contrôle complet",
        paragraphs: [
          "Avant le montage, nous vérifions la dimension du pneu et son adéquation avec le véhicule. Après l’intervention, nous contrôlons le serrage et la pression pour vous permettre de reprendre la route dans de bonnes conditions.",
        ],
        points: [
          "Montage et remplacement de pneus",
          "Vérification des dimensions",
          "Contrôle de pression et de serrage",
        ],
      },
      {
        title: "Une intervention organisée autour de vous",
        paragraphs: [
          "Précisez votre localisation et le type de véhicule. Nous vous indiquerons si votre besoin peut être pris en charge sur place ou s’il est préférable de venir à l’atelier.",
        ],
      },
    ],
    image: "/images/pneu-process-banner.png",
    imageAlt: "Équipement de montage de pneu dans un atelier",
  },
  {
    slug: "depannage-pneu-domicile",
    label: "Dépannage pneu à domicile",
    title: "Dépannage pneu à domicile",
    lead: "Un problème de pneu ? Faites le point sans déplacer votre véhicule.",
    intro:
      "Si une crevaison vous empêche de rejoindre un atelier, contactez-nous depuis votre domicile ou votre lieu de travail. Nous étudions la situation et vous indiquons la meilleure façon d’intervenir.",
    sections: [
      {
        title: "De la panne au diagnostic",
        paragraphs: [
          "Expliquez-nous ce qui s’est passé, où se trouve le véhicule et si le pneu est complètement à plat. Nous vérifions les informations utiles avant de vous proposer une prise en charge.",
          "Selon l’état du pneu et les conditions sur place, une réparation peut être possible. Si le dommage ne le permet pas, un remplacement sera à envisager.",
        ],
      },
      {
        title: "Préparez votre demande",
        paragraphs: [
          "Une photo du pneu, la marque et la dimension inscrite sur son flanc facilitent l’échange. N’essayez pas de rouler sur un pneu à plat : cela peut aggraver les dégâts.",
        ],
        points: [
          "Adresse précise et accès au véhicule",
          "Type de véhicule et nombre de pneus touchés",
          "Photo ou dimension du pneu si disponible",
        ],
      },
    ],
    image: "/images/pneu-contact-service.png",
    imageAlt: "Technicien intervenant sur une roue de véhicule",
  },
  {
    slug: "reparation-pneus-engin-chantier",
    label: "Réparation pneus engin de chantier",
    title: "Pneus d’engins de chantier",
    lead: "Une intervention pensée pour les véhicules professionnels et agricoles.",
    intro:
      "Un pneu endommagé peut ralentir toute une activité. Contactez notre équipe avec le type d’engin, la dimension du pneu et le lieu d’intervention pour étudier les options de réparation ou de remplacement.",
    sections: [
      {
        title: "Pour les engins et équipements professionnels",
        paragraphs: [
          "Nous prenons en compte les besoins liés aux pneus d’engins de chantier et agricoles. Chaque demande est examinée selon le véhicule, le pneu concerné et les conditions d’accès au site.",
        ],
        points: [
          "Manitou et chariot élévateur",
          "Bulldozer, tracteur et engins de chantier",
          "Véhicules agricoles et équipements spécialisés",
        ],
      },
      {
        title: "Un contrôle avant de décider",
        paragraphs: [
          "La réparation dépend de l’emplacement et de l’ampleur du dommage. Nous vérifions si le pneu peut être remis en service ou s’il doit être remplacé, puis nous vous expliquons la suite avant intervention.",
        ],
      },
    ],
    image: "/images/pneu-tire-service.png",
    imageAlt: "Pneu robuste d’un véhicule professionnel",
  },
  {
    slug: "piece-auto",
    label: "Pièce auto",
    title: "Pièces auto et conseils de montage",
    lead: "Identifiez la bonne pièce avant de vous déplacer.",
    intro:
      "Vous recherchez une pièce pour votre véhicule ? Partagez sa marque, son modèle, son année et la référence de la pièce si vous l’avez. Notre équipe vous aide à vérifier la compatibilité et la disponibilité.",
    sections: [
      {
        title: "La compatibilité d’abord",
        paragraphs: [
          "Une même voiture peut recevoir différentes références selon sa motorisation et sa finition. Les informations figurant sur la carte grise ou sur l’ancienne pièce nous aident à orienter votre recherche.",
        ],
        points: [
          "Marque, modèle et année du véhicule",
          "Motorisation ou immatriculation",
          "Référence inscrite sur la pièce à remplacer",
        ],
      },
      {
        title: "Confirmez votre besoin avec nous",
        paragraphs: [
          "Contactez-nous avant de passer à l’atelier. Nous pourrons vérifier les informations disponibles et vous guider vers la prochaine étape.",
        ],
      },
    ],
    image: "/images/pneu-contact-service.png",
    imageAlt: "Équipement et pièces dans un atelier automobile",
  },
  {
    slug: "fixation-pare-brise",
    label: "Fixation des pare-brises",
    title: "Contrôle et fixation de pare-brise",
    lead: "Un pare-brise doit être correctement maintenu pour protéger l’habitacle.",
    intro:
      "Un pare-brise qui bouge, se décolle ou présente un défaut de fixation doit être contrôlé. Décrivez-nous le véhicule et le problème observé afin que nous puissions vous orienter vers une prise en charge adaptée.",
    sections: [
      {
        title: "Un contrôle adapté au dommage",
        paragraphs: [
          "La solution dépend de la zone concernée, de l’état du vitrage et du véhicule. Nous examinons votre demande et vous indiquons si une fixation peut être reprise ou si une autre intervention est nécessaire.",
        ],
        points: [
          "Décollement ou jeu autour du vitrage",
          "Fissure ou impact à faire évaluer",
          "Vérification du modèle et de l’année du véhicule",
        ],
      },
      {
        title: "Prenez conseil avant de reprendre la route",
        paragraphs: [
          "Si le pare-brise gêne votre visibilité ou semble instable, évitez de rouler et demandez conseil. Envoyez une photo du défaut pour faciliter le premier échange.",
        ],
      },
    ],
    image: "/images/pneu-contact-service.png",
    imageAlt: "Intervention dans un atelier de réparation automobile",
  },
];

export type DepartmentPageContent = {
  slug: string;
  name: string;
  code: string;
  label: string;
  title: string;
  intro: string;
};

export const departmentPages: DepartmentPageContent[] = [
  {
    slug: "paris",
    name: "Paris",
    code: "75",
    label: "Dépannage pneus Paris (75)",
    title: "Dépannage et réparation pneu auto à Paris",
    intro:
      "SOS Pneus propose la réparation, le montage et le remplacement de pneus à Paris. En cas de crevaison, un diagnostic permet de déterminer si une réparation sur place suffit ou si un remplacement est nécessaire.",
  },
  {
    slug: "seine-et-marne",
    name: "Seine-et-Marne",
    code: "77",
    label: "Dépannage pneus Seine-et-Marne (77)",
    title: "Dépannage et réparation de pneus en Seine-et-Marne",
    intro:
      "Une crevaison peut survenir en agglomération, sur une route de campagne ou à domicile. Le dépannage en Seine-et-Marne couvre la réparation, le montage et le remplacement pour différents types de véhicules.",
  },
  {
    slug: "yvelines",
    name: "Yvelines",
    code: "78",
    label: "Dépannage pneus Yvelines (78)",
    title: "Dépannage et réparation de pneus dans les Yvelines",
    intro:
      "SOS Pneus propose le dépannage, la réparation, le montage et le changement de pneu dans les Yvelines. Les interventions sont organisées sur le lieu de panne ou à domicile selon la situation.",
  },
  {
    slug: "essonne",
    name: "Essonne",
    code: "91",
    label: "Dépannage pneus Essonne (91)",
    title: "Dépannage et réparation de pneus en Essonne",
    intro:
      "En Essonne, SOS Pneus intervient pour les pneus crevés ou dégonflés, sur place comme à domicile. Le diagnostic permet de privilégier une réparation lorsque le pneu le permet, ou de prévoir son remplacement.",
  },
  {
    slug: "hauts-de-seine",
    name: "Hauts-de-Seine",
    code: "92",
    label: "Dépannage pneus Hauts-de-Seine (92)",
    title: "Dépannage et réparation de pneus dans les Hauts-de-Seine",
    intro:
      "SOS Pneus propose le dépannage, la réparation et le remplacement de pneus dans les Hauts-de-Seine, sur la route, à domicile ou au travail, avec une disponibilité annoncée 7 j/7 et 24 h/24.",
  },
  {
    slug: "seine-saint-denis",
    name: "Seine-Saint-Denis",
    code: "93",
    label: "Dépannage pneus Seine-Saint-Denis (93)",
    title: "Dépannage et réparation de pneus en Seine-Saint-Denis",
    intro:
      "Pour une crevaison en Seine-Saint-Denis, SOS Pneus propose le dépannage, la réparation et le remplacement de pneus, selon l’état du pneu et le lieu où le véhicule est immobilisé.",
  },
  {
    slug: "val-de-marne",
    name: "Val-de-Marne",
    code: "94",
    label: "Dépannage pneus Val-de-Marne (94)",
    title: "Dépannage et réparation de pneus dans le Val-de-Marne",
    intro:
      "Dans le Val-de-Marne, les interventions couvrent les crevaisons à domicile, au travail ou sur la route. Après diagnostic, la réparation est privilégiée si elle est possible ; le montage et le remplacement sont aussi proposés.",
  },
  {
    slug: "val-doise",
    name: "Val-d’Oise",
    code: "95",
    label: "Dépannage pneus Val-d’Oise (95)",
    title: "Dépannage et réparation de pneus dans le Val-d’Oise",
    intro:
      "SOS Pneus propose dans le Val-d’Oise le dépannage sur place ou à domicile, la réparation et le remplacement de pneus, avec une disponibilité annoncée 7 j/7 et 24 h/24.",
  },
];

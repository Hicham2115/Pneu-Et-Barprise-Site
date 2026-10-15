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
    image: "/images/pneu-service-dimanche.png",
    imageAlt: "Technicien examinant un pneu crevé dans un atelier",
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
    image: "/images/pneu-service-montage-mobile.png",
    imageAlt: "Technicien montant un pneu au bord de la route",
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
    image: "/images/pneu-service-domicile.png",
    imageAlt: "Technicien dépannant un pneu dans une allée résidentielle",
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
    image: "/images/pneu-service-chantier.png",
    imageAlt: "Technicien examinant le pneu d’un engin de chantier",
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
    image: "/images/pneu-service-piece-auto.png",
    imageAlt: "Pièces automobiles préparées sur un établi d’atelier",
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
    image: "/images/pneu-service-pare-brise.png",
    imageAlt: "Technicien fixant un pare-brise dans un atelier automobile",
  },
];

export type DepartmentPageContent = {
  slug: string;
  name: string;
  code: string;
  label: string;
  title: string;
  intro: string;
  interventionSections?: LandingSection[];
  faqs?: { question: string; answer: string }[];
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
    interventionSections: [
      {
        title: "Réparation de pneu crevé à Paris, 24 h/24 et 7 j/7",
        paragraphs: [
          "En cas de crevaison, l’équipe examine le pneu et la situation pour déterminer si une réparation peut être faite sur place ou si le véhicule doit être dépanné. Le service concerne différents types de véhicules à Paris, des voitures et utilitaires aux motos et scooters.",
          "Le diagnostic tient compte du dommage et de l’état du pneu. Si la réparation n’est pas adaptée, les options de remplacement sont présentées avant l’intervention.",
        ],
      },
      {
        title: "Montage de pneu sur place ou à domicile",
        paragraphs: [
          "Quand une crevaison immobilise le véhicule, un montage ou un remplacement sur place ou à domicile peut éviter de le déplacer jusqu’à l’atelier. L’intervention dépend du pneu, du véhicule et des conditions sur le lieu de panne.",
        ],
        points: [
          "L’équilibrage répartit le poids de la roue et aide à limiter les vibrations pendant la conduite.",
          "La géométrie consiste à vérifier et ajuster le réglage des roues selon les préconisations du véhicule.",
        ],
      },
      {
        title: "Quand faut-il changer un pneu ?",
        paragraphs: [
          "Un remplacement peut être nécessaire lorsque le pneu est trop usé ou endommagé. Faites vérifier le pneu si vous constatez l’un des signes suivants :",
        ],
        points: [
          "Profondeur de sculpture inférieure à 1,6 mm",
          "Crevaison qui ne peut pas être réparée",
          "Usure importante des flancs ou carcasse apparente",
          "Écart d’usure supérieur à 5 mm entre les pneus d’un même essieu",
          "Pneu âgé de plus de 10 ans",
        ],
      },
      {
        title: "Dépannage le dimanche et les jours fériés",
        paragraphs: [
          "Le service est annoncé tous les jours, de jour comme de nuit, y compris les dimanches et jours fériés. Pour une intervention à Paris, indiquez l’adresse et le véhicule afin que l’équipe puisse étudier la demande.",
        ],
      },
    ],
    faqs: [
      {
        question: "En combien de temps intervenez-vous à Paris ?",
        answer: "Le délai annoncé est généralement de 30 à 60 minutes, selon l’arrondissement et la circulation. Le service couvre Paris du 1er au 20e arrondissement.",
      },
      {
        question: "Quel est le prix d’un dépannage pneu à Paris ?",
        answer: "Le tarif dépend du type d’intervention, du véhicule et de l’heure. Appelez-nous pour préciser votre situation et demander un devis.",
      },
      {
        question: "Intervenez-vous la nuit, le dimanche et les jours fériés ?",
        answer: "Oui. Le service parisien est annoncé 24 h/24 et 7 j/7, y compris la nuit, les week-ends et les jours fériés.",
      },
      {
        question: "Pouvez-vous réparer ou remplacer le pneu sur place ?",
        answer: "Selon l’état du pneu, une réparation ou un remplacement peut être réalisé sur place ou à domicile à Paris.",
      },
    ],
  },
  {
    slug: "seine-et-marne",
    name: "Seine-et-Marne",
    code: "77",
    label: "Dépannage pneus Seine-et-Marne (77)",
    title: "Dépannage et réparation de pneus en Seine-et-Marne",
    intro:
      "SOS Pneus propose le dépannage, la réparation, le montage et le remplacement de pneus crevés en Seine-et-Marne, sur place ou à domicile.",
    interventionSections: [
      {
        title: "Dépannage et changement de pneu sur place ou à domicile, 24 h/24 et 7 j/7",
        paragraphs: [
          "Une crevaison peut survenir en campagne, en agglomération ou à domicile. Le service de dépannage est annoncé dans tout le département, avec une intervention organisée selon votre position et la situation du véhicule.",
          "Indiquez où se trouve le véhicule et décrivez le problème. L’équipe peut alors étudier la demande et vous orienter vers une réparation, un montage ou un remplacement, dans le respect des règles applicables.",
        ],
      },
      {
        title: "Réparation d’une crevaison en Seine-et-Marne",
        paragraphs: [
          "Après une crevaison, vous pouvez utiliser un kit adapté ou demander l’avis d’un spécialiste. La réparation dépend de l’état du pneu et du dommage ; une inspection permet de déterminer si elle est envisageable.",
        ],
        points: [
          "Faire examiner le pneu par un professionnel du dépannage et de la réparation",
          "Demander conseil avant d’utiliser un kit si vous avez un doute sur le dommage",
        ],
      },
      {
        title: "Changement et remplacement de pneu",
        paragraphs: [
          "Un pneu très usé ou endommagé peut nécessiter un remplacement. Faites contrôler les pneus si la profondeur de sculpture est inférieure à 1,6 mm, si l’écart d’usure entre les roues d’un même essieu dépasse 5 mm ou si les flancs sont fortement usés.",
        ],
      },
      {
        title: "Dépannage le dimanche et les jours fériés",
        paragraphs: [
          "Le service est annoncé de jour comme de nuit, y compris le week-end, le dimanche et les jours fériés. Selon le besoin, les opérations peuvent comprendre le démontage de la roue, l’inspection et le test du pneu réparé, ainsi que les contrôles d’équilibrage et de parallélisme.",
          "Si une réparation demande une intervention plus poussée, son état et les options possibles sont expliqués avant de poursuivre.",
        ],
        points: [
          "Démontage, nettoyage et inspection de la roue",
          "Test du pneu après réparation",
          "Vérification de l’équilibrage et du parallélisme",
        ],
      },
      {
        title: "Assistance tous véhicules, 7 j/7 et 24 h/24",
        paragraphs: [
          "Le service de dépannage et de réparation est annoncé pour les voitures, motos, scooters, véhicules utilitaires et poids lourds, notamment camions et bus. La prise en charge dépend du véhicule et de la situation sur place.",
        ],
      },
    ],
  },
  {
    slug: "yvelines",
    name: "Yvelines",
    code: "78",
    label: "Dépannage pneus Yvelines (78)",
    title: "Dépannage et réparation de pneus dans les Yvelines",
    intro:
      "SOS Pneus propose le dépannage, la réparation, le montage et le remplacement de pneus crevés dans les Yvelines et ses environs, avec une assistance annoncée 24 h/24 et 7 j/7.",
    interventionSections: [
      {
        title: "Dépannage pneus dans les Yvelines",
        paragraphs: [
          "Un pneu peut être endommagé sans prévenir. SOS Pneus propose un service d’entretien et de dépannage dans les Yvelines : décrivez le problème et votre localisation pour être orienté vers une intervention adaptée.",
        ],
      },
      {
        title: "Réparation de pneu crevé sur place ou à domicile",
        paragraphs: [
          "La prise en charge dépend de l’endroit où se trouve le véhicule et de l’état du pneu. Une équipe peut se déplacer pour examiner le dommage et établir un diagnostic, que le véhicule soit immobilisé sur la route ou à domicile.",
        ],
      },
      {
        title: "Changement ou remplacement de pneu",
        paragraphs: [
          "Un pneu défectueux peut nécessiter un remplacement lorsqu’il ne peut pas être réparé ou que sa structure est endommagée. Faites vérifier le pneu si vous constatez l’un de ces signes :",
        ],
        points: [
          "Crevaison irréparable",
          "Gomme arrachée laissant apparaître l’armature",
          "Flanc du pneu fissuré ou très usé",
          "Carcasse ou bande de roulement détériorée",
        ],
      },
      {
        title: "Montage de pneu le dimanche et les jours fériés",
        paragraphs: [
          "Le montage consiste à retirer le pneu défectueux et à installer un pneu adapté. L’intervention demande des outils et des vérifications précises :",
        ],
        points: [
          "Vérifier que les dimensions du pneu correspondent à la roue",
          "Préparer les talons du pneu et les positionner correctement sur la jante",
          "Gonfler à la pression préconisée pour le véhicule et le pneu",
        ],
      },
      {
        title: "Assistance 7 j/7 et 24 h/24",
        paragraphs: [
          "Le dépannage est annoncé de jour comme de nuit, le dimanche et les jours fériés dans les Yvelines. Contactez l’équipe, indiquez votre localisation et décrivez brièvement la panne pour préparer la demande.",
        ],
      },
    ],
  },
  {
    slug: "essonne",
    name: "Essonne",
    code: "91",
    label: "Dépannage pneus Essonne (91)",
    title: "Dépannage et réparation de pneus en Essonne",
    intro:
      "SOS Pneus propose le montage, le changement et la réparation de pneus crevés en Essonne et dans ses environs, avec une assistance annoncée 24 h/24 et 7 j/7.",
    interventionSections: [
      {
        title: "Dépannage et changement de pneus 24 h/24 et 7 j/7",
        paragraphs: [
          "Une crevaison peut survenir en circulation ou à domicile. Le service en Essonne est annoncé tous les jours, y compris le week-end et les jours fériés, pour la réparation et le remplacement de pneus sur différents types de véhicules.",
          "En cas de problème sur la route, rejoignez un endroit sûr sans accélérer ni continuer à rouler inutilement sur le pneu endommagé. Une fois stationné en sécurité, contactez l’équipe et indiquez votre emplacement.",
        ],
      },
      {
        title: "Dépannage sur place ou à domicile",
        paragraphs: [
          "Sur le lieu de panne, un spécialiste examine le pneu et recherche la cause du dégonflement. Une réparation peut être envisagée si le dommage et l’état du pneu le permettent.",
          "Si le véhicule ne peut pas rejoindre un garage, une intervention à domicile ou sur votre lieu de travail peut être étudiée selon votre localisation et la situation.",
        ],
        points: [
          "Crevaison causée par un corps étranger, comme un clou ou un éclat de verre",
          "Inspection du pneu avant de choisir une réparation ou un remplacement",
          "Prise en charge sur place, à domicile ou au travail selon les conditions",
        ],
      },
      {
        title: "Remplacement et montage de pneus",
        paragraphs: [
          "Certaines crevaisons imposent le remplacement du pneu. Les équipes peuvent aussi vous aider à choisir un pneu adapté au véhicule et à le monter avec les vérifications nécessaires.",
        ],
        points: [
          "Vérification du parallélisme lors du montage",
          "Contrôle de la pression et de l’usure des pneus",
          "Pression réglée selon les préconisations du véhicule et du fabricant",
        ],
      },
      {
        title: "Une assistance pour plusieurs types de véhicules",
        paragraphs: [
          "Le service annonce la réparation de pneus pour voitures, camions, véhicules utilitaires et motos. Les interventions peuvent être organisées à domicile, sur le lieu de travail ou sur place, selon le besoin.",
        ],
      },
    ],
  },
  {
    slug: "hauts-de-seine",
    name: "Hauts-de-Seine",
    code: "92",
    label: "Dépannage pneus Hauts-de-Seine (92)",
    title: "Dépannage et réparation de pneus dans les Hauts-de-Seine",
    intro:
      "SOS Pneus propose le montage, le changement et la réparation de pneus crevés dans les Hauts-de-Seine et ses environs, avec un service annoncé 7 j/7 et 24 h/24.",
    interventionSections: [
      {
        title: "Réparation de pneus crevés sur place ou à domicile",
        paragraphs: [
          "Si une panne de pneu vous immobilise dans les Hauts-de-Seine, contactez l’équipe en précisant votre position. Le service est annoncé en continu, y compris les jours fériés, afin d’étudier une réparation ou un changement selon l’état du pneu.",
        ],
      },
      {
        title: "Dépannage sur le lieu de panne",
        paragraphs: [
          "En cas de crevaison en circulation, rejoignez un endroit sûr si vous pouvez le faire sans prendre de risque et évitez de rouler vite ou longtemps sur le pneu endommagé. Une fois stationné, contactez le service. Un spécialiste examine le pneu et vérifie si une réparation est possible, notamment lorsque le dommage vient d’un objet perforant.",
        ],
      },
      {
        title: "Intervention à domicile ou au travail",
        paragraphs: [
          "Si le véhicule ne peut pas rejoindre un garage, une intervention à domicile ou sur votre lieu de travail peut être étudiée. Indiquez votre adresse et le problème observé pour permettre à l’équipe de préparer la demande dans les Hauts-de-Seine et ses environs.",
        ],
      },
      {
        title: "Remplacement des pneus 24 h/24 et 7 j/7",
        paragraphs: [
          "Un pneu usé ou trop détérioré peut nécessiter un remplacement pour limiter le risque de panne ou d’accident. Des services de réparation et de remplacement sont proposés pour plusieurs types de véhicules, y compris le dimanche et les jours fériés.",
        ],
        points: [
          "Voitures et véhicules utilitaires",
          "Camions et motos",
          "Intervention à domicile, au bureau ou sur le lieu de panne",
        ],
      },
      {
        title: "Montage et entretien des pneus",
        paragraphs: [
          "Lors du montage, l’équipe peut vous aider à choisir un pneu adapté et vérifier le parallélisme. Les interventions comprennent aussi un contrôle de la pression : un pneu correctement gonflé contribue au bon fonctionnement du véhicule et à la sécurité sur la route.",
        ],
      },
      {
        title: "Une assistance de jour comme de nuit",
        paragraphs: [
          "Une crevaison peut survenir en circulation ou sur un véhicule stationné. Le service des Hauts-de-Seine est annoncé 7 j/7, jour et nuit ; contactez l’équipe pour décrire la panne et organiser la prise en charge adaptée.",
        ],
      },
    ],
  },
  {
    slug: "seine-saint-denis",
    name: "Seine-Saint-Denis",
    code: "93",
    label: "Dépannage pneus Seine-Saint-Denis (93)",
    title: "Dépannage et réparation de pneus en Seine-Saint-Denis",
    intro:
      "SOS Pneus propose le montage, le changement et la réparation de pneus crevés en Seine-Saint-Denis et ses environs, sur place ou à domicile.",
    interventionSections: [
      {
        title: "Réparation et montage de pneus sur place ou à domicile, 24/7",
        paragraphs: [
          "Un pneu crevé ou une voiture qui tire d’un côté peut nécessiter un contrôle. Le service en Seine-Saint-Denis est annoncé en continu, y compris les jours fériés, pour étudier une réparation, un montage ou un remplacement selon l’état des pneus.",
        ],
      },
      {
        title: "Dépannage sur le lieu de panne",
        paragraphs: [
          "Si une crevaison survient en circulation, cherchez un emplacement sûr et évitez d’accélérer ou de continuer à rouler sur le pneu atteint. Une fois stationné, contactez l’équipe. Un spécialiste examine le pneu et vérifie d’abord si une réparation est possible, notamment lorsque le dommage vient d’un objet perforant.",
        ],
      },
      {
        title: "Dépannage à domicile ou au bureau",
        paragraphs: [
          "Une crevaison lente peut être découverte au domicile ou au travail, alors que le véhicule ne peut pas facilement rejoindre un garage. Indiquez votre adresse et le problème constaté pour étudier une intervention dans le département et ses environs.",
        ],
      },
      {
        title: "Montage et entretien des pneus",
        paragraphs: [
          "Lors du montage, les spécialistes peuvent vérifier le parallélisme et effectuer un contrôle visuel de la géométrie. L’état des autres pneus et leur pression peuvent aussi être vérifiés afin de repérer une usure ou un gonflage inadapté.",
        ],
        points: [
          "Vérification du parallélisme et contrôle visuel de la géométrie",
          "Inspection de l’état des autres pneus",
          "Contrôle de la pression",
        ],
      },
      {
        title: "Remplacement des pneus et assistance les jours fériés",
        paragraphs: [
          "Certaines crevaisons ou détériorations nécessitent un changement de pneu. Le service annonce des interventions pour voitures, camions, motos et véhicules utilitaires, à domicile ou sur le lieu de panne, y compris le dimanche et les jours fériés, de jour comme de nuit.",
        ],
      },
      {
        title: "Une assistance 24 h/24 et 7 j/7",
        paragraphs: [
          "Qu’il s’agisse d’une crevaison en circulation ou d’un pneu dégonflé sur un véhicule stationné, contactez l’équipe pour décrire la situation et organiser une prise en charge adaptée en Seine-Saint-Denis.",
        ],
      },
    ],
  },
  {
    slug: "val-de-marne",
    name: "Val-de-Marne",
    code: "94",
    label: "Dépannage pneus Val-de-Marne (94)",
    title: "Dépannage et réparation de pneus dans le Val-de-Marne",
    intro:
      "SOS Pneus propose le montage, le changement et la réparation de pneus crevés dans le Val-de-Marne et ses environs, avec un service annoncé 7 j/7 et 24 h/24.",
    interventionSections: [
      {
        title: "Réparation de pneus crevés sur place ou à domicile",
        paragraphs: [
          "Le dépannage est proposé en cas de crevaison ou de panne, à domicile, au travail ou sur la route. Une équipe spécialisée examine le pneu et pose un diagnostic pour déterminer si une réparation est envisageable.",
        ],
      },
      {
        title: "Dépannage sur place dans le Val-de-Marne",
        paragraphs: [
          "Si une crevaison survient dans un endroit isolé, privilégiez votre sécurité. Ralentissez et, si vous pouvez le faire sans danger, rejoignez à faible vitesse un endroit habité proche. Évitez d’accélérer ou de rouler longtemps sur le pneu endommagé, puis contactez l’équipe une fois stationné en sécurité.",
          "À son arrivée, un spécialiste inspecte le pneu. La réparation est étudiée en premier lieu lorsque son état le permet ; si le dommage ne peut pas être réparé, un remplacement peut être envisagé.",
        ],
      },
      {
        title: "Dépannage à domicile ou au travail",
        paragraphs: [
          "Un pneu très dégonflé découvert le matin ou après le travail peut immobiliser le véhicule. Si rejoindre un garage est difficile, indiquez votre adresse : une intervention à domicile ou au bureau peut être organisée dans le Val-de-Marne et ses environs.",
        ],
      },
      {
        title: "Un montage de qualité des pneus",
        paragraphs: [
          "Le montage est réalisé avec un équipement adapté et peut comprendre une vérification du parallélisme des roues. Les contrôles visent à assurer une installation correcte selon le véhicule et le pneu concerné.",
        ],
      },
      {
        title: "Remplacement et entretien des pneus",
        paragraphs: [
          "Lors d’un remplacement, l’ancien pneu est retiré de la jante avant la pose du nouveau. L’opération comprend le gonflage, l’équilibrage de la roue, sa repose et le serrage des vis. L’équipe peut aussi contrôler l’usure et la pression des autres pneus et vous aider à choisir un modèle adapté.",
        ],
        points: [
          "Dépose de l’ancien pneu et pose du nouveau sur la jante",
          "Gonflage, équilibrage et repose de la roue",
          "Contrôle de l’usure et de la pression des autres pneus",
        ],
      },
      {
        title: "Assistance 24 h/24 et 7 j/7, tous types de véhicules",
        paragraphs: [
          "Le service de dépannage est annoncé 24 h/24 et 7 j/7. Il concerne les pneus de voitures, de camions, de motos et d’autres véhicules utilitaires ; une intervention peut être étudiée sur place, à domicile ou au travail.",
        ],
      },
    ],
  },
  {
    slug: "val-doise",
    name: "Val-d’Oise",
    code: "95",
    label: "Dépannage pneus Val-d’Oise (95)",
    title: "Dépannage et réparation de pneus dans le Val-d’Oise",
    intro:
      "SOS Pneus propose la réparation, le montage et le changement de pneus dans le Val-d’Oise et ses environs, avec une disponibilité annoncée 7 j/7 et 24 h/24.",
    interventionSections: [
      {
        title: "Réparation et changement sur place ou à domicile dans le Val-d’Oise, 24 h/24 et 7 j/7",
        paragraphs: [
          "En cas de crevaison sur une route du Val-d’Oise, contactez l’équipe pour étudier la réparation ou le remplacement du pneu. Le service annonce une assistance tous les jours, selon la situation et le diagnostic établi après inspection.",
        ],
      },
      {
        title: "Dépannage sur le lieu de panne",
        paragraphs: [
          "Si le véhicule est immobilisé, une équipe peut être dépêchée sur place. En cas de crevaison dans un endroit isolé, réduisez progressivement votre vitesse et, si vous pouvez le faire sans danger, rejoignez une agglomération avant de vous arrêter. Une fois en sécurité, contactez le service.",
          "Après inspection du pneu, un diagnostic permet de choisir entre réparation et remplacement. La réparation est privilégiée lorsqu’elle convient au dommage, notamment pour une perforation par un objet pointu.",
        ],
      },
      {
        title: "Dépannage à domicile ou au travail",
        paragraphs: [
          "Si le pneu est crevé à domicile et que le véhicule ne peut pas facilement rejoindre un garage, une équipe peut se déplacer à votre adresse ou sur votre lieu de travail. Indiquez votre localisation dans le Val-d’Oise et décrivez la panne pour préparer l’intervention.",
        ],
      },
      {
        title: "Un service disponible le dimanche, les jours fériés, de jour comme de nuit",
        paragraphs: [
          "Le service de dépannage est annoncé tous les jours, y compris le dimanche et les jours fériés, de jour comme de nuit. Une assistance peut être étudiée à domicile, au travail ou sur le lieu de panne.",
        ],
      },
      {
        title: "Changement et remplacement des pneus",
        paragraphs: [
          "Le remplacement comprend la dépose de la roue et de l’ancien pneu, la pose du nouveau pneu sur la jante, le gonflage, l’équilibrage, puis la repose et le serrage de la roue. L’équipe peut aussi vous conseiller sur le choix du pneu et contrôler la pression des autres pneumatiques.",
        ],
        points: [
          "Dépose de l’ancien pneu et pose du nouveau",
          "Gonflage et équilibrage de la roue",
          "Contrôle de la pression et entretien des autres pneus",
        ],
      },
      {
        title: "Une assistance pour plusieurs types de véhicules",
        paragraphs: [
          "Le service annonce la réparation ou le remplacement des pneus de voitures, motos, camions et autres véhicules. Les options dépendent du véhicule, du pneu et des conditions d’intervention.",
        ],
      },
    ],
  },
];

export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'ja' | 'zh';

export interface Translation {
  [key: string]: any;
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      personal: 'Personal',
      contact: 'Contact',
      skipToMain: 'Skip to main content',
      goToTop: 'Go to top of page',
    },
    header: {
      greeting: 'Hi, my name is Aswin MV',
      title: 'Product Designer & Creative Strategist',
    },
    about: {
      heading: 'About',
      content: 'I\'m Aswin MV, currently working in Social Media & Influencer Marketing at Fulva by Calicut Cousins, driving growth through creative content strategy and influencer partnerships. With over 3 years of experience across design and marketing, I\'ve worked with clients across India, the Middle East, and Australia. I combine creativity with strategy to build campaigns and experiences that inspire, connect, and grow brands.',
    },
    work: {
      heading: 'Work',
      current: {
        title: 'Social Media & Influencer Marketing at Fulva by Calicut Cousins',
        status: 'Current Role',
        description: 'Leading social media strategy and influencer partnerships for Fulva by Calicut Cousins. Managing end-to-end campaigns from concept to execution, building authentic creator collaborations, growing community engagement, and driving brand awareness across platforms. Responsible for content planning, influencer outreach, performance tracking, and shaping the brand\'s digital voice.',
      },
      previous: {
        title: 'Creative Strategist at Whoots',
        status: 'Previous Role',
        description: 'Developed and executed creative strategies across brand, content, and campaign initiatives. Translated business goals into compelling creative directions, led cross-functional collaboration, and crafted narratives that resonated with target audiences to drive meaningful engagement.',
      },
      freelance: {
        title: 'Freelance Graphic Designer',
        status: '3+ Years Experience',
        description: 'Collaborated with international clients across India, the Middle East, and Australia, delivering creative solutions for diverse industries and markets.',
      },
      skills: {
        title: 'Core Skills',
        status: 'Expertise Areas',
        items: ['Social Media Marketing', 'Influencer Strategy', 'Creative Strategy', 'Content Strategy', 'Brand Growth', 'Graphic Design', 'Figma'],
      },
      projects: {
        title: 'Featured Projects',
        behance: 'View Portfolio on Behance',
        dribbble: 'Creative Work on Dribbble',
      },
    },
    personal: {
      heading: 'Personal',
      beyond: {
        title: 'Beyond Design',
        content: 'Beyond design, I enjoy music, gaming, cricket, illustration, and writing. These passions fuel my creativity and keep me inspired.',
      },
      currently: {
        title: 'Currently',
        items: [
          'Exploring about design systems and product management',
          'Exploring new illustration techniques and digital art',
          'Following cricket seasons and local gaming communities',
        ],
      },
    },
    contact: {
      heading: 'Get in touch',
      intro: 'I\'m always interested in hearing about new projects, opportunities, or just connecting with fellow designers and creatives. Drop me a line!',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you for your message! I\'ll get back to you soon.',
        error: 'Something went wrong. Please try again or email me directly.',
      },
      connect: 'Or connect with me on:',
      email: 'Send email to work@aswinmv.in',
    },
    footer: {
      copyright: `© {year} Aswin MV. All rights reserved.`,
      credit: 'Designed & built with care',
    },
  },
  es: {
    nav: {
      about: 'Acerca de',
      work: 'Trabajo',
      personal: 'Personal',
      contact: 'Contacto',
      skipToMain: 'Saltar al contenido principal',
      goToTop: 'Ir al inicio',
    },
    header: {
      greeting: 'Hola, mi nombre es Aswin MV',
      title: 'Diseñador de Productos y Estratega Creativo',
    },
    about: {
      heading: 'Acerca de',
      content: 'Soy Aswin MV, actualmente trabajo en Marketing de Redes Sociales e Influencers en Fulva by Calicut Cousins, impulsando el crecimiento a través de estrategia de contenido creativo y colaboraciones con influencers. Con más de 3 años de experiencia en diseño y marketing, he trabajado con clientes en India, Oriente Medio y Australia. Combino creatividad con estrategia para crear campañas y experiencias que inspiran, conectan y hacen crecer las marcas.',
    },
    work: {
      heading: 'Trabajo',
      current: {
        title: 'Marketing en Redes Sociales e Influencers en Fulva by Calicut Cousins',
        status: 'Rol Actual',
        description: 'Liderando la estrategia de redes sociales y asociaciones con influencers para Fulva by Calicut Cousins. Gestionando campañas de principio a fin, construyendo colaboraciones auténticas con creadores, impulsando el engagement comunitario y aumentando el conocimiento de marca en todas las plataformas. Responsable de la planificación de contenido, captación de influencers, análisis de rendimiento y la voz digital de la marca.',
      },
      previous: {
        title: 'Estratega Creativo en Whoots',
        status: 'Rol Anterior',
        description: 'Desarrollé y ejecuté estrategias creativas en iniciativas de marca, contenido y campañas. Traduje objetivos de negocio en direcciones creativas convincentes, lideré la colaboración entre equipos y creé narrativas que resonaron con el público objetivo para impulsar un engagement significativo.',
      },
      freelance: {
        title: 'Diseñador Gráfico Independiente',
        status: '3+ Años de Experiencia',
        description: 'Colaboré con clientes internacionales en India, Oriente Medio y Australia, entregando soluciones creativas para diversas industrias y mercados.',
      },
      skills: {
        title: 'Habilidades Principales',
        status: 'Áreas de Experiencia',
        items: ['Marketing en Redes Sociales', 'Estrategia de Influencers', 'Estrategia Creativa', 'Estrategia de Contenido', 'Crecimiento de Marca', 'Diseño Gráfico', 'Figma'],
      },
      projects: {
        title: 'Proyectos Destacados',
        behance: 'Ver Portafolio en Behance',
        dribbble: 'Trabajo Creativo en Dribbble',
      },
    },
    personal: {
      heading: 'Personal',
      beyond: {
        title: 'Más Allá del Diseño',
        content: 'Más allá del diseño, disfruto música, videojuegos, críquet, ilustración y escritura. Estas pasiones alimentan mi creatividad y me mantienen inspirado.',
      },
      currently: {
        title: 'Actualmente',
        items: [
          'Explorando sistemas de diseño y gestión de productos',
          'Explorando nuevas técnicas de ilustración y arte digital',
          'Siguiendo temporadas de críquet y comunidades gaming locales',
        ],
      },
    },
    contact: {
      heading: 'Ponte en contacto',
      intro: 'Siempre me interesa escuchar sobre nuevos proyectos, oportunidades, o simplemente conectar con otros diseñadores y creativos. ¡Déjame un mensaje!',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Correo',
        emailPlaceholder: 'tu@correo.com',
        message: 'Mensaje',
        messagePlaceholder: 'Tu mensaje...',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Gracias por tu mensaje! Te responderé pronto.',
        error: 'Algo salió mal. Por favor intenta de nuevo o envíame un correo directamente.',
      },
      connect: 'O conéctate conmigo en:',
      email: 'Enviar correo a work@aswinmv.in',
    },
    footer: {
      copyright: `© {year} Aswin MV. Todos los derechos reservados.`,
      credit: 'Diseñado y construido con cuidado',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      work: 'Travail',
      personal: 'Personnel',
      contact: 'Contact',
      skipToMain: 'Aller au contenu principal',
      goToTop: 'Aller en haut',
    },
    header: {
      greeting: 'Bonjour, je m\'appelle Aswin MV',
      title: 'Concepteur de Produits et Stratège Créatif',
    },
    about: {
      heading: 'À propos',
      content: 'Je suis Aswin MV, actuellement en Marketing Réseaux Sociaux & Influenceurs chez Fulva by Calicut Cousins, stimulant la croissance grâce à une stratégie de contenu créatif et des partenariats d\'influenceurs. Avec plus de 3 ans d\'expérience en design et marketing, j\'ai travaillé avec des clients en Inde, au Moyen-Orient et en Australie. Je combine créativité et stratégie pour créer des campagnes et des expériences qui inspirent, connectent et font grandir les marques.',
    },
    work: {
      heading: 'Travail',
      current: {
        title: 'Marketing Réseaux Sociaux & Influenceurs chez Fulva by Calicut Cousins',
        status: 'Poste Actuel',
        description: 'Direction de la stratégie sur les réseaux sociaux et des partenariats avec influenceurs pour Fulva by Calicut Cousins. Gestion de campagnes de A à Z, création de collaborations authentiques avec des créateurs, développement de l\'engagement communautaire et accroissement de la notoriété de la marque sur toutes les plateformes. Responsable de la planification de contenu, de la prospection d\'influenceurs, du suivi des performances et de la voix numérique de la marque.',
      },
      previous: {
        title: 'Stratège Créatif chez Whoots',
        status: 'Poste Précédent',
        description: 'Développement et exécution de stratégies créatives pour des initiatives de marque, de contenu et de campagnes. Traduction des objectifs commerciaux en directions créatives convaincantes, leadership de la collaboration interservices et création de narratifs qui résonnent auprès du public cible pour stimuler un engagement significatif.',
      },
      freelance: {
        title: 'Designer Graphique Indépendant',
        status: '3+ Ans d\'Expérience',
        description: 'J\'ai collaboré avec des clients internationaux en Inde, au Moyen-Orient et en Australie, en livrant des solutions créatives pour diverses industries et marchés.',
      },
      skills: {
        title: 'Compétences Principales',
        status: 'Domaines d\'Expertise',
        items: ['Marketing Réseaux Sociaux', 'Stratégie d\'Influenceurs', 'Stratégie Créative', 'Stratégie de Contenu', 'Croissance de Marque', 'Design Graphique', 'Figma'],
      },
      projects: {
        title: 'Projets en Vedette',
        behance: 'Voir Portefeuille sur Behance',
        dribbble: 'Travail Créatif sur Dribbble',
      },
    },
    personal: {
      heading: 'Personnel',
      beyond: {
        title: 'Au-delà du Design',
        content: 'Au-delà du design, j\'aime la musique, les jeux vidéo, le cricket, l\'illustration et l\'écriture. Ces passions alimentent ma créativité et m\'inspirent.',
      },
      currently: {
        title: 'Actuellement',
        items: [
          'Exploration des systèmes de design et de la gestion de produits',
          'Exploration de nouvelles techniques d\'illustration et d\'art numérique',
          'Suivi des saisons de cricket et des communautés de jeux locales',
        ],
      },
    },
    contact: {
      heading: 'Entrez en contact',
      intro: 'Je suis toujours intéressé par de nouveaux projets, des opportunités ou simplement pour échanger avec d\'autres designers et créatifs. Envoyez-moi un message!',
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'E-mail',
        emailPlaceholder: 'votre@email.com',
        message: 'Message',
        messagePlaceholder: 'Votre message...',
        send: 'Envoyer le Message',
        sending: 'Envoi en cours...',
        success: 'Merci pour votre message! Je vous répondrai bientôt.',
        error: 'Une erreur s\'est produite. Veuillez réessayer ou m\'envoyer un e-mail directement.',
      },
      connect: 'Ou connectez-vous avec moi sur :',
      email: 'Envoyer un e-mail à work@aswinmv.in',
    },
    footer: {
      copyright: `© {year} Aswin MV. Tous les droits réservés.`,
      credit: 'Conçu et construit avec soin',
    },
  },
  de: {
    nav: {
      about: 'Über',
      work: 'Arbeit',
      personal: 'Persönlich',
      contact: 'Kontakt',
      skipToMain: 'Zum Hauptinhalt springen',
      goToTop: 'Zum Anfang gehen',
    },
    header: {
      greeting: 'Hallo, mein Name ist Aswin MV',
      title: 'Produktdesigner und Kreativstratege',
    },
    about: {
      heading: 'Über',
      content: 'Ich bin Aswin MV und arbeite derzeit im Social-Media- und Influencer-Marketing bei Fulva by Calicut Cousins, wo ich Wachstum durch kreative Content-Strategie und Influencer-Partnerschaften vorantreibe. Mit über 3 Jahren Erfahrung in Design und Marketing habe ich mit Kunden in Indien, dem Nahen Osten und Australien zusammengearbeitet. Ich verbinde Kreativität mit Strategie, um Kampagnen und Erlebnisse zu schaffen, die inspirieren, verbinden und Marken wachsen lassen.',
    },
    work: {
      heading: 'Arbeit',
      current: {
        title: 'Social Media & Influencer Marketing bei Fulva by Calicut Cousins',
        status: 'Aktuelle Position',
        description: 'Leitung der Social-Media-Strategie und Influencer-Partnerschaften für Fulva by Calicut Cousins. Verwaltung von Kampagnen von Konzept bis Umsetzung, Aufbau authentischer Creator-Kollaborationen, Förderung des Community-Engagements und Steigerung der Markenbekanntheit auf allen Plattformen. Verantwortlich für Content-Planung, Influencer-Gewinnung, Leistungstracking und die digitale Stimme der Marke.',
      },
      previous: {
        title: 'Kreativstratege bei Whoots',
        status: 'Vorherige Position',
        description: 'Entwicklung und Umsetzung kreativer Strategien für Marken-, Content- und Kampagneninitiativen. Übersetzung von Geschäftszielen in überzeugende kreative Richtungen, Leitung der abteilungsübergreifenden Zusammenarbeit und Erstellung von Narrativen, die beim Zielpublikum Resonanz fanden und sinnvolles Engagement förderten.',
      },
      freelance: {
        title: 'Freiberuflicher Grafikdesigner',
        status: '3+ Jahre Erfahrung',
        description: 'Zusammenarbeit mit internationalen Kunden in Indien, dem Nahen Osten und Australien, um kreative Lösungen für verschiedene Branchen und Märkte zu liefern.',
      },
      skills: {
        title: 'Kernkompetenzen',
        status: 'Fachgebiete',
        items: ['Social Media Marketing', 'Influencer-Strategie', 'Kreativstrategie', 'Content-Strategie', 'Markenwachstum', 'Grafikdesign', 'Figma'],
      },
      projects: {
        title: 'Ausgewählte Projekte',
        behance: 'Portfolio auf Behance anzeigen',
        dribbble: 'Kreative Arbeiten auf Dribbble',
      },
    },
    personal: {
      heading: 'Persönlich',
      beyond: {
        title: 'Jenseits des Designs',
        content: 'Neben dem Design mag ich Musik, Gaming, Cricket, Illustration und Schreiben. Diese Leidenschaften beflügeln meine Kreativität und halten mich inspiriert.',
      },
      currently: {
        title: 'Derzeit',
        items: [
          'Erforschung von Designsystemen und Produktmanagement',
          'Erkundung neuer Illustrations- und digitaler Kunsttechniken',
          'Verfolgung von Cricket-Saisons und lokalen Gaming-Communities',
        ],
      },
    },
    contact: {
      heading: 'Kontakt aufnehmen',
      intro: 'Ich interessiere mich immer für neue Projekte, Gelegenheiten oder einfach nur um mit anderen Designern und Kreativen in Kontakt zu treten. Senden Sie mir eine Nachricht!',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail',
        emailPlaceholder: 'ihre@email.de',
        message: 'Nachricht',
        messagePlaceholder: 'Ihre Nachricht...',
        send: 'Nachricht Senden',
        sending: 'Wird gesendet...',
        success: 'Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.',
        error: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder senden Sie mir eine E-Mail.',
      },
      connect: 'Oder verbinden Sie sich mit mir auf:',
      email: 'E-Mail an work@aswinmv.in senden',
    },
    footer: {
      copyright: `© {year} Aswin MV. Alle Rechte vorbehalten.`,
      credit: 'Mit Sorgfalt entworfen und gebaut',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      work: 'Trabalho',
      personal: 'Pessoal',
      contact: 'Contato',
      skipToMain: 'Ir para o conteúdo principal',
      goToTop: 'Ir para o topo',
    },
    header: {
      greeting: 'Olá, meu nome é Aswin MV',
      title: 'Designer de Produtos e Estrategista Criativo',
    },
    about: {
      heading: 'Sobre',
      content: 'Sou Aswin MV, atualmente trabalho em Marketing de Redes Sociais e Influencers na Fulva by Calicut Cousins, impulsionando o crescimento através de estratégia de conteúdo criativo e parcerias com influencers. Com mais de 3 anos de experiência em design e marketing, trabalhei com clientes na Índia, Oriente Médio e Austrália. Combino criatividade com estratégia para criar campanhas e experiências que inspiram, conectam e fazem as marcas crescerem.',
    },
    work: {
      heading: 'Trabalho',
      current: {
        title: 'Marketing de Redes Sociais e Influencers na Fulva by Calicut Cousins',
        status: 'Cargo Atual',
        description: 'Liderando a estratég de redes sociais e parcerias com influencers para Fulva by Calicut Cousins. Gerenciando campanhas do conceito à execução, construindo colaborações autênticas com criadores, impulsionando o engajamento da comunidade e aumentando o reconhecimento da marca em todas as plataformas. Responsável pelo planejamento de conteúdo, captação de influencers, análise de desempenho e pela voz digital da marca.',
      },
      previous: {
        title: 'Estrategista Criativo na Whoots',
        status: 'Cargo Anterior',
        description: 'Desenvolvi e executei estratégias criativas em iniciativas de marca, conteúdo e campanhas. Traduzi objetivos de negócios em direções criativas convincentes, liderei a colaboração entre equipes e criei narrativas que ressoaram com o público-alvo para impulsionar um engajamento significativo.',
      },
      freelance: {
        title: 'Designer Gráfico Freelancer',
        status: '3+ Anos de Experiência',
        description: 'Colaborei com clientes internacionais na Índia, Oriente Médio e Austrália, entregando soluções criativas para diversos setores e mercados.',
      },
      skills: {
        title: 'Habilidades Principais',
        status: 'Áreas de Expertise',
        items: ['Marketing de Redes Sociais', 'Estratégia de Influencers', 'Estratégia Criativa', 'Estratégia de Conteúdo', 'Crescimento de Marca', 'Design Gráfico', 'Figma'],
      },
      projects: {
        title: 'Projetos em Destaque',
        behance: 'Ver Portfólio no Behance',
        dribbble: 'Trabalho Criativo no Dribbble',
      },
    },
    personal: {
      heading: 'Pessoal',
      beyond: {
        title: 'Além do Design',
        content: 'Além do design, gosto de música, jogos, críquete, ilustração e escrita. Essas paixões alimentam minha criatividade e me mantêm inspirado.',
      },
      currently: {
        title: 'Atualmente',
        items: [
          'Explorando sistemas de design e gestão de produtos',
          'Explorando novas técnicas de ilustração e arte digital',
          'Acompanhando temporadas de críquete e comunidades de jogos locais',
        ],
      },
    },
    contact: {
      heading: 'Entre em contato',
      intro: 'Sempre me interessa ouvir sobre novos projetos, oportunidades ou apenas conectar com outros designers e criativos. Envie-me uma mensagem!',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome',
        email: 'E-mail',
        emailPlaceholder: 'seu@email.com',
        message: 'Mensagem',
        messagePlaceholder: 'Sua mensagem...',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Obrigado pela sua mensagem! Retornarei em breve.',
        error: 'Algo deu errado. Por favor tente novamente ou envie-me um e-mail diretamente.',
      },
      connect: 'Ou conecte-se comigo em:',
      email: 'Enviar e-mail para work@aswinmv.in',
    },
    footer: {
      copyright: `© {year} Aswin MV. Todos os direitos reservados.`,
      credit: 'Projetado e construído com cuidado',
    },
  },
  ja: {
    nav: {
      about: 'について',
      work: '仕事',
      personal: '個人',
      contact: 'お問い合わせ',
      skipToMain: 'メインコンテンツにスキップ',
      goToTop: 'ページトップへ',
    },
    header: {
      greeting: 'こんにちは、私の名前はAswin MVです',
      title: 'プロダクトデザイナー＆クリエイティブストラテジスト',
    },
    about: {
      heading: 'について',
      content: '私はAswin MVで、現在Fulva by Calicut Cousinsでソーシャルメディア＆インフルエンサーマーケティングを担当し、クリエイティブなコンテンツ戦略とインフルエンサーパートナーシップを通じて成長を推進しています。デザインとマーケティングで3年以上の経験を持ち、インド、中東、オーストラリアの顧客と協力してきました。創造性と戦略を組み合わせて、インスピレーションを与え、つながりを持ち、ブランドを成長させるキャンペーンと体験を作り出しています。',
    },
    work: {
      heading: '仕事',
      current: {
        title: 'Fulva by Calicut Cousins ソーシャルメディア＆インフルエンサーマーケティング',
        status: '現在の職務',
        description: 'Fulva by Calicut Cousinsのソーシャルメディア戦略とインフルエンサーパートナーシップを主導。コンセプトから実行までのキャンペーンを管理し、クリエイターとの本物のコラボレーションを構築し、コミュニティエンゲージメントを高め、全プラットフォームでのブランド認知度を向上させています。コンテンツ計画、インフルエンサーアウトリーチ、パフォーマンス追跡、ブランドのデジタルの声を担当。',
      },
      previous: {
        title: 'Whoots クリエイティブストラテジスト',
        status: '前職',
        description: 'ブランド、コンテンツ、キャンペーンの取り組みにおいてクリエイティブ戦略を開発・実行。ビジネス目標を説得力のあるクリエイティブの方向性に変換し、部門間のコラボレーションを主導し、ターゲット層に響くナラティブを作成して有意義なエンゲージメントを促進しました。',
      },
      freelance: {
        title: 'フリーランスグラフィックデザイナー',
        status: '3年以上の経験',
        description: 'インド、中東、オーストラリアの国際クライアントと協力し、様々な業界と市場向けのクリエイティブソリューションを提供しました。',
      },
      skills: {
        title: 'コアスキル',
        status: '専門知識分野',
        items: ['ソーシャルメディアマーケティング', 'インフルエンサー戦略', 'クリエイティブ戦略', 'コンテンツ戦略', 'ブランド成長', 'グラフィックデザイン', 'Figma'],
      },
      projects: {
        title: '注目プロジェクト',
        behance: 'Behanceでポートフォリオを表示',
        dribbble: 'Dribbbleでのクリエイティブ作品',
      },
    },
    personal: {
      heading: '個人',
      beyond: {
        title: 'デザイン以外',
        content: 'デザイン以外にも、音楽、ゲーム、クリケット、イラスト、執筆を楽しんでいます。これらの情熱は私の創造性を刺激し、インスピレーションを与えてくれます。',
      },
      currently: {
        title: '現在',
        items: [
          'デザインシステムと製品管理について探索中',
          '新しいイラストとデジタルアート技法を探索中',
          'クリケットシーズンとローカルゲーミングコミュニティをフォロー中',
        ],
      },
    },
    contact: {
      heading: 'お問い合わせ',
      intro: '常に新しいプロジェクト、機会、または単に他のデザイナーとクリエイティブな人々とのつながりについて聞くことに興味があります。メッセージを送ってください！',
      form: {
        name: '名前',
        namePlaceholder: 'お名前',
        email: 'メールアドレス',
        emailPlaceholder: 'your@email.com',
        message: 'メッセージ',
        messagePlaceholder: 'メッセージを入力してください...',
        send: 'メッセージを送信',
        sending: '送信中...',
        success: 'メッセージをありがとうございます。間もなくご連絡いたします。',
        error: '問題が発生しました。もう一度試すか、直接メールをしてください。',
      },
      connect: 'または、以下のプラットフォームで私とつながってください：',
      email: 'work@aswinmv.inにメールを送信',
    },
    footer: {
      copyright: `© {year} Aswin MV。著作権所有。`,
      credit: '配慮を持って設計・構築されました',
    },
  },
  zh: {
    nav: {
      about: '关于',
      work: '工作',
      personal: '个人',
      contact: '联系',
      skipToMain: '跳转到主要内容',
      goToTop: '回到顶部',
    },
    header: {
      greeting: '你好，我叫Aswin MV',
      title: '产品设计师和创意策略家',
    },
    about: {
      heading: '关于',
      content: '我是Aswin MV，目前在Fulva by Calicut Cousins担任社交媒体与网红营销，通过创意内容策略和网红合作推动增长。拥有超过3年的设计和营销经验，曾与印度、中东和澳大利亚的客户合作。我将创意与策略相结合，打造能够启发、连接并促进品牌增长的营销活动与体验。',
    },
    work: {
      heading: '工作',
      current: {
        title: 'Fulva by Calicut Cousins 社交媒体与网红营销',
        status: '现任职位',
        description: '负责Fulva by Calicut Cousins的社交媒体策略和网红合作。从概念到执行全面管理活动，建立与创作者的真实合作，提升社区互动，并在各平台推动品牌知名度。负责内容规划、网红拓展、效果追踪以及品牌的数字声音。',
      },
      previous: {
        title: 'Whoots 创意策略师',
        status: '前职位',
        description: '在品牌、内容和活动方面制定并执行创意策略。将商业目标转化为引人入胜的创意方向，领导跨职能协作，打造与目标受众产生共鸣的品牌叙事，推动有意义的参与度。',
      },
      freelance: {
        title: '自由平面设计师',
        status: '3年以上经验',
        description: '与印度、中东和澳大利亚的国际客户合作，为多个行业和市场提供创意解决方案。',
      },
      skills: {
        title: '核心技能',
        status: '专业领域',
        items: ['社交媒体营销', '网红策略', '创意策略', '内容策略', '品牌增长', '平面设计', 'Figma'],
      },
      projects: {
        title: '精选项目',
        behance: '在Behance上查看作品集',
        dribbble: 'Dribbble上的创意作品',
      },
    },
    personal: {
      heading: '个人',
      beyond: {
        title: '设计之外',
        content: '除了设计，我还喜欢音乐、游戏、板球、插画和写作。这些激情激发了我的创意，让我保持灵感。',
      },
      currently: {
        title: '目前',
        items: [
          '探索设计系统和产品管理',
          '探索新的插画和数字艺术技巧',
          '关注板球赛季和本地游戏社区',
        ],
      },
    },
    contact: {
      heading: '联系我们',
      intro: '我总是有兴趣听到新项目、机会，或者只是与其他设计师和创意人士建立联系。给我留言吧！',
      form: {
        name: '名字',
        namePlaceholder: '你的名字',
        email: '电子邮件',
        emailPlaceholder: 'your@email.com',
        message: '信息',
        messagePlaceholder: '你的信息...',
        send: '发送消息',
        sending: '发送中...',
        success: '感谢您的消息！我会尽快与您联系。',
        error: '出错了。请重试或直接给我发送电子邮件。',
      },
      connect: '或在以下平台与我联系：',
      email: '向 work@aswinmv.in 发送电子邮件',
    },
    footer: {
      copyright: `© {year} Aswin MV。版权所有。`,
      credit: '用心设计和构建',
    },
  },
};

export const languages: Array<{ code: Language; name: string; nativeName: string }> = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文' },
];

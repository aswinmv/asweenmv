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
      content: 'I\'m Aswin MV, currently working as a UI/UX Designer at Nexotech, designing apps, ERP software, and SaaS products. With over 3 years of design experience, I\'ve worked with clients across India, the Middle East, and Australia. I specialize in creating intuitive interfaces for complex enterprise challenges while combining creativity with strategy to design experiences that inspire and connect with people.',
    },
    work: {
      heading: 'Work',
      current: {
        title: 'UI/UX Designer at Nexotech',
        status: 'Current Role',
        description: 'Designing intuitive interfaces and user experiences for mobile apps, ERP software, and SaaS products. Focused on solving complex enterprise challenges through thoughtful design and user-centered methodologies.',
      },
      previous: {
        title: 'Visual Designer at Whoots',
        status: 'Previous Role',
        description: 'Creating innovative design solutions and strategic creative direction for diverse projects, focusing on user-centered experiences that drive engagement.',
      },
      freelance: {
        title: 'Freelance Graphic Designer',
        status: '3+ Years Experience',
        description: 'Collaborated with international clients across India, the Middle East, and Australia, delivering creative solutions for diverse industries and markets.',
      },
      skills: {
        title: 'Core Skills',
        status: 'Expertise Areas',
        items: ['Product Design', 'Graphic Design', 'Creative Strategy', 'Illustration', 'UX/UI', 'Figma', 'SMM'],
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
      content: 'Soy Aswin MV, actualmente trabajo como Diseñador UI/UX en Nexotech, diseñando aplicaciones, software ERP y productos SaaS. Con más de 3 años de experiencia en diseño, he trabajado con clientes en India, Oriente Medio y Australia. Me especializo en crear interfaces intuitivas para desafíos empresariales complejos, combinando creatividad con estrategia para diseñar experiencias que inspiren y conecten con las personas.',
    },
    work: {
      heading: 'Trabajo',
      current: {
        title: 'Diseñador UI/UX en Nexotech',
        status: 'Rol Actual',
        description: 'Diseñando interfaces intuitivas y experiencias de usuario para aplicaciones móviles, software ERP y productos SaaS. Enfocado en resolver desafíos empresariales complejos a través de diseño reflexivo y metodologías centradas en el usuario.',
      },
      previous: {
        title: 'Diseñador Visual en Whoots',
        status: 'Rol Anterior',
        description: 'Creando soluciones de diseño innovadoras y dirección creativa estratégica para proyectos diversos, enfocándome en experiencias centradas en el usuario que impulsen la participación.',
      },
      freelance: {
        title: 'Diseñador Gráfico Independiente',
        status: '3+ Años de Experiencia',
        description: 'Colaboré con clientes internacionales en India, Oriente Medio y Australia, entregando soluciones creativas para diversas industrias y mercados.',
      },
      skills: {
        title: 'Habilidades Principales',
        status: 'Áreas de Experiencia',
        items: ['Diseño de Productos', 'Diseño Gráfico', 'Estrategia Creativa', 'Ilustración', 'UX/UI', 'Figma', 'SMM'],
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
      content: 'Je suis Aswin MV, actuellement Designer UI/UX chez Nexotech, concevant des applications, des logiciels ERP et des produits SaaS. Avec plus de 3 ans d\'expérience en design, j\'ai travaillé avec des clients en Inde, au Moyen-Orient et en Australie. Je me spécialise dans la création d\'interfaces intuitives pour résoudre des défis commerciaux complexes, en combinant créativité et stratégie pour concevoir des expériences qui inspirent et connectent avec les gens.',
    },
    work: {
      heading: 'Travail',
      current: {
        title: 'Concepteur UI/UX chez Nexotech',
        status: 'Poste Actuel',
        description: 'Concevoir des interfaces intuitives et des expériences utilisateur pour les applications mobiles, les logiciels ERP et les produits SaaS. Concentré sur la résolution des défis commerciaux complexes par un design réfléchi et des méthodologies centrées sur l\'utilisateur.',
      },
      previous: {
        title: 'Concepteur Visuel chez Whoots',
        status: 'Poste Précédent',
        description: 'Créer des solutions de design innovantes et une direction créative stratégique pour des projets diversifiés, en mettant l\'accent sur les expériences centrées sur l\'utilisateur qui stimulent l\'engagement.',
      },
      freelance: {
        title: 'Designer Graphique Indépendant',
        status: '3+ Ans d\'Expérience',
        description: 'J\'ai collaboré avec des clients internationaux en Inde, au Moyen-Orient et en Australie, en livrant des solutions créatives pour diverses industries et marchés.',
      },
      skills: {
        title: 'Compétences Principales',
        status: 'Domaines d\'Expertise',
        items: ['Design de Produits', 'Design Graphique', 'Stratégie Créative', 'Illustration', 'UX/UI', 'Figma', 'SMM'],
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
      content: 'Ich bin Aswin MV und arbeite derzeit als UI/UX-Designer bei Nexotech und entwerfe Apps, ERP-Software und SaaS-Produkte. Mit über 3 Jahren Designerfahrung habe ich mit Kunden in Indien, dem Nahen Osten und Australien zusammengearbeitet. Ich spezialisiere mich auf die Erstellung intuitiver Schnittstellen für komplexe Geschätsherausforderungen und kombiniere Kreativität mit Strategie, um Erfahrungen zu schaffen, die Menschen inspirieren und verbinden.',
    },
    work: {
      heading: 'Arbeit',
      current: {
        title: 'UI/UX-Designer bei Nexotech',
        status: 'Aktuelle Position',
        description: 'Entwerfen von intuitiven Schnittstellen und Benutzererfahrungen für mobile Apps, ERP-Software und SaaS-Produkte. Konzentriert auf die Lösung komplexer Geschätsherausforderungen durch durchdachtes Design und benutzerzentrierte Methoden.',
      },
      previous: {
        title: 'Visueller Designer bei Whoots',
        status: 'Vorherige Position',
        description: 'Erstellung innovativer Designlösungen und strategischer kreativer Richtung für vielfältige Projekte mit Fokus auf benutzerzentrierte Erfahrungen, die Engagement fördern.',
      },
      freelance: {
        title: 'Freiberuflicher Grafikdesigner',
        status: '3+ Jahre Erfahrung',
        description: 'Zusammenarbeit mit internationalen Kunden in Indien, dem Nahen Osten und Australien, um kreative Lösungen für verschiedene Branchen und Märkte zu liefern.',
      },
      skills: {
        title: 'Kernkompetenzen',
        status: 'Fachgebiete',
        items: ['Produktdesign', 'Grafikdesign', 'Kreativstrategie', 'Illustration', 'UX/UI', 'Figma', 'SMM'],
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
      content: 'Sou Aswin MV, atualmente trabalhando como Designer UI/UX na Nexotech, projetando aplicativos, software ERP e produtos SaaS. Com mais de 3 anos de experiência em design, trabalhei com clientes na Índia, Oriente Médio e Austrália. Especializo-me em criar interfaces intuitivas para desafios empresariais complexos, combinando criatividade com estratégia para projetar experiências que inspirem e conectem com as pessoas.',
    },
    work: {
      heading: 'Trabalho',
      current: {
        title: 'Designer UI/UX na Nexotech',
        status: 'Cargo Atual',
        description: 'Projetando interfaces intuitivas e experiências do usuário para aplicativos móveis, software ERP e produtos SaaS. Focado em resolver desafios empresariais complexos por meio de design reflexivo e metodologias centradas no usuário.',
      },
      previous: {
        title: 'Designer Visual na Whoots',
        status: 'Cargo Anterior',
        description: 'Criando soluções de design inovadoras e direção criativa estratégica para projetos diversos, focando em experiências centradas no usuário que impulsionam o engajamento.',
      },
      freelance: {
        title: 'Designer Gráfico Freelancer',
        status: '3+ Anos de Experiência',
        description: 'Colaborei com clientes internacionais na Índia, Oriente Médio e Austrália, entregando soluções criativas para diversos setores e mercados.',
      },
      skills: {
        title: 'Habilidades Principais',
        status: 'Áreas de Expertise',
        items: ['Design de Produtos', 'Design Gráfico', 'Estratégia Criativa', 'Ilustração', 'UX/UI', 'Figma', 'SMM'],
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
      content: '私はAswin MVで、現在NexotechでUI/UXデザイナーとして働いており、アプリ、ERPソフトウェア、SaaS製品を設計しています。3年以上のデザイン経験を持ち、インド、中東、オーストラリアの顧客と協力してきました。複雑なエンタープライズの課題に対して直感的なインターフェースを作成し、創造性と戦略を組み合わせて、人々を鼓舞し、つながりを持つ経験を設計することに特化しています。',
    },
    work: {
      heading: '仕事',
      current: {
        title: 'Nexotechでの UI/UXデザイナー',
        status: '現在の職務',
        description: 'モバイルアプリ、ERPソフトウェア、SaaS製品向けの直感的なインターフェースとユーザーエクスペリエンスを設計。思慮深いデザインとユーザー中心の方法論を通じて、複雑なビジネス上の課題の解決に注力しています。',
      },
      previous: {
        title: 'Whootsでのビジュアルデザイナー',
        status: '前職',
        description: '多様なプロジェクトのための革新的なデザインソリューションと戦略的なクリエイティブ方向性を作成し、ユーザー中心のエクスペリエンスに焦点を当ててエンゲージメントを促進しています。',
      },
      freelance: {
        title: 'フリーランスグラフィックデザイナー',
        status: '3年以上の経験',
        description: 'インド、中東、オーストラリアの国際クライアントと協力し、様々な業界と市場向けのクリエイティブソリューションを提供しました。',
      },
      skills: {
        title: 'コアスキル',
        status: '専門知識分野',
        items: ['プロダクトデザイン', 'グラフィックデザイン', 'クリエイティブ戦略', 'イラスト', 'UX/UI', 'Figma', 'SMM'],
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
      content: '我是Aswin MV，目前在Nexotech担任UI/UX设计师，设计应用程序、ERP软件和SaaS产品。拥有超过3年的设计经验，我曾与印度、中东和澳大利亚的客户合作。我专门为复杂的企业挑战创建直观的界面，将创意与策略相结合，设计激励并与人们建立联系的体验。',
    },
    work: {
      heading: '工作',
      current: {
        title: 'Nexotech UI/UX 设计师',
        status: '现任职位',
        description: '为移动应用程序、ERP软件和SaaS产品设计直观的界面和用户体验。致力于通过深思熟虑的设计和以用户为中心的方法论解决复杂的业务挑战。',
      },
      previous: {
        title: 'Whoots视觉设计师',
        status: '前职位',
        description: '为多样化的项目创造创新的设计解决方案和战略创意方向，重点关注以用户为中心的体验，促进参与度。',
      },
      freelance: {
        title: '自由平面设计师',
        status: '3年以上经验',
        description: '与印度、中东和澳大利亚的国际客户合作，为多个行业和市场提供创意解决方案。',
      },
      skills: {
        title: '核心技能',
        status: '专业领域',
        items: ['产品设计', '平面设计', '创意策略', '插画', 'UX/UI', 'Figma', 'SMM'],
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

export type Language = 'en' | 'ar';

export const translations = { 
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      experience: 'Experience',
      testimonials: 'Testimonials',
      contact: 'Contact',
      hireMe: 'Hire Me',
      academic: "Academic & Master's",
    },
    academic: {
      hero: {
        badge: 'SCHOLARLY PURSUITS',
        title: 'Academic Journey & Research', 
        subtitle: 'Integrating advanced artificial intelligence theories with scientific research to create smart solutions that address real-world challenges.',
        backHome: 'BACK TO HOME',
      },
      postgrad: {
        title: ' Studies',
        degree: {
          label: 'DEGREE',
          value: 'I hold a bachelor is degree and am currently pursuing a master is degree in Computer Information Systems (CIS). My current research focuses on integrating artificial intelligence technologies into the education sector to develop intelligent and interactive learning experiences.',
          uni: 'Ahgaff University · 2023-2024',
        },
        focus: {
          label: 'FOCUS AREA',
          value: 'artificial intelligence field',
          gpa: 'GPA: 4.0 / 4.0 · Dean\'s List',
        },
      },
      publications: {
        title: 'RESEARCH PUBLICATIONS',
        items: [
          {
            tag: 'CHI 2023 · Full Paper',
            title: 'The Obsidian Mesh: A New Protocol for Latency-Free Distributed Rendering',
            desc: 'This paper proposes a decentralized mesh architecture for handling massive visual datasets in real-time across high-latency networks. We evaluated the system across 500 nodes...',
          },
          {
            tag: 'ACM SIGGRAPH 2022',
            title: 'Emotional Resonance in Minimalist Glassmorphism',
            desc: 'An empirical study on how transparency levels and blur radii in digital interfaces affect user cognitive load and trust levels in financial applications.',
          },
        ],
      },
      thesis: {
        badge: "MASTER'S THESIS DISTINCTION",
        title: 'Q-RAGA Question-Specific Rubrics in a Retrieval Augmented LLM Model for Automated Assessment and Feedback in Programming Education',
        desc: '"Assessment and feedback in education using artificial intelligence"',
        grade: '98/100',
        gradeLabel: 'GRADE',
        rank: 'Top 1%',
        rankLabel: 'CLASS RANK',
      },
      teaching: {
        badge: 'EDUCATIONAL IMPACT',
        title: 'Teaching Portfolio',
        subtitle: '',
        courses: [
          {
            title: 'CS402: Adv. UI Systems',
            uni: 'STANFORD UNIVERSITY · 2022—23',
            items: ['Shader Programming', 'Accessibility Standards', 'Interaction Physics'],
          },
          {
            title: 'HCI Foundations',
            uni: 'MIT OPENCOURSEWARE · 2021',
            items: ['User Persona Research', 'Prototyping Workflows', 'Cognitive Load Theory'],
          },
        ],
        testimonial: {
          quote: '"One of the few instructors who bridge the gap between heavy academic theory and actual industry production standards."',
          author: 'Liam H. Chen',
          role: 'LEAD GRAD STUDENT \'23',
        },
      },
      achievements: {
        title: 'COMPETITIVE ACHIEVEMENTS',
        items: [
          { title: 'Global Hackathon', value: '1st Place', year: '2023' },
          { title: 'ACM Fellowship', value: 'Recipient', year: '2022' },
          { title: 'NASA Space Apps', value: 'Top 5 Finalist', year: '2021' },
          { title: 'Innovation Award', value: 'Grand Prix', year: '2020' },
        ],
      },
      speaking: {
        title: 'CONFERENCES & SPEAKING',
        items: [
          {
            tag: 'WEBSUMMIT 2023',
            title: 'The Ethics of AI in Design',
            desc: 'Keynote Speaker · Lisbon, Portugal',
            image: 'https://picsum.photos/seed/speak1/400/250',
          },
          {
            tag: 'UX LONDON 2022',
            title: 'Prototyping Motion Fluids',
            desc: 'Masterclass Lead · London, UK',
            image: 'https://picsum.photos/seed/speak2/400/250',
          },
          {
            tag: 'AWWWARDS CONF',
            title: 'Future of Spatial UI',
            desc: 'Panelist · Amsterdam',
            image: 'https://picsum.photos/seed/speak3/400/250',
          },
        ],
      },
      skills: {
        research: {
          title: 'Academic Research',
          items: ['Quantitative Analysis', 'Ethnographic Study', 'Eye-Tracking (Tobii)', 'Academic Writing', 'Statistical Modeling (R/SPSS)', 'Grant Writing'],
        },
        pedagogy: {
          title: 'Pedagogy & Teaching',
          items: ['Curriculum Design', 'Public Speaking', 'Workshop Facilitation', 'Student Mentorship', 'Learning Management Systems', 'Digital Instruction'],
        },
      },
    },
    hero: {
      badge: 'AVAILABLE FOR PROJECTS',
      title: 'Hussain Adnan Ali Belfaqih',
      subtitle: 'A software engineer specializing in front-end development, my career path combines technological innovation in the job market with academic depth. I currently work as a freelance front-end developer, transforming complex ideas into interactive user experiences. Simultaneously, I pursue my passion for education as a lecturer at the College of Engineering and Science at Al-Ahgaff University. As a master\'s student, I dedicate my time to solving complex programming problems using multiple programming languages, striving to bridge the gap between scientific research and practical application in the world of programming.',  viewPortfolio: 'About Me',
      theProcess: 'The Process',
    },
    philosophy: {
      title: 'Experiences',
      description1: "Front-end developer (Web & Mobile) with experience building modern applications using HTML, CSS, and JavaScript, as well as React, Next.js, and TailwindCSS. I have experience developing mobile applications using Flutter and Dart, with a strong focus on UI/UX design using tools like Figma and Adobe XD, in addition to working with Adobe Creative Cloud.",
      description2: "With over 8 years in the industry, I have bridged the gap between raw technical infrastructure and pixel-perfect aesthetics for global brands.",
      architecture: {
        title: 'Architecture',
        desc: 'Scalable, modular systems built to evolve.',
      },
      curation: {
        title: 'Curation',
        desc: 'Take care of the user experience and satisfaction.',
      },
      coreArsenal: 'CORE ARSENAL',
    },
    portfolio: {
      badge: 'SELECTED WORKS',
      title: '',
      subtitle: 'A collection of experiments, case studies, and digital flagship stores.',
      viewCase: 'CASE STUDY',
      liveDemo: 'LIVE DEMO',
      github: 'GITHUB',
    },
    experience: {
      title: 'Curated Experience',
      present: 'PRESENT',
    roles: [
  {
    title: 'Freelance Front-End Developer',
    company: 'Freelance',
    period: '2025 - Present',
    desc: 'Developing tailored front-end solutions and interactive dashboards for diverse clients, with a strong focus on high performance, clean code, and engaging user experiences.',
    links: [
      { label: 'Mega Power', url: 'https://www.megapower.energy/ar' },
      { label: 'Student Care Charitable Fund', url: 'https://bffosproject.vercel.app/' },
      { label: 'BTS Electronics', url: 'https://bates-tau.vercel.app/' },      
    ]
  },
  {
    title: 'Part-Time Web Developer & UI Designer',
    company: 'Obar',
    period: '2024 — 2025',
    desc: 'Designing and developing high-fidelity prototypes and web applications for startups and enterprises using Figma, React, and Next.js.',
    links: [
      { label: 'Wyfadah', url: 'https://www.wyfadah.com/' },
      { label: 'Arooud', url: 'https://arooud.vercel.app/' },
      { label: 'Matjirukum', url: 'https://www.matjirukum.com/' },      
    ]
  },
] 
    },
    contact: {
      title: 'Start a Conversation',
      subtitle: "Do you have a project idea that you would like to turn into reality? Or are you looking for a front-end developer to join your team? Or maybe you just want to discuss a technical or academic topic? I'm always happy to communicate and exchange ideas. Send me a message and I will respond to you as soon as possible!",
      name: 'NAME',
      email: 'EMAIL',
      projectVision: 'PROJECT VISION',
      send: 'SEND INQUIRY',
      location: 'Global / Remote',
    },
    footer: {
      rights: '© 2024 OBSIDIAN GALLERY. DIGITAL HAUTE COUTURE.',
    },
  },
  ar: {
    nav: {
      work: 'العمل',
      about: 'عني',
      experience: 'ملف اعمال',
      testimonials: 'التوصيات',
      contact: 'اتصل بنا',
      hireMe: 'وظفني',
      academic: 'الدراسات الأكاديمية والماجستير',
    },
    academic: {
      hero: {
        badge: 'المساعي العلمية',
        title: 'الرحلة الأكاديمية والبحثية',
        subtitle: 'دمج النظريات المتقدمة للذكاء الاصطناعي بالبحث العلمي لابتكار حلول ذكية تواجه تحديات العالم الحقيقي',
        backHome: 'العودة للرئيسية',
      },
      postgrad: {
        title: 'الدراسات ',
        degree: {
          label: 'الدرجة العلمية',
          value: 'حاصل على درجة البكالوريوس، ومستمر حالياً في مسيرتي الأكاديمية كطالب ماجستير في تخصص نظم المعلومات الحاسوبية (CIS). يتركز شغفي واهتمامي ماجستير  البحثي الحالي حول دمج تقنيات الذكاء الاصطناعي في قطاع التعليم لتطوير تجارب تعلم ذكية وتفاعلية.',
          uni: 'جامعة الأحقاف · 2023-2024',
        },
        focus: {
          label: 'مجال التركيز',
          value: 'مجال الذكاء الاصطناعية',
          gpa: 'المعدل: 4.0 / 4.0 · قائمة العميد',
        },
      },
      publications: {
        title: 'الأبحاث المنشورة',
        items: [
          {
            tag: 'CHI 2023 · ورقة بحثية كاملة',
            title: 'The Obsidian Mesh: بروتوكول جديد للرندرة الموزعة خالية من التأخير',
            desc: 'تقترح هذه الورقة بنية شبكية لامركزية للتعامل مع مجموعات البيانات المرئية الضخمة في الوقت الفعلي عبر شبكات ذات زمن انتقال عالٍ. قمنا بتقييم النظام عبر 500 عقدة...',
          },
          {
            tag: 'ACM SIGGRAPH 2022',
            title: 'الرنين العاطفي في بساطة تصميم "Glassmorphism"',
            desc: 'دراسة تجريبية حول كيفية تأثير مستويات الشفافية ونصف قطر الضبابية في الواجهات الرقمية على العبء المعرفي للمستخدم ومستويات الثقة في التطبيقات المالية.',
          },
        ],
      },
      thesis: {
        badge: "تميز أطروحة الماجستير",
        title: 'معايير تقييم خاصة بالأسئلة في نموذج LLM مُعزز بالاسترجاع للتقييم الآلي والتغذية الراجعة في تعليم البرمجة (Q-RAGA) الواقع الافتراضي',
        desc: '"التقييم و التغذية الراجعة في التعليم باستخدام الذكاء الاصطناعي"',
        grade: '98/100',
        gradeLabel: 'الدرجة',
        rank: 'أعلى 1%',
        rankLabel: 'ترتيب الدفعة',
      },
      teaching: {
        badge: 'الأثر التعليمي',
        title: 'سجل التدريس',
        subtitle: '',
        courses: [
          {
            title: 'CS402: أنظمة واجهة المستخدم المتقدمة',
            uni: 'جامعة ستانفورد · 2022—23',
            items: ['برمجة المظللات (Shader Programming)', 'معايير سهولة الوصول', 'فيزياء التفاعل'],
          },
          {
            title: 'أسس التفاعل بين الإنسان والحاسوب (HCI)',
            uni: 'MIT OPENCOURSEWARE · 2021',
            items: ['بحث شخصيات المستخدمين', 'سير عمل النماذج الأولية', 'نظرية العبء المعرفي'],
          },
        ],
        testimonial: {
          quote: '"أحد المدرسين القلائل الذين يسدون الفجوة بين النظرية الأكاديمية الثقيلة ومعايير الإنتاج الصناعي الفعلية."',
          author: 'ليام هـ. تشين',
          role: 'طالب دراسات عليا 23\'',
        },
      },
      achievements: {
        title: 'الإنجازات والجوائز التنافسية',
        items: [
          { title: 'الهاكاثون العالمي', value: 'المركز الأول', year: '2023' },
          { title: 'زمالة ACM', value: 'حاصل عليها', year: '2022' },
          { title: 'تطبيقات ناسا للفضاء', value: 'أفضل 5 مرشحين', year: '2021' },
          { title: 'جائزة الابتكار', value: 'الجائزة الكبرى', year: '2020' },
        ],
      }, 
      speaking: {
        title: 'المؤتمرات وورش العمل',
        items: [
          {
            tag: 'UI/UX',
            title: 'أساسيات تصميم واجهات وتجربة المستخدم الرقمية',
            desc: 'عملي تفاعلية لتصميم المنتجات',
            image: '/public/picsum.webp',
          },
          {
            tag: 'OOP',   
            title: 'المفاهيم المتقدمة للبرمجة كائنية التوجه (OOP)',
            desc: 'شرح التجريد، التعددية، والوراثة البرمجية',
            image: '/public/OOP.jpg',
          },
          {
            tag: 'COMPUTER SCIENCE FUNDAMENTALS',
            title: 'مدخل إلى البرمجة وهيكلة البيانات باستخدام ++C',
            desc: 'بناء التفكير المنطقي والخوارزميات للمبتدئين',
            image: '/public/++C.png',
          },
          {
            tag: 'CMS Content Management System',
            title: 'بناء المواقع الديناميكية وتطوير أنظمة CMS',
            desc: 'تطبيقات عملية على WordPress CMS',
            image: '/public/CMS.webp',
          },
        ],
      },
      skills: {
        research: {
          title: 'البحث الأكاديمي',
          items: ['التحليل الكمي', 'الدراسة الإثنوغرافية', 'تتبع العين (Tobii)', 'الكتابة الأكاديمية', 'النمذجة الإحصائية (R/SPSS)', 'كتابة المنح البحثية'],
        },
        pedagogy: {
          title: 'البيداغوجيا والتدريس',
          items: ['تصميم المناهج الدراسية', 'التحدث أمام الجمهور', 'تيسير ورش العمل', 'إرشاد الطلاب', 'أنظمة إدارة التعلم', 'التعليم الرقمي'],
        },
      },
    },
    hero: {
      badge: 'متاح للمشاريع',
      title: 'حسين عدنان علي بلفقيه',
      subtitle:  'مهندس برمجيات متخصص في تطوير الواجهات الأمامية، أجمع في مساري المهني بين الابتكار التقني في سوق العمل والعمق الأكاديمي. أعمل حالياً مطور واجهات أمامية كعمل حر، حيث أحول الأفكار المعقدة إلى تجارب مستخدم تفاعلية. بالتوازي مع ذلك، أمارس شغفي بالتعليم كمحاضر في كلية الهندسة والعلوم بجامعة الأحقاف. وبصفتي طالباً في الماجستير، أكرس وقتي لحل المشكلات البرمجية المعقدة باستخدام لغات برمجة متعددة، ساعياً لردم الفجوة بين البحث العلمي والتطبيق العملي في عالم البرمجة',
      viewPortfolio: 'من أنا',
      theProcess: 'العملية',
    },
    philosophy: {
      title: 'المـــهارات',
      description1: "مطوّر واجهات أمامية (Web & Mobile) بخبرة في بناء تطبيقات حديثة باستخدام HTML وCSS وJavaScript، بالإضافة إلى React وNext.js وTailwindCSS. أمتلك خبرة في تطوير تطبيقات الموبايل باستخدام Flutter وDart، مع اهتمام قوي بتصميم واجهات المستخدم وتجربة المستخدم باستخدام أدوات مثل Figma وAdobe XD، إلى جانب العمل على برامج Adobe Creative Cloud.",
      description2: "مع أكثر من 8 سنوات في الصناعة، قمت بسد الفجوة بين البنية التحتية التقنية الخام والجماليات المثالية للبكسل للعلامات التجارية العالمية.",
      architecture: {
        title: 'مطور',
        desc: 'أنظمة معيارية قابلة للتوسع ومصممة للتطور.',
      },
      curation: {
        title: 'مصمم',
        desc: 'اعتني بتجربة و رضاء المستخدم .',
      },
      coreArsenal: 'التقــنيات الأساسية',
    },
    portfolio: {
      badge: 'أعمال مختارة',
      title: 'مشاركاتي',
      subtitle: 'مجموعة من التجارب، ودراسات الحالة والمتاجر الرقمية ال>رائدة.',
      viewCase: 'دراسة حالة',
      liveDemo: 'تجربة مباشرة',
      github: 'جيت هاب',
    },
    experience: {
      title: 'ملف اعمال',
      present: 'الآن',
      roles: [
        {
          title: 'Front End Developer',
          company: 'عمل حر',
          period: 'الآن - 2025',
          desc: 'تطوير واجهات أمامية مخصصة لعملاء في القطاعات المختلفة وكذلك انشاء لوحات التحكم مع التركيز على الأداء العالي والتصميم الجذاب.',
           links : [
           { label: 'ميقاباور', url: 'https://www.megapower.energy/ar' },
           { label: 'الصندوق الخيري لرعاية الطالب', url: 'https://bffosproject.vercel.app/' },
           { label: 'BTS فدفي و يوقرين للاكترونيات', url: 'https://bates-tau.vercel.app/' },      
          ]
        },
        {
          title: 'مطور ويب لشركة partTime و مصمم واجهات',
          company: 'Obar',
          period: '2024 — 2025',
          desc: 'تطويرو تثمبم نموذج أولية لشركات و مؤسسات باستخدام React Next.js and figma.',
       links : [
           { label: 'وفادة', url: 'https://www.wyfadah.com/' },
           { label: 'عروض', url: 'https://arooud.vercel.app/' },
            { label: 'متجركم', url: 'https://www.matjirukum.com/' },      
          ]
        },
      ],
    },
    contact: {
      title: 'ابدأ محادثة',
      subtitle: "هل لديك فكرة مشروع ترغب في تحويلها إلى واقع؟ أو تبحث عن مطور واجهات أمامية ينضم لفريقك؟ أو ربما ترغب فقط في مناقشة موضوع تقني أو أكاديمي؟ يسعدني دائماً التواصل وتبادل الأفكار. أرسل لي رسالة وسأرد عليك في أقرب وقت ممكن!",
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      projectVision: 'رؤية المشروع',
      send: 'إرسال الاستفسار',
      location: 'عالمي / عن بعد',
    },
    footer: {
      rights: '© 2024 معرض أوبسيديان. صناعة الأزياء الرقمية الراقية.',
    },
  },
};

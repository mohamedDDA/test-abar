// All website content centralized
export const content = {
  // Navigation
  navigation: {
    en: {
      home: "Home",
      about: "About",
      quality: "Quality",
      certification: "Certification",
      socialResponsibility: "Social Responsibility",
      news: "News",
      products: "Products"
    },
    ar: {
      home: "الرئيسية",
      about: "عن أبار حائل",
      quality: "الجودة",
      certification: "الشهادات",
      socialResponsibility: "المسؤولية الاجتماعية",
      news: "الأخبار",
      products: "المنتجات"
    }
  },

  footer: {
    en: {
      ourProducts: "Our Products",
      aboutAbarhail: "About Abarhail",
      news: "News",
      socialResponsibility: "Social Responsibility",
      quality: "Quality",
      contactUs: "Contact Us",
      downloadApp: "Download Abarhail Water App",
      companyBrief: "Abar Hail Water has enjoyed international quality for drinking water since 2008. During these years, Abar Hail Water Company has managed to become one of the leading companies in the field of drinking water bottling.",
      waterIMP: "The water source plays the fundamental role in determining the purity and taste of water. Abar Water Company extracts drinking water from the area located between the Aja and Salma mountain ranges in the Hail region, from the purest and safest locations available in the Kingdom."
    }
    , ar: {
      ourProducts: "منتجاتنا",
      aboutAbarhail: "عن آبار حائل",
      news: "الأخبار",
      socialResponsibility: "المسؤولية الاجتماعية",
      quality: "الجودة",
      contactUs: "اتصل بنا",
      downloadApp: "حمل تطبيق مياه آبار حائل",
      companyBrief: "نتمتع آبار حائل للمياه بجودة عالمية لنوعية مياه الشرب منذ عام 2008. خلال هذه الأعوام، تمكنت شركة آبار حائل للمياه أن تصبح من الشركات الرائدة في مجال تعبئة مياه الشرب.",
      waterIMP: "يشكل مصدر المياه الدور الأساسي لتحديد نقاء وطعم المياه. نستخرج شركة آبار مياه الشرب من المنطقة الواقعة ما بين سلسلة جبال أجا وسلمى في منطقة حائل، من أنقى المواضع المتوفرة في المملكة وأكثرها أماناً."
    }
  },
  socialResponsibilityDetail: {
    ar: {
      title: "تفاصيل المسؤولية الاجتماعية",
      description: "تفاصيل مبادرات المسؤولية الاجتماعية لشركة آبار حائل",
      backButton: "العودة",
      galleryTitle: "معرض الصور",
      loading: "جاري التحميل...",
      notFound: "المحتوى غير موجود"
    },
    en: {
      title: "Social Responsibility Details",
      description: "Details of Abar Hail's social responsibility initiatives",
      backButton: "Back",
      galleryTitle: "Photo Gallery",
      loading: "Loading...",
      notFound: "Content not found"
    }
  },

  // Homepage content
  homepage: {
    hero: {
      slides: [
        {
          image: "/images/slide2.png",
          title: { en: "This is Our Land", ar: "هذي أرضنا" },
          description: {
            en: "Hail, the city located in the heart of northern Saudi Arabia, combines the magic of nature with the authenticity of history.",
            ar: "حائل، تلك المدينة الواقعة في قلب شمال المملكة العربية السعودية، تجمع بين سحر الطبيعة وأصالة التاريخ."
          },
          buttonText: { en: "Discover More", ar: "اكتشف المزيد" },
          link: "about" // <-- key corresponding to siteConfig.urls keys
        }, {
          image: "/images/slide1.png",
        }, {
          image: "/images/slide3.png",
        }, {
          image: "/images/slide4.png",

        },
      ]

    }
  },
  // Pages content
  pages: {
    about: {
      en: {
        title: "About Us",
        metaTitle: "About Us - Our Vision and Values",
        metaDescription: "Learn about our vision, values, and mission in providing premium water and sustainable solutions.",
        content: "We aspire to be a leading innovator in the field of premium water, committed to excellence, quality, and meeting customer needs.",
        ourStory: "Our Story",
        story: "Abarhail has enjoyed a global reputation for the quality of its drinking water since 2008. During these years, Ha'il Wells Water Company has become one of the leading companies in the field of bottled drinking water.\n\nThe water source is the primary factor in determining the water's purity and taste. Ha'il Wells extracts its drinking water from the area located between the Aja and Salma mountain ranges in the Ha'il region, which is one of the purest and safest oases available in the Kingdom.\n\nHa'il Wells has become the preferred water company for consumers due to its unique taste and unparalleled quality. Ha'il Wells has several branches and a massive network of distributors to cover all parts of the Kingdom.",



        textImageItems: [
          {
            id: "vision",
            title: "Our Vision",
            content: "We aspire to be a pioneering leader in the field of premium water. In this, we are guided by a clear vision and ambitious goals that aim to enhance our commitment to quality and meeting customer needs. Our vision encompasses the entire production and supply chain, covering all stages of production and delivery. We rely on continuous innovation and work with our teams to achieve excellence, leaving a distinct mark in the premium water market, aiming to positively impact people, society, and the environment around us.",
            image: "https://images.pexels.com/photos/14937751/pexels-photo-14937751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imagePosition: "right"
          },
          {
            id: "values",
            title: "Our Values",
            content: "We believe that quality is the foundation of everything we do. We continuously strive to provide products and services that meet the highest standards of excellence across all our operations. We prioritize customer satisfaction in all our objectives and work tirelessly to build long-term relationships based on trust and mutual respect. We believe in teamwork and collaboration to achieve the best results, and we are committed to social responsibility, contributing to the community, and protecting the environment, making a positive impact locally and globally.",
            image: "https://images.pexels.com/photos/14937751/pexels-photo-14937751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imagePosition: "right"
          },
          {
            id: "mission",
            title: "Our Mission",
            content: "We have a clear, well-defined mission, focused on collective efforts to achieve our goals. Our strategic approach depends on careful planning and applying the highest standards of quality across all operations. We aim to provide innovative products and services that meet evolving customer needs, always striving to exceed expectations. Our mission is guided by excellence, sustainability, and customer satisfaction, ensuring that we remain leaders in premium water solutions.",
            image: "https://images.pexels.com/photos/14937751/pexels-photo-14937751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imagePosition: "right"
          }
        ]
      },
      ar: {
        title: "عنّا",
        metaTitle: "عنا - رؤيتنا وقيمنا",
        metaDescription: "تعرف على رؤيتنا وقيمنا ورسالتنا في تقديم المياه المميزة والحلول المستدامة.",
        content: "نطمح لأن نكون روّادًا في مجال المياه المميزة، ملتزمين بالتميز والجودة وتلبية احتياجات العملاء.",
        ourStory: "حكايتنا",
        story: "تتمتع آبار حائل بجودة عالمية لنوعية مياه الشرب منذ عام 2008 خلال هذه الأعوام. تمكنت شركة آبار حائل للمياه أن تصبح من الشركات الرائدة في مجال تعبئة مياه الشرب.\n\nيشكل مصدر المياه الدور الأساسي لتحديد نقاء وطعم المياه، تستخرج شركة آبار مياه الشرب من المنطقة الواقعة ما بين سلسلة جبال أجا وسلمى في منطقة حائل. من أنقى الواحات المتوفرة في المملكة وأكثرها أماناً.\n\nأصبحت شركة آبار شركة المياه المفضلة عند المستهلك وذلك لامتلاكها طعماً مميزاً ونوعية فريدة لا مثيل لهما. تمتلك آبار عدة فروع وشبكة موزعين ضخمة لتغطية كافة أنحاء المملكة.",

        textImageItems: [
          {
            id: "vision",
            title: "رؤيتنا",
            content: "نطمح بأن نحقق ريادةً من الأوّل من نوعها في مجال المياه المميّزة. مستندين في ذلك إلى رؤية واضحة وطموح لا حدود له يهدف إلى تعزيز التزامنا بالجودة وما نقدمه من منتجات وخدمات لتلبية احتياجات عملائنا. رؤيتنا تشمل كل مراحل الإنتاج والتوريد، بدءًا من مراحل الإنتاج وصولاً إلى التوصيل. نحن نؤمن بالابتكار المستمر ونعمل مع فرقنا لتحقيق التميّز، تاركين أثرًا إيجابيًا على سوق المياه المميزة وحياة الناس والمجتمع والبيئة من حولنا.",
            image: "https://images.pexels.com/photos/14937751/pexels-photo-14937751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imagePosition: "right"
          },
          {
            id: "values",
            title: "قيمنا",
            content: "نحن نؤمن بأن الجودة هي الأساس الذي تقوم عليه جميع أعمالنا، ونسعى باستمرار إلى تقديم منتجات وخدمات تتوافق مع أعلى معايير التميز في جميع عملياتنا. كما نضع رضا العميل في صميم أولوياتنا ونعمل جاهدين على بناء علاقات طويلة الأمد تقوم على الثقة والاحترام المتبادل. نؤمن بالعمل الجماعي لتحقيق أفضل النتائج، ونلتزم بمسؤولياتنا الاجتماعية، والمساهمة في تنمية المجتمع والحفاظ على البيئة، ليكون لذلك تأثير إيجابي وفعّال في مجتمعنا المحلي والعالمي.",
            image: "https://images.pexels.com/photos/14937751/pexels-photo-14937751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imagePosition: "right"
          },
          {
            id: "mission",
            title: "رسالتنا",
            content: "نحن نسير بخط واضح ومدروس، وجهود موحدة تتّجه نحو تحقيق أهدافنا، بالاعتماد على التخطيط الاستراتيجي واتباع أعلى معايير الجودة في جميع أعمالنا. نهدف إلى تقديم منتجات وخدمات مبتكرة تلبي احتياجات عملائنا، مع الحرص على تجاوز توقعاتهم. رسالتنا مستندة إلى التميّز والاستدامة والالتزام الدائم بتلبية حاجات العملاء والمجتمع، لتظل أبار حائل دائمًا في مقدمة حلول المياه المميزة.",
            image: "https://images.pexels.com/photos/14937751/pexels-photo-14937751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imagePosition: "right"
          }
        ]
      }
    },

    quality: {
      en: {
        metaTitle: "Quality Standards - Abarhail Water",
        metaDescription: "Discover our rigorous quality standards and testing procedures.",
        textImageItems: [],
        intro:
          "The ISO 9001 Quality Management System helps monitor quality levels and manage processes at Abar Hail Water Company. This standard outlines the methods through which the company can elevate its products to the highest levels, as well as assist in developing and improving the work mechanism."
        , help: "Abar Company has met all the conditions and requirements to obtain the Quality Management System, including:  A documented management system(manual – policy – procedures – forms – work instructions)  Periodic and annual documents and records  Error correction and taking actions to prevent problems before they occur  Passing field audits and inspections"

      },
      ar: {
        metaTitle: "معايير الجودة - مياه أبار حائل",
        metaDescription: "اكتشف معايير الجودة الصارمة وإجراءات الاختبار لدينا.",
        intro:
          "يساعد نظام إدارة الجودة الأيزو 9001 على مراقبة مستوى الجــودة وإدارة العمليات في شركة آبار حائل للمياه حيث يوضح هذا المعيار الطرق التي من خلالها الارتقاء بالمنتجات التي تقدمها الشركة لأعلى المستويات كما أنه يساعد على تطوير وتحسين آليه العمل"
        , help: "حققت شركة آبار جميع الشروط والمتطلبات للحصول على نظام إدارة الجودة ومنها: – نظام إدارة موثق (دليل – سياسة – إجراءات – نماذج – تعليمات عمل) – الوثائق والسجلات الدورية والسنوية – تصحيح الأخطاء واتخاذ الاجراءات بمنع المشاكل قبل حدوثها اجتياز المراجعة والتدقيق الميداني"
      }
    },


    socialResponsibility: {
      en: {
        title: "Social Responsibility",
        metaTitle: "Social Responsibility - Abarhail Water",
        metaDescription: "Our commitment to community and environmental sustainability.",
        content: "We believe in giving back to our community and protecting the environment...",
        textImageItems: []
      },
      ar: {
        title: "المسؤولية الاجتماعية",
        metaTitle: "المسؤولية الاجتماعية - مياه أبار حائل",
        metaDescription: "التزامنا تجاه المجتمع والاستدامة البيئية.",
        content: "نؤمن بالعطاء لمجتمعنا وحماية البيئة...",
        textImageItems: []
      }
    },

    news: {
      en: {
        title: "News & Updates",
        metaTitle: "News - Abarhail Water",
        metaDescription: "Latest news and updates from Abarhail.",
        content: "Stay updated with our latest news and company developments...",
        textImageItems: []
      },
      ar: {
        title: "الأخبار والتحديثات",
        metaTitle: "الأخبار - مياه أبار حائل",
        metaDescription: "آخر الأخبار والتحديثات من أبار حائل.",
        content: "ابق على اطلاع بآخر أخبارنا وتطورات الشركة...",
        textImageItems: []
      }
    },

    products: {
      en: {
        title: "Our Products",
        metaTitle: "Products - Abarhail Water",
        metaDescription: "Explore our range of premium water products.",
        showMore: "Show More"
      },
      ar: {
        title: "منتجاتنا",
        metaTitle: "المنتجات - مياه أبار حائل",
        metaDescription: "استكشف مجموعة منتجاتنا المميزة من المياه.",
        showMore: "عرض المزيد"
      }
    }
  },

  // Common UI text
  common: {
    en: {
      readMore: "Read More",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      allRightsReserved: "All Rights Reserved",
      switchLanguage: "AR",
      showMore: "Show More",
      ourNews: "Our News"
    },
    ar: {
      readMore: "اقرأ المزيد",
      contactUs: "تواصل معنا",
      followUs: "تابعنا",
      allRightsReserved: "جميع الحقوق محفوظة",
      switchLanguage: "EN",
      showMore: "عرض المزيد",
      ourNews: "أخبارنا"
    }
  }
};

// Future CMS functions
export const cmsContent = {
  getContent: (key, language = 'ar') => {
    const keys = key.split('.');
    let result = content;

    for (const k of keys) {
      result = result?.[k];
      if (!result) return null;
    }

    return result?.[language] || result?.en || result;
  },

  updateContent: async (key, language, value) => {
    console.log('CMS Update:', { key, language, value });
    // Future API integration
  }
};
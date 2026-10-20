const copy = {
  en: {
    skip: 'Skip to content', menu: 'Menu', navWork: 'Work', navAbout: 'About', navServices: 'Services', navContact: 'Contact',
    eyebrow: 'Independent design studio', heroTitle: 'Graphic design, illustration, branding and interiors.',
    heroPlaceholder: '[Approved studio statement goes here]', explore: 'Explore selected work', selected: 'A selection',
    workTitle: 'Selected work', workNote: 'Project imagery and details to be added.', imageNeeded: 'Project image needed',
    projectOne: '[Project title]', projectTwo: '[Project title]', projectThree: '[Project title]',
    projectOneMeta: '[Client · year · services]', projectTwoMeta: '[Client · year · services]', projectThreeMeta: '[Client · year · services]',
    aboutLabel: 'The studio', aboutTitle: 'About & philosophy', aboutPlaceholder: '[Add the studio’s approved About and philosophy copy.]',
    startConversation: 'Start a conversation', whatWeDo: 'What we do', servicesTitle: 'Services', serviceGraphic: 'Graphic design',
    serviceIllustration: 'Illustration', serviceBranding: 'Branding', serviceInteriors: 'Interior design',
    contactLabel: 'Get in touch', contactTitle: 'Have something in mind?', emailPlaceholder: '[Studio email to add]',
    footerNote: 'Preview site · content in progress', backTop: 'Back to top ↑', documentTitle: 'andeverythingelse — Design studio',
    languageLabel: 'Switch language to Arabic'
  },
  ar: {
    skip: 'انتقل إلى المحتوى', menu: 'القائمة', navWork: 'الأعمال', navAbout: 'عن الاستوديو', navServices: 'الخدمات', navContact: 'تواصل',
    eyebrow: 'استوديو تصميم مستقل', heroTitle: 'تصميم جرافيكي، رسم توضيحي، هويات بصرية، وتصميم داخلي.',
    heroPlaceholder: '[يُضاف هنا النص التعريفي المعتمد للاستوديو]', explore: 'اكتشفوا مجموعة من الأعمال', selected: 'مختارات',
    workTitle: 'أعمال مختارة', workNote: 'تُضاف صور المشاريع وتفاصيلها لاحقًا.', imageNeeded: 'صورة المشروع مطلوبة',
    projectOne: '[عنوان المشروع]', projectTwo: '[عنوان المشروع]', projectThree: '[عنوان المشروع]',
    projectOneMeta: '[العميل · السنة · الخدمات]', projectTwoMeta: '[العميل · السنة · الخدمات]', projectThreeMeta: '[العميل · السنة · الخدمات]',
    aboutLabel: 'الاستوديو', aboutTitle: 'عنّا وفلسفتنا', aboutPlaceholder: '[يُضاف النص المعتمد عن الاستوديو وفلسفته هنا.]',
    startConversation: 'ابدأوا حديثًا', whatWeDo: 'ما نقدّمه', servicesTitle: 'الخدمات', serviceGraphic: 'تصميم جرافيكي',
    serviceIllustration: 'رسم توضيحي', serviceBranding: 'هويات بصرية', serviceInteriors: 'تصميم داخلي',
    contactLabel: 'للتواصل', contactTitle: 'لديكم فكرة؟', emailPlaceholder: '[يُضاف البريد الإلكتروني للاستوديو]',
    footerNote: 'نسخة أولية · المحتوى قيد الإعداد', backTop: 'العودة إلى الأعلى ↑', documentTitle: 'andeverythingelse — استوديو تصميم',
    languageLabel: 'Switch language to English'
  }
};

let language = 'en';
const languageButton = document.querySelector('.language-toggle');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

function setLanguage(nextLanguage) {
  language = nextLanguage;
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.body.dir = isArabic ? 'rtl' : 'ltr';
  document.title = copy[language].documentTitle;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[language][key]) element.textContent = copy[language][key];
  });
  languageButton.textContent = isArabic ? 'EN' : 'عربي';
  languageButton.setAttribute('aria-label', copy[language].languageLabel);
}

languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'ar' : 'en'));
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

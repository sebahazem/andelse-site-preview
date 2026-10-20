const copy = {
  en: {
    skip: 'Skip to content', menu: 'Menu', navWork: 'Work', navArchive: 'Archive', navStudio: 'Studio', navContact: 'Contact',
    servicesLine: 'Graphic design · illustration · branding · interiors',
    heroTitle: '[Approved studio statement goes here]', explore: 'Explore selected work', selected: 'Selected work',
    homeWorkTitle: 'A visual index', imagesNote: 'Project images are waiting for studio-approved files.',
    imageNeeded: 'Project image needed', projectOne: '[Project title]', projectTwo: '[Project title]', projectThree: '[Project title]',
    projectFour: '[Project title]', projectFive: '[Project title]', projectSix: '[Project title]', projectSeven: '[Project title]',
    projectEight: '[Project title]', projectNine: '[Project title]', projectTen: '[Project title]', projectEleven: '[Project title]',
    projectTwelve: '[Project title]', workLabel: 'Selected projects', workTitle: 'Work',
    workNote: 'Project names and details are still being added.', projectMetaPlaceholder: '[Year · services]',
    archiveLabel: 'The archive', archiveTitle: 'More work', archiveNote: 'Archive entries will be replaced with approved project names.',
    archiveProject: '[Archived project title]', archiveYear: '[Year]', studioLabel: 'The studio', studioTitle: 'Studio & philosophy',
    aboutPlaceholder: '[Add the studio’s approved About and philosophy copy.]', approachLabel: 'Approach',
    approachPlaceholder: '[Add a short approved description of the studio’s approach.]', servicesTitle: 'Services',
    serviceGraphic: 'Graphic design', serviceIllustration: 'Illustration', serviceBranding: 'Branding', serviceInteriors: 'Interior design',
    contactLabel: 'Contact', contactTitle: 'Get in touch', emailPlaceholder: '[Studio email to add]',
    footerNote: 'Preview site · content in progress', backTop: 'Back to top ↑', documentTitle: 'andeverythingelse — Studio',
    languageLabel: 'Switch language to Arabic'
  },
  ar: {
    skip: 'انتقل إلى المحتوى', menu: 'القائمة', navWork: 'الأعمال', navArchive: 'الأرشيف', navStudio: 'الاستوديو', navContact: 'تواصل',
    servicesLine: 'تصميم جرافيكي · رسم توضيحي · هويات بصرية · تصميم داخلي',
    heroTitle: '[يُضاف هنا النص التعريفي المعتمد للاستوديو]', explore: 'اكتشفوا الأعمال المختارة', selected: 'أعمال مختارة',
    homeWorkTitle: 'فهرس بصري', imagesNote: 'بانتظار الصور المعتمدة للمشاريع.',
    imageNeeded: 'صورة المشروع مطلوبة', projectOne: '[عنوان المشروع]', projectTwo: '[عنوان المشروع]', projectThree: '[عنوان المشروع]',
    projectFour: '[عنوان المشروع]', projectFive: '[عنوان المشروع]', projectSix: '[عنوان المشروع]', projectSeven: '[عنوان المشروع]',
    projectEight: '[عنوان المشروع]', projectNine: '[عنوان المشروع]', projectTen: '[عنوان المشروع]', projectEleven: '[عنوان المشروع]',
    projectTwelve: '[عنوان المشروع]', workLabel: 'مشاريع مختارة', workTitle: 'الأعمال',
    workNote: 'تُضاف أسماء المشاريع وتفاصيلها لاحقًا.', projectMetaPlaceholder: '[السنة · الخدمات]',
    archiveLabel: 'الأرشيف', archiveTitle: 'أعمال أخرى', archiveNote: 'تُستبدل عناصر الأرشيف بأسماء المشاريع المعتمدة.',
    archiveProject: '[عنوان المشروع في الأرشيف]', archiveYear: '[السنة]', studioLabel: 'الاستوديو', studioTitle: 'الاستوديو والفلسفة',
    aboutPlaceholder: '[يُضاف النص المعتمد عن الاستوديو وفلسفته هنا.]', approachLabel: 'النهج',
    approachPlaceholder: '[يُضاف وصف موجز ومعتمد لنهج الاستوديو.]', servicesTitle: 'الخدمات',
    serviceGraphic: 'تصميم جرافيكي', serviceIllustration: 'رسم توضيحي', serviceBranding: 'هويات بصرية', serviceInteriors: 'تصميم داخلي',
    contactLabel: 'تواصل', contactTitle: 'للتواصل', emailPlaceholder: '[يُضاف البريد الإلكتروني للاستوديو]',
    footerNote: 'نسخة أولية · المحتوى قيد الإعداد', backTop: 'العودة إلى الأعلى ↑', documentTitle: 'andeverythingelse — الاستوديو',
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

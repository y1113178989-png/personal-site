export const ui = {
  zh: {
    'nav.about': '关于',
    'nav.experience': '经历',
    'nav.skills': '技能',
    'nav.contact': '联系',
    'theme.light': '浅色模式',
    'theme.dark': '深色模式',
    'lang.switch': 'English',
    'contact.github': 'GitHub',
    'contact.email': '邮箱',
    'contact.resume': '下载简历 (PDF)',
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    'lang.switch': '中文',
    'contact.github': 'GitHub',
    'contact.email': 'Email',
    'contact.resume': 'Download Resume (PDF)',
  },
} as const;

export type Locale = keyof typeof ui;
export type UIKey = keyof (typeof ui)['zh'];

export function t(locale: string, key: UIKey): string {
  return ui[locale as Locale]?.[key] ?? ui['zh'][key];
}

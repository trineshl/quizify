import { TreePalm } from 'lucide-react';

export const APP_INFO_ACCOUNT_TYPE = {
  TEAM: 'centre',
  ORG: 'org',
};

const isDev = !window.origin.includes('qr-web-5nz.pages.dev');

export const appInfo = {
  appId: 'quizify',
  appName: 'Quizify',
  appDescription: 'Generate quizzes from PDF files using AI',
  logo: TreePalm,
  version: '1.0.0',
  account_type_txt: {
    singular: 'Team',
    plural: 'Teams',
    value: APP_INFO_ACCOUNT_TYPE.TEAM,
  },

  CLOUDFLARE_CAPTCHA_KEY: '0x4AAAAAACarx5pkqGND1Ikk',

  THEME_COLOR: '#00c950',
  SUPPORT_EMAIL: 'trineshlokhande@gmail.com',
  BACKEND_URL: isDev ? 'http://127.0.0.1:8787' : 'https://qr-backend.trineshlokhande.workers.dev',
  CLIENT_URL: isDev ? 'http://localhost:5173' : 'https://qr-web-5nz.pages.dev',
};

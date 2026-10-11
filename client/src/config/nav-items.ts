import {
  Home,
  Settings,
} from 'lucide-react';
import type { IVirtualChildOf, NavGroup } from 'sidekick-client';

export const navMenu: NavGroup[] = [
  {
    title: 'Dashboard',
    items: [
      {
        title: 'Home',
        icon: Home,
        url: 'home',
      },
      {
        title: 'Question Templates',
        icon: Home,
        url: 'question-templates',
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        title: 'General Settings',
        icon: Settings,
        url: 'general-settings',
      },
    ],
  },
];

export const virtualChildOf: IVirtualChildOf[] = [];

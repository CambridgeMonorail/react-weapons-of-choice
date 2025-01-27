interface Sale {
  name: string;
  email: string;
  amount: string;
  avatarSrc: string;
  avatarFallback: string;
}

export const salesData: Sale[] = [
  {
    name: 'Dom Node',
    email: 'dom.node@erisfy.dev',
    amount: '+£1,234.56',
    avatarSrc: 'react-weapons-of-choice/assets/images/avatars/01.png',
    avatarFallback: 'DN',
  },
  {
    name: 'Jason Script',
    email: 'jason.script@erisfy.dev',
    amount: '+£45.67',
    avatarSrc: 'react-weapons-of-choice/assets/images/avatars/02.png',
    avatarFallback: 'JS',
  },
  {
    name: 'Sarah Styles',
    email: 'sarah.styles@erisfy.dev',
    amount: '+£678.90',
    avatarSrc: 'react-weapons-of-choice/assets/images/avatars/03.png',
    avatarFallback: 'SS',
  },
  {
    name: 'Debbie Bug',
    email: 'debbie.bug@erisfy.dev',
    amount: '+£12.34',
    avatarSrc: 'react-weapons-of-choice/assets/images/avatars/04.png',
    avatarFallback: 'DB',
  },
  {
    name: 'Ajax Fetcher',
    email: 'ajax.fetcher@erisfy.dev',
    amount: '+£89.01',
    avatarSrc: 'react-weapons-of-choice/assets/images/avatars/05.png',
    avatarFallback: 'AF',
  },
];

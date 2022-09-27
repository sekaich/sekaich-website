import { CategoryList, Tab } from 'types/domain';

export const CategoryTabs: Tab[] = [
  { id: 0, iconType: 'mission' },
  { id: 1, iconType: 'folder' },
];

export const MissionCategory: CategoryList[] = [
  {
    id: 0,
    name: 'SMSでクチコミ獲得',
    iconType: 'reviews',
    children: [
      {
        id: 0,
        name: 'アンケートを選ぶ',
        path: '/mission/survey',
      },
    ],
  },
  {
    id: 1,
    name: '店頭でクチコミ獲得',
    iconType: 'store',
    children: [
      {
        id: 0,
        name: 'アンケートを選ぶ',
        path: '/mission/survey_',
      },
      {
        id: 1,
        name: 'クーポンを選ぶ',
        path: '/mission/coupon',
      },
      {
        id: 2,
        name: 'キャンペーンを作る',
        path: '/mission/campaign',
      },
      {
        id: 3,
        name: '店頭POPを作る',
        path: '/mission/qr',
      },
      {
        id: 4,
        name: 'お客様に声かけする',
        path: '/mission/pop',
      },
    ],
  },
  {
    id: 2,
    name: 'クチコミ獲得について相談',
    path: '/advice',
    iconType: 'advice',
    children: [],
  },
];

export const ManageCategory: CategoryList[] = [
  {
    id: 0,
    name: '送信一覧',
    path: '/send-list',
    iconType: 'send-list',
  },
  {
    id: 1,
    name: '成果レポート',
    iconType: 'report',
    children: [
      {
        id: 0,
        name: 'キャンペーンレポート',
        path: '/report',
      },
      {
        id: 1,
        name: '送信履歴レポート',
        path: '/report',
      },
      {
        id: 2,
        name: 'アンケートレポート',
        path: '/report',
      },
      {
        id: 3,
        name: 'クーポンレポート',
        path: '/report',
      },
      {
        id: 4,
        name: 'フィードバック一覧',
        path: '/report',
      },
    ],
  },
  {
    id: 2,
    name: '顧客リスト（一覧）',
    path: '/customer-list',
    iconType: 'customer-list',
  },
  {
    id: 3,
    name: '設定',
    iconType: 'setting',
    children: [
      {
        id: 0,
        name: '契約情報',
        path: '/account',
      },
      {
        id: 1,
        name: 'アカウント管理',
        path: '/account',
      },
    ],
  },
];

export const OtherCategory: CategoryList[] = [
  {
    id: 0,
    name: 'ヘルプ',
    path: '/help',
    iconType: 'help',
    children: [],
  },
];

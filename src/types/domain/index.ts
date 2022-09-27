// サイドメニューのカテゴリ
export type CategoryList = {
  id: number;
  name: string;
  iconType: IconType;
  path?: string;
  children?: CategoryItem[];
};

export type CategoryItem = {
  id: number;
  name: string;
  path: string;
};

// タブ
export type Tab = {
  id: number;
  label?: string;
  iconType?: IconType;
};

export type IconType =
  | 'add'
  | 'advice'
  | 'asc'
  | 'campaign'
  | 'calender'
  | 'copy'
  | 'coupon'
  | 'coupon-used'
  | 'customer'
  | 'customer-list'
  | 'create'
  | 'delivery'
  | 'desc'
  | 'edit'
  | 'expand-less'
  | 'expand-more'
  | 'folder'
  | 'help'
  | 'logout'
  | 'mail'
  | 'mail-opened'
  | 'mission'
  | 'notification'
  | 'preview'
  | 'pulldown'
  | 'survey'
  | 'report'
  | 'review'
  | 'reviews'
  | 'search'
  | 'send-list'
  | 'setting'
  | 'store'
  | 'ticket'
  | 'time'
  | 'trash'
  | 'warning';

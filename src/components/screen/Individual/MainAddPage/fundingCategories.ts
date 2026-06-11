export type FundingCategoryKey =
  | 'FOOD'
  | 'FURNITURE'
  | 'DIGITAL'
  | 'FASHION'
  | 'BEAUTY'
  | 'ETC';

export type MainCategoryItem =
  | {
      type: 'category';
      key: FundingCategoryKey;
      label: string;
      icon: string;
      bg: string;
      iconColor: string;
    }
  | {
      type: 'action';
      key: 'ALL' | 'PROPOSAL';
      label: string;
      icon: string;
      bg: string;
      iconColor: string;
    };

export const FUNDING_CATEGORIES: MainCategoryItem[] = [
  {
    type: 'category',
    key: 'FOOD',
    label: 'FOOD',
    icon: 'food-apple-outline',
    bg: '#FFF3E6',
    iconColor: '#F97316',
  },
  {
    type: 'category',
    key: 'FURNITURE',
    label: 'FURNITURE',
    icon: 'sofa-outline',
    bg: '#E8F5E9',
    iconColor: '#16A34A',
  },
  {
    type: 'category',
    key: 'DIGITAL',
    label: 'DIGITAL',
    icon: 'laptop',
    bg: '#E3F2FD',
    iconColor: '#2563EB',
  },
  {
    type: 'category',
    key: 'FASHION',
    label: 'FASHION',
    icon: 'tshirt-crew-outline',
    bg: '#FCE7F3',
    iconColor: '#DB2777',
  },
  {
    type: 'category',
    key: 'BEAUTY',
    label: 'BEAUTY',
    icon: 'flower-outline',
    bg: '#F3E8FF',
    iconColor: '#9333EA',
  },
  {
    type: 'category',
    key: 'ETC',
    label: 'ETC',
    icon: 'dots-grid',
    bg: '#F1F5F9',
    iconColor: '#64748B',
  },
  {
    type: 'action',
    key: 'ALL',
    label: '전체',
    icon: 'view-grid-outline',
    bg: '#E6F3FB',
    iconColor: '#0077C8',
  },
  {
    type: 'action',
    key: 'PROPOSAL',
    label: '주문제작',
    icon: 'pencil-outline',
    bg: '#FFF8E1',
    iconColor: '#D97706',
  },
];

export const CATEGORY_LABELS: Record<FundingCategoryKey, string> = {
  FOOD: 'FOOD',
  FURNITURE: 'FURNITURE',
  DIGITAL: 'DIGITAL',
  FASHION: 'FASHION',
  BEAUTY: 'BEAUTY',
  ETC: 'ETC',
};

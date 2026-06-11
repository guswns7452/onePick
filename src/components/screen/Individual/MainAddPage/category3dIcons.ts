// Microsoft Fluent UI Emoji (3D) — https://github.com/microsoft/fluentui-emoji
export const CATEGORY_3D_ICONS = {
  FOOD: require('../../../../assets/icons/3d/food.png'),
  FURNITURE: require('../../../../assets/icons/3d/furniture.png'),
  DIGITAL: require('../../../../assets/icons/3d/digital.png'),
  FASHION: require('../../../../assets/icons/3d/fashion.png'),
  BEAUTY: require('../../../../assets/icons/3d/beauty.png'),
  ETC: require('../../../../assets/icons/3d/etc.png'),
  ALL: require('../../../../assets/icons/3d/all.png'),
  PROPOSAL: require('../../../../assets/icons/3d/proposal.png'),
} as const;

export type Category3DIconKey = keyof typeof CATEGORY_3D_ICONS;

export const PROMO_3D_ICONS = {
  funding: require('../../../../assets/icons/3d/promo-funding.png'),
  hot: require('../../../../assets/icons/3d/promo-hot.png'),
  proposal: require('../../../../assets/icons/3d/promo-proposal.png'),
} as const;

export const ICON3D_SOURCE = 'https://github.com/microsoft/fluentui-emoji';

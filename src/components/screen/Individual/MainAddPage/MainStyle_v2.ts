import { StyleSheet } from 'react-native';
import { brand } from '../../../../public/style/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brand.white,
  },
  hero: {
    backgroundColor: brand.ibkDeepBlue,
    paddingBottom: 56,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: brand.white,
  },
  userName: {
    fontSize: 26,
    fontWeight: '800',
    color: brand.white,
    marginBottom: 6,
  },
  heroSub: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 22,
  },
  profileButton: {
    position: 'absolute',
    right: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 16,
    fontWeight: '700',
    color: brand.white,
  },
  body: {
    paddingHorizontal: 24,
    marginTop: -36,
  },
  actionCard: {
    backgroundColor: brand.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: brand.ibkDeepBlue,
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  actionIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#E6F3FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: brand.ibkDeepBlue,
    marginBottom: 4,
  },
  actionDesc: {
    fontSize: 13,
    color: '#5A6478',
    lineHeight: 18,
  },
  quickLinks: {
    marginTop: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 4,
  },
  quickLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  quickLinkText: {
    fontSize: 14,
    fontWeight: '500',
    color: brand.ibkDeepBlue,
  },
  quickLinkArrow: {
    fontSize: 18,
    color: '#9AA8B8',
  },
  divider: {
    height: 1,
    backgroundColor: '#E8EEF5',
    marginHorizontal: 16,
  },
});

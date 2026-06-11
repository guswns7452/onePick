import { StyleSheet } from 'react-native';
import { brand } from '../../../../public/style/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brand.white,
  },
  topAccent: {
    height: 6,
    backgroundColor: brand.ibkBlue,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 28,
  },
  greeting: {
    fontSize: 14,
    color: '#5A6478',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: '800',
    color: brand.ibkDeepBlue,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E6F3FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 18,
    fontWeight: '700',
    color: brand.ibkBlue,
  },
  slogan: {
    fontSize: 15,
    color: '#5A6478',
    lineHeight: 22,
    marginBottom: 28,
  },
  mainCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E8EEF5',
  },
  mainCardPrimary: {
    backgroundColor: brand.ibkBlue,
    borderColor: brand.ibkBlue,
  },
  mainCardSecondary: {
    backgroundColor: '#F4F9FD',
  },
  mainCardIconWrap: {
    marginBottom: 12,
  },
  mainCardTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 6,
  },
  mainCardTitleLight: {
    color: brand.white,
  },
  mainCardTitleDark: {
    color: brand.ibkDeepBlue,
  },
  mainCardDesc: {
    fontSize: 13,
    lineHeight: 20,
  },
  mainCardDescLight: {
    color: 'rgba(255,255,255,0.85)',
  },
  mainCardDescDark: {
    color: '#5A6478',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: brand.ibkDeepBlue,
    marginTop: 12,
    marginBottom: 0,
  },
  activitySectionTitle: {
    marginBottom: 14,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F7',
  },
  linkText: {
    fontSize: 15,
    color: brand.ibkDeepBlue,
    fontWeight: '500',
  },
  linkArrow: {
    fontSize: 20,
    color: '#9AA8B8',
  },
  urgentSection: {
    marginTop: 4,
    marginBottom: 8,
  },
  urgentHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  urgentMore: {
    fontSize: 13,
    fontWeight: '600',
    color: brand.ibkBlue,
  },
  urgentCard: {
    backgroundColor: '#FFF7ED',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FED7AA',
  },
  urgentCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
    gap: 8,
  },
  urgentTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: brand.ibkDeepBlue,
    lineHeight: 20,
  },
  urgentBadge: {
    backgroundColor: '#EA580C',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  urgentBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: brand.white,
  },
  urgentMeta: {
    fontSize: 13,
    fontWeight: '600',
    color: '#C2410C',
  },
  urgentEmpty: {
    fontSize: 13,
    color: '#9AA8B8',
    lineHeight: 20,
    marginBottom: 8,
  },
});

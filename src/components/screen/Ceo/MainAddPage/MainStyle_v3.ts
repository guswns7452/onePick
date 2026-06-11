import { StyleSheet } from 'react-native';
import { brand } from '../../../../public/style/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '800',
    color: brand.ibkDeepBlue,
    letterSpacing: -0.5,
  },
  profileButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: brand.white,
    borderRadius: 20,
  },
  profileText: {
    fontSize: 13,
    fontWeight: '600',
    color: brand.ibkBlue,
  },
  welcome: {
    fontSize: 22,
    fontWeight: '800',
    color: brand.ibkDeepBlue,
    lineHeight: 32,
  },
  welcomeSub: {
    fontSize: 14,
    color: '#5A6478',
    marginTop: 6,
    lineHeight: 22,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  gridItem: {
    width: '47%',
    backgroundColor: brand.white,
    borderRadius: 20,
    padding: 20,
    alignItems: 'flex-start',
  },
  gridItemWide: {
    width: '100%',
  },
  gridIconWrap: {
    marginBottom: 12,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: brand.ibkDeepBlue,
    marginBottom: 4,
  },
  gridDesc: {
    fontSize: 12,
    color: '#5A6478',
    lineHeight: 18,
  },
  activityCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: brand.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: brand.ibkDeepBlue,
    marginBottom: 16,
  },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  activityLabel: {
    fontSize: 14,
    color: '#5A6478',
  },
  activityValue: {
    fontSize: 14,
    fontWeight: '600',
    color: brand.ibkBlue,
  },
  activityDivider: {
    height: 1,
    backgroundColor: '#EEF2F7',
  },
});

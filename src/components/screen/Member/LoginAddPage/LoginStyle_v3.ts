import { StyleSheet } from 'react-native';
import { brand } from '../../../../public/style/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: brand.white,
    borderRadius: 28,
    padding: 32,
    shadowColor: '#002266',
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E6F3FB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: brand.ibkBlue,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: brand.ibkDeepBlue,
    lineHeight: 36,
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 14,
    color: '#5A6478',
    lineHeight: 22,
    marginBottom: 32,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8EEF5',
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: brand.ibkDeepBlue,
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: brand.ibkDeepBlue,
    backgroundColor: '#F3F6FA',
    marginBottom: 24,
  },
  button: {
    backgroundColor: brand.ibkDeepBlue,
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#B8C9DC',
  },
  buttonText: {
    color: brand.white,
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 12,
    color: '#8A94A6',
    lineHeight: 18,
  },
});

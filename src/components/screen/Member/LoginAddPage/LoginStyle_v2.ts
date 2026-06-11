import { StyleSheet } from 'react-native';
import { brand } from '../../../../public/style/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brand.white,
  },
  hero: {
    backgroundColor: brand.ibkDeepBlue,
    paddingBottom: 48,
    paddingHorizontal: 28,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  heroSlogan: {
    fontSize: 28,
    fontWeight: '800',
    color: brand.white,
    lineHeight: 38,
    marginTop: 24,
  },
  heroSub: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 10,
    lineHeight: 22,
  },
  body: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 32,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: brand.white,
    borderRadius: 20,
    padding: 24,
    marginTop: -56,
    shadowColor: brand.ibkDeepBlue,
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: brand.ibkDeepBlue,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5A6478',
    marginBottom: 8,
  },
  input: {
    height: 54,
    borderWidth: 1.5,
    borderColor: brand.ibkBlue,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: brand.ibkDeepBlue,
    backgroundColor: '#F4F9FD',
  },
  hint: {
    marginTop: 12,
    fontSize: 12,
    color: '#8A94A6',
    lineHeight: 18,
  },
  button: {
    backgroundColor: brand.ibkBlue,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  buttonDisabled: {
    backgroundColor: '#B8C9DC',
  },
  buttonText: {
    color: brand.white,
    fontSize: 17,
    fontWeight: '700',
  },
});

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
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  logoWrap: {
    alignItems: 'center',
    marginBottom: 36,
  },
  slogan: {
    fontSize: 24,
    fontWeight: '700',
    color: brand.ibkDeepBlue,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 8,
  },
  subSlogan: {
    fontSize: 14,
    color: '#5A6478',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#E8EEF5',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: brand.ibkDeepBlue,
    marginBottom: 10,
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: '#D6E4F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: brand.ibkDeepBlue,
    backgroundColor: brand.white,
  },
  button: {
    backgroundColor: brand.ibkBlue,
    marginHorizontal: 28,
    marginBottom: 16,
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
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

import { Platform } from 'react-native';

type CookieMap = Record<string, { value: string }>;

const webCookieManager = {
    getAll: async (): Promise<CookieMap> => {
        if (typeof document === 'undefined') {
            return {};
        }

        return document.cookie.split(';').reduce<CookieMap>((cookies, part) => {
            const trimmed = part.trim();
            if (!trimmed) {
                return cookies;
            }

            const separatorIndex = trimmed.indexOf('=');
            if (separatorIndex === -1) {
                return cookies;
            }

            const name = trimmed.slice(0, separatorIndex);
            const value = decodeURIComponent(trimmed.slice(separatorIndex + 1));
            cookies[name] = { value };
            return cookies;
        }, {});
    },
};

const CookieManager =
    Platform.OS === 'web'
        ? webCookieManager
        : require('@react-native-cookies/cookies').default;

export default CookieManager;

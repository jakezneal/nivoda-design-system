import type { DesignToken } from 'style-dictionary/types';

export const jsonToNestedValue = (token: DesignToken | Record<string, unknown>) => {
    if (!token || typeof token !== 'object') return token;
    if ('value' in token) return token.value;

    const nextObj = {};

    for (const [prop, value] of Object.entries(token)) {
        // @ts-expect-error: can't predict type
        nextObj[prop] = jsonToNestedValue(value);
    }

    return nextObj;
};

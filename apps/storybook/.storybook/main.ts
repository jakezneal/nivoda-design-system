import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
    stories: ['../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@chromatic-com/storybook'),
        getAbsolutePath('@storybook/addon-interactions'),
        getAbsolutePath('@storybook/addon-themes'),
        getAbsolutePath('storybook-addon-remix-react-router'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    viteFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    '@': join(__dirname, '../../../packages/ui/src'),
                },
            },
        };
    },
};

export default config;

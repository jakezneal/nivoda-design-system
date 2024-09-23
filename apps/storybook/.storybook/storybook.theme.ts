import { create } from '@storybook/theming/create';
import tokens from '@nivoda/design-tokens';

const brand = {
    brandImage: 'https://app.nivoda.net/static/media/logo-blue.0be08b00.svg',
    brandTitle: 'Clarity Design System',
    brandUrl: '/',
    brandTarget: '_self',
};

export default create({
    ...brand,
    base: 'light',

    // Typography
    fontBase:
        'Inter, Helvetica, Arial, system-ui, sans-serif, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontCode: 'monospace',

    // Color
    colorPrimary: tokens.base.default.color.base.neutral[950],
    colorSecondary: tokens.base.default.color.base.violet[700],

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    // appBorderColor: '#585C6D',
    appBorderRadius: 4,

    // Text colors
    // textColor: '#10162F',
    // textInverseColor: '#ffffff',

    // Toolbar default and active colors
    // barTextColor: '#9E9E9E',
    // barSelectedColor: '#585C6D',
    // barBg: '#ffffff',

    // Form colors
    // inputBg: '#ffffff',
    inputBorder: tokens.base.default.color.base.violet[700],
    // inputTextColor: '#10162F',
    // inputBorderRadius: 2,
});

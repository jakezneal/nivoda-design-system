import type { Preview, ReactRenderer } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import theme from '@nivoda/mui-theme';
import { themes } from '@storybook/theming';
import './docs-root.css';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/material-icons';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            expanded: true,
            // Once Storybook merges this from the `next` branch this will work.
            // https://github.com/storybookjs/storybook/pull/28734
            disableSave: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                method: 'alphabetical',
            },
        },
        docs: { theme: themes.light },
        toc: true, // 👈 Enables the table of contents
        viewMode: 'docs',
        viewport: {
            viewports: {
                smallMobile: {
                    name: 'Small mobile',
                    styles: { width: '320px', height: '568px' },
                },
                largeMobile: {
                    name: 'Large mobile',
                    styles: { width: '414px', height: '896px' },
                },
                tablet: {
                    name: 'Tablet',
                    styles: { width: '834px', height: '1112px' },
                },
                desktop: {
                    name: 'Desktop',
                    styles: { width: '1280px', height: '1000px' },
                },
            },
        },
    },
    decorators: [
        withThemeFromJSXProvider<ReactRenderer>({
            themes: {
                light: theme,
            },
            defaultTheme: 'light',
            Provider: ThemeProvider,
            GlobalStyles: CssBaseline,
        }),
    ],
};

export default preview;

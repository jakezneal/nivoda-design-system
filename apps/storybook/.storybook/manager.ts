import { addons } from '@storybook/manager-api';

import theme from './storybook.theme';

addons.setConfig({
    sidebar: {
        renderLabel: ({ name, type }) => (type === 'story' ? name.toLowerCase() : name),
    },
    theme,
});

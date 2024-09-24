import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
    component: Switch,
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof Switch>;

export const switchDefault: Story = {
    name: 'Switch',
    args: {
        disabled: false,
        label: 'Switch',
    },
};

export default meta;

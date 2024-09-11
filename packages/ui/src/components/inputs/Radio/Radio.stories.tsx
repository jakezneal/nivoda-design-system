import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
    component: Radio,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
    },
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof Radio>;

export const radio: Story = {
    args: {
        label: 'Radio label',
        disabled: false,
        size: 'medium',
    },
};

export default meta;

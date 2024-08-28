import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
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

type Story = StoryObj<typeof Checkbox>;

export const checkbox: Story = {
    args: {
        label: 'Checkbox label',
        disabled: false,
        size: 'medium',
        indeterminate: false,
    },
};

export default meta;

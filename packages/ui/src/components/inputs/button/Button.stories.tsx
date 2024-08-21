import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['text', 'contained', 'outlined'],
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'error', 'success'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof Button>;

export const button: Story = {
    args: {
        color: 'primary',
        variant: 'contained',
        size: 'large',
        disabled: false,
    },
    render: (args) => <Button {...args}>Hello, World</Button>,
};

export default meta;

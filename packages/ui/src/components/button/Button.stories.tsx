import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
    args: {
        label: 'Hello World',
        variant: 'contained',
    },
};

export default meta;

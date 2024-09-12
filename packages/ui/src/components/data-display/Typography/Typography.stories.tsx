import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
    component: Typography,
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof meta>;

export const typography: Story = {};

export default meta;

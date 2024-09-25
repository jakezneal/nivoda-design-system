import type { Meta, StoryObj } from '@storybook/react';

import { LinearProgress, type LinearProgressProps } from './LinearProgress';

interface LinearProgressPropsAndCustomArgs extends LinearProgressProps {}

const meta = {
    component: LinearProgress,
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary', 'error', 'success'],
        },
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return <LinearProgress sx={{ width: 400 }} {...args} />;
    },
} satisfies Meta<LinearProgressPropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

export const linearProgress: Story = {
    args: {
        color: 'primary',
        value: 50,
    },
};

export default meta;

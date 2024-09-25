import type { Meta, StoryObj } from '@storybook/react';

import { CircularProgress, type CircularProgressProps } from './CircularProgress';

interface CircularProgressPropsAndCustomArgs extends CircularProgressProps {}

const meta = {
    component: CircularProgress,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return <CircularProgress {...args} />
    },
} satisfies Meta<CircularProgressPropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

export const circularProgress: Story = {
    args: {},
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from './Paper';

const meta: Meta<typeof Paper> = {
    component: Paper,
    parameters: {
        layout: 'centered',
    },
    render: (args) => (
        <Paper {...args}>
            <>
                <h1>Paper</h1>
                <p>Paper body goes here</p>
            </>
        </Paper>
    ),
};

type Story = StoryObj<typeof meta>;

export const paper: Story = {
    args: {},
};

export default meta;

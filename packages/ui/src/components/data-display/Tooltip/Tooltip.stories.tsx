import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';
import { Button } from '@mui/material';

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button>Hover me</Button>
        </Tooltip>
    ),
};

type Story = StoryObj<typeof meta>;

export const tooltip: Story = {
    args: {
        title: 'This is a tooltip',
    },
};

export default meta;

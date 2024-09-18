import type { Meta, StoryObj } from '@storybook/react';
import { Box as MuiBox } from '@mui/material';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        min: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
        },
        max: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
        },
        step: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
        },
        size: {
            control: { type: 'select' },
            options: ['medium', 'small'],
        },
    },
    render: (args) => (
        <MuiBox sx={{ width: 200 }}>
            <Slider {...args} />
        </MuiBox>
    ),
};

type Story = StoryObj<typeof Slider>;

export const slider: Story = {
    args: {
        disabled: false,
        min: 0,
        max: 100,
        shiftStep: 10,
        size: 'medium',
        step: 1,
    },
};

export default meta;

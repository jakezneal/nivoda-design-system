import type { Meta, StoryObj } from '@storybook/react';
import DeleteIcon from '@mui/icons-material/Delete';

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
        startIcon: {
            control: { type: 'boolean' },
        },
        endIcon: {
            control: { type: 'boolean' },
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
        startIcon: false,
        endIcon: false,
    },
    render: (args) => {
        const { startIcon, endIcon } = args;

        return (
            <Button
                {...args}
                startIcon={startIcon ? <DeleteIcon /> : undefined}
                endIcon={endIcon ? <DeleteIcon /> : undefined}
            >
                Button
            </Button>
        );
    },
};

export default meta;

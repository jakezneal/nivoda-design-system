import type { Meta, StoryObj } from '@storybook/react';
import Search from '@mui/icons-material/Search';

import { TextField } from './TextField';
import type { TextFieldProps } from './TextField';
import { InputAdornment } from '@mui/material';

const meta: Meta<typeof TextField> = {
    component: TextField,
    decorators: [
        (Story) => (
            <div style={{ width: '260px' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['text', 'password', 'email'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
        // @ts-ignore
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

type Story = StoryObj<typeof TextField>;

const defaultArgs: TextFieldProps = {
    id: 'text-field',
    type: 'text',
    name: 'text-field',
    placeholder: 'Placeholder',
    error: false,
    errorText: 'Incorrect value',
    disabled: false,
    size: 'medium',
    // @ts-ignore
    startIcon: false,
    endIcon: false,
    multiline: false,
};

export const textField: Story = {
    args: {
        ...defaultArgs,
    },
    render: (args) => {
        // @ts-ignore
        const { startIcon, endIcon } = args;

        return (
            <TextField
                {...args}
                startAdornment={startIcon ? <Search /> : undefined}
                endAdornment={endIcon ? <Search /> : undefined}
            />
        );
    },
};

export default meta;

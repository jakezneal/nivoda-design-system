import type { Meta, StoryObj } from '@storybook/react';
import Search from '@mui/icons-material/Search';

import { TextField } from './TextField';
import type { TextFieldProps } from './TextField';

interface TextFieldPropsAndCustomArgs extends TextFieldProps {
    startIcon?: boolean;
    endIcon?: boolean;
}

const meta: Meta<TextFieldPropsAndCustomArgs> = {
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

type Story = StoryObj<typeof meta>;

const defaultArgs: TextFieldPropsAndCustomArgs = {
    id: 'text-field',
    type: 'text',
    name: 'text-field',
    placeholder: 'Placeholder',
    error: false,
    errorText: 'Incorrect value',
    disabled: false,
    size: 'medium',
    startIcon: false,
    endIcon: false,
    multiline: false,
};

export const textField: Story = {
    args: {
        ...defaultArgs,
    },
    render: (args) => {
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

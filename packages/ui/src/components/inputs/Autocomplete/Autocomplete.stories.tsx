import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete, AutocompleteProps } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
    component: Autocomplete,
    decorators: [
        (Story) => (
            <div style={{ width: '200px' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
    },
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof Autocomplete>;

const defaultArgs: AutocompleteProps = {
    options: [
        { id: '1', label: 'Option 1' },
        { id: '2', label: 'Option 2' },
        { id: '3', label: 'Option 3' },
    ],
    id: 'autocomplete',
    name: 'autocomplete',
    error: false,
    errorText: 'Incorrect value',
    helpText: '',
    placeholder: '',
    size: 'medium',
    disabled: false,
};

export const autocomplete: Story = {
    args: {
        ...defaultArgs,
    },
};

export const autocompleteMultiple: Story = {
    args: {
        ...defaultArgs,
        multiple: true,
    },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { Select, SelectProps } from './Select';

const meta: Meta<typeof Select> = {
    component: Select,
    decorators: [
        (Story) => (
            <div style={{ width: '500px' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof Select>;

const defaultArgs: SelectProps = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    id: 'select',
    error: false,
    errorText: 'Incorrect value',
    helpText: '',
    disabled: false,
    required: false,
};

export const select: Story = {
    args: {
        ...defaultArgs,
    },
};

// export const selectMultiple: Story = {
//     args: {
//         ...defaultArgs,
//         multiple: true,
//     },
// };

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
    component: Alert,
    argTypes: {
        severity: {
            options: ['success', 'info', 'warning', 'error'],
            control: { type: 'select' },
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => <Alert {...args}>Alert body should go here.</Alert>,
};

type Story = StoryObj<typeof Alert>;

export const alert: Story = {
    args: {
        severity: 'success',
        title: '',
    },
};

export default meta;

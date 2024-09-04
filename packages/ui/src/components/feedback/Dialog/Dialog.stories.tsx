import type { Meta, StoryObj } from '@storybook/react';

import { Dialog, DialogProps } from './Dialog';

interface DialogPropsAndCustomArgs extends DialogProps {
    body?: string;
    scrollable?: boolean;
}

const meta: Meta<DialogPropsAndCustomArgs> = {
    component: Dialog,
    argTypes: {
        primaryButtonColour: {
            control: { type: 'select' },
            options: ['primary', 'error', 'success'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => (
        <Dialog {...args} open={true}>
            {args.body}
        </Dialog>
    ),
};

type Story = StoryObj<DialogPropsAndCustomArgs>;

export const dialog: Story = {
    args: {
        title: 'Are you absolutely sure?',
        description:
            "This action cannot be undone. This will permanently delete your account and remove your data from your servers. We won't be able to recover the data afterwards.",
        body: '',
        primaryButtonColour: 'primary',
        primaryButtonText: 'Confirm',
    },
};

export default meta;

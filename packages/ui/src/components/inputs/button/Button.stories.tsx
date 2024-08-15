import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof Button>;

export const PrimaryContainedLarge: Story = {
    args: {
        label: 'Hello World',
        color: 'primary',
        variant: 'contained',
        size: 'large',
    },
};

export const PrimaryContainedLargeDisabled: Story = {
    args: {
        ...PrimaryContainedLarge.args,
        disabled: true,
    },
};

export const PrimaryContainedMedium: Story = {
    args: {
        ...PrimaryContainedLarge.args,
        size: 'medium',
    },
};

export const PrimaryContainedMediumDisabled: Story = {
    args: {
        ...PrimaryContainedMedium.args,
        disabled: true,
    },
};

export const PrimaryContainedSmall: Story = {
    args: {
        ...PrimaryContainedLarge.args,
        size: 'small',
    },
};

export const PrimaryContainedSmallDisabled: Story = {
    args: {
        ...PrimaryContainedSmall.args,
        disabled: true,
    },
};

export const SecondaryContainedLarge: Story = {
    args: {
        label: 'Hello World',
        color: 'secondary',
        variant: 'contained',
        size: 'large',
    },
};

export const SecondaryContainedLargeDisabled: Story = {
    args: {
        ...SecondaryContainedLarge.args,
        disabled: true,
    },
};

export const SecondaryContainedMedium: Story = {
    args: {
        ...SecondaryContainedLarge.args,
        size: 'medium',
    },
};

export const SecondaryContainedMediumDisabled: Story = {
    args: {
        ...SecondaryContainedMedium.args,
        disabled: true,
    },
};

export const SecondaryContainedSmall: Story = {
    args: {
        ...SecondaryContainedLarge.args,
        size: 'small',
    },
};

export const SecondaryContainedSmallDisabled: Story = {
    args: {
        ...SecondaryContainedSmall.args,
        disabled: true,
    },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof Button>;

/**
 * Contained
 */

// Primary
export const ContainedPrimaryLarge: Story = {
    name: 'Contained/Primary/Large/Default',
    args: {
        label: 'Hello World',
        color: 'primary',
        variant: 'contained',
        size: 'large',
    },
};

export const ContainedPrimaryDisabled: Story = {
    name: 'Contained/Primary/Large/Disabled',
    args: {
        ...ContainedPrimaryLarge.args,
        disabled: true,
    },
};

export const ContainedPrimaryMedium: Story = {
    name: 'Contained/Primary/Medium',
    args: {
        ...ContainedPrimaryLarge.args,
        size: 'medium',
    },
};

export const ContainedPrimaryMediumDisabled: Story = {
    name: 'Contained/Primary/Medium/Disabled',
    args: {
        ...ContainedPrimaryMedium.args,
        disabled: true,
    },
};

export const ContainedPrimarySmall: Story = {
    name: 'Contained/Primary/Small',
    args: {
        ...ContainedPrimaryLarge.args,
        size: 'small',
    },
};

export const ContainedPrimarySmallDisabled: Story = {
    name: 'Contained/Primary/Small/Disabled',
    args: {
        ...ContainedPrimarySmall.args,
        disabled: true,
    },
};

// Secondary
export const ContainedSecondaryLarge: Story = {
    name: 'Contained/Secondary/Large',
    args: {
        label: 'Hello World',
        color: 'secondary',
        variant: 'contained',
        size: 'large',
    },
};

export const ContainedSecondaryLargeDisabled: Story = {
    name: 'Contained/Secondary/Large/Disabled',
    args: {
        ...ContainedSecondaryLarge.args,
        disabled: true,
    },
};

export const ContainedSecondaryMedium: Story = {
    name: 'Contained/Secondary/Medium',
    args: {
        ...ContainedSecondaryLarge.args,
        size: 'medium',
    },
};

export const ContainedSecondaryMediumDisabled: Story = {
    name: 'Contained/Secondary/Medium/Disabled',
    args: {
        ...ContainedSecondaryMedium.args,
        disabled: true,
    },
};

export const ContainedSecondarySmall: Story = {
    name: 'Contained/Secondary/Small',
    args: {
        ...ContainedSecondaryLarge.args,
        size: 'small',
    },
};

export const ContainedSecondarySmallDisabled: Story = {
    name: 'Contained/Secondary/Small/Disabled',
    args: {
        ...ContainedSecondarySmall.args,
        disabled: true,
    },
};

// Error
export const ContainedErrorLarge: Story = {
    name: 'Contained/Error/Large/Default',
    args: {
        label: 'Hello World',
        color: 'error',
        variant: 'contained',
        size: 'large',
    },
};

export const ContainedErrorDisabled: Story = {
    name: 'Contained/Error/Large/Disabled',
    args: {
        ...ContainedErrorLarge.args,
        disabled: true,
    },
};

export const ContainedErrorMedium: Story = {
    name: 'Contained/Error/Medium',
    args: {
        ...ContainedErrorLarge.args,
        size: 'medium',
    },
};

export const ContainedErrorMediumDisabled: Story = {
    name: 'Contained/Error/Medium/Disabled',
    args: {
        ...ContainedErrorMedium.args,
        disabled: true,
    },
};

export const ContainedErrorSmall: Story = {
    name: 'Contained/Error/Small',
    args: {
        ...ContainedErrorLarge.args,
        size: 'small',
    },
};

export const ContainedErrorSmallDisabled: Story = {
    name: 'Contained/Error/Small/Disabled',
    args: {
        ...ContainedErrorSmall.args,
        disabled: true,
    },
};

// Success
export const ContainedSuccessLarge: Story = {
    name: 'Contained/Success/Large/Default',
    args: {
        label: 'Hello World',
        color: 'success',
        variant: 'contained',
        size: 'large',
    },
};

export const ContainedSuccessDisabled: Story = {
    name: 'Contained/Success/Large/Disabled',
    args: {
        ...ContainedSuccessLarge.args,
        disabled: true,
    },
};

export const ContainedSuccessMedium: Story = {
    name: 'Contained/Success/Medium',
    args: {
        ...ContainedSuccessLarge.args,
        size: 'medium',
    },
};

export const ContainedSuccessMediumDisabled: Story = {
    name: 'Contained/Success/Medium/Disabled',
    args: {
        ...ContainedSuccessMedium.args,
        disabled: true,
    },
};

export const ContainedSuccessSmall: Story = {
    name: 'Contained/Success/Small',
    args: {
        ...ContainedSuccessLarge.args,
        size: 'small',
    },
};

export const ContainedSuccessSmallDisabled: Story = {
    name: 'Contained/Success/Small/Disabled',
    args: {
        ...ContainedSuccessSmall.args,
        disabled: true,
    },
};

export default meta;

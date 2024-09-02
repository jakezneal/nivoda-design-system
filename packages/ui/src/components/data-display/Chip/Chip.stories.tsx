import type { Meta, StoryObj } from '@storybook/react';

import { Chip, ChipProps } from './Chip';

interface ChipPropsAndCustomArgs extends ChipProps {
    deletable?: boolean;
}

const meta: Meta<ChipPropsAndCustomArgs> = {
    component: Chip,
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

type Story = StoryObj<typeof meta>;

export const chip: Story = {
    args: {
        label: 'Chip label',
        clickable: false,
        deletable: false,
        size: 'medium',
    },
    render: (args) => {
        const { deletable } = args;

        const chipArgs = {
            ...args,
        };

        if (deletable) {
            chipArgs.onDelete = () => {
                alert('Chip deleted');
            };
        }

        return <Chip {...chipArgs} />;
    },
};

export default meta;

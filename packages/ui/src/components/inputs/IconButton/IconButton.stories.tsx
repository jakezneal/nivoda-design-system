import type { Meta, StoryObj } from '@storybook/react';
import { IconCopy, IconEdit, IconX } from '@tabler/icons-react';

import { IconButton, type IconButtonProps } from './IconButton';

interface IconButtonPropsAndCustomArgs extends IconButtonProps {
    chosenIcon: string;
}

const meta = {
    component: IconButton,
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'error', 'success'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        chosenIcon: {
            control: { type: 'select' },
            options: ['copy', 'edit', 'x'],
            description: 'Takes a Tabler icon',
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        const { chosenIcon } = args;

        const Icon = ({ icon }: { icon: string }) => {
            let iconToShow: React.ReactNode = <IconCopy />;

            switch (icon) {
                case 'edit':
                    iconToShow = <IconEdit />;
                    break;
                case 'x':
                    iconToShow = <IconX />;
                    break;
                default:
                    iconToShow = <IconCopy />;
                    break;
            }

            return iconToShow;
        };

        return (
            <IconButton {...args}>
                <Icon icon={chosenIcon} />
            </IconButton>
        );
    },
} satisfies Meta<IconButtonPropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

export const iconButton: Story = {
    args: {
        chosenIcon: 'copy',
        color: 'primary',
        size: 'medium',
        disabled: false,
    },
};

export default meta;

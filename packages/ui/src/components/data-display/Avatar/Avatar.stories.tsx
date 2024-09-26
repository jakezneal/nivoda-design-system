import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, type AvatarProps } from './Avatar';

interface AvatarPropsAndCustomArgs extends AvatarProps {}

const meta = {
    component: Avatar,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return <Avatar {...args} />;
    },
} satisfies Meta<AvatarPropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

export const avatar: Story = {
    args: {},
    render: (args) => <Avatar {...args}>JA</Avatar>,
};

export const avatarWithImage: Story = {
    args: {
        src: 'https://mighty.tools/mockmind-api/content/human/41.jpg',
    },
};

export default meta;

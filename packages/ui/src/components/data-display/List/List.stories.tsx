import type { Meta, StoryObj } from '@storybook/react';

import { List, ListGroupProps } from './List';
import Switch from '@/components/inputs/Switch/Switch';
import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';

const meta: Meta<typeof List> = {
    component: List,
    decorators: [
        (Story) => (
            <div style={{ width: '360px' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof List>;

export const list: Story = {
    args: {
        items: [
            {
                id: 'group-1',
                items: [
                    {
                        id: 'item-1',
                        primary: 'Menu item label',
                    },
                ],
            },
        ],
    },
};

export const listWithDescription: Story = {
    name: 'List (With Description)',
    args: {
        items: [
            {
                id: 'group-1',
                items: [
                    {
                        id: 'item-1',
                        primary: 'Menu item label',
                        secondary: 'Short description about this menu item',
                    },
                ],
            },
        ],
    },
};

export const listWithDescriptionDisabled: Story = {
    name: 'List (With Description - Disabled)',
    args: {
        items: [
            {
                id: 'group-1',
                items: [
                    {
                        id: 'item-1',
                        primary: 'Menu item label',
                        secondary: 'Short description about this menu item',
                        disabled: true,
                    },
                ],
            },
        ],
    },
};

export const listWithEndIcon: Story = {
    name: 'List (With End Icon)',
    args: {
        items: [
            {
                id: 'group-1',
                items: [
                    {
                        id: 'item-1',
                        primary: 'Menu item label',
                        secondary: 'Short description about this menu item',
                        endIcon: <IconChevronRight />,
                    },
                ],
            },
        ],
    },
};

export const listWithStartIcon: Story = {
    name: 'List (With Start Icon)',
    args: {
        items: [
            {
                id: 'group-1',
                items: [
                    {
                        id: 'item-1',
                        primary: 'Menu item label',
                        secondary: 'Short description about this menu item',
                        startIcon: <IconExternalLink />,
                    },
                ],
            },
        ],
    },
};

export const listWithSubheader: Story = {
    name: 'List (With Subheader)',
    args: {
        items: [
            {
                id: 'group-1',
                subheader: 'MENU GROUP LABEL',
                items: [
                    {
                        id: 'item-1',
                        primary: 'Menu item label',
                        secondary: 'Short description about this menu item',
                        endIcon: <IconChevronRight />,
                    },
                ],
            },
        ],
    },
};

const groupLength = 5;
const itemLength = 3;

const kitchenSinkItems: ListGroupProps[] = Array.from({ length: groupLength }).map((_, groupIndex) => ({
    id: `group-${groupIndex}`,
    subheader: 'Menu Group Label',
    items: Array.from({ length: itemLength }).map((_, itemIndex) => ({
        id: `group-${groupIndex}-item-${itemIndex}`,
        primary: 'Menu item label',
        secondary: itemIndex > 0 ? 'Short description about this menu item' : undefined,
        disabled: itemIndex === itemLength - 1,
        endIcon: groupIndex > 0 && groupIndex !== groupLength - 1 ? <IconChevronRight /> : undefined,
        startIcon: groupIndex === 3 ? <IconExternalLink /> : undefined,
        secondaryAction: groupIndex === groupLength - 1 ? <Switch /> : undefined,
    })),
}));

export const listKitchenSink: Story = {
    name: 'List (Kitchen Sink)',
    args: {
        items: kitchenSinkItems,
    },
};

export default meta;

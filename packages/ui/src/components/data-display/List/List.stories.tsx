import type { Meta, StoryObj } from '@storybook/react';

import { List } from './List';
import {
    listItems,
    listWithDescriptionItems,
    listWithDescriptionDisabledItems,
    listWithEndIconItems,
    listWithStartIconItems,
    listWithSubheaderItems,
    listKitchenSinkItems,
} from '@/components/shared';

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
        items: listItems,
    },
};

export const listWithDescription: Story = {
    name: 'List (With Description)',
    args: {
        items: listWithDescriptionItems,
    },
};

export const listWithDescriptionDisabled: Story = {
    name: 'List (With Description - Disabled)',
    args: {
        items: listWithDescriptionDisabledItems,
    },
};

export const listWithEndIcon: Story = {
    name: 'List (With End Icon)',
    args: {
        items: listWithEndIconItems,
    },
};

export const listWithStartIcon: Story = {
    name: 'List (With Start Icon)',
    args: {
        items: listWithStartIconItems,
    },
};

export const listWithSubheader: Story = {
    name: 'List (With Subheader)',
    args: {
        items: listWithSubheaderItems,
    },
};

export const listKitchenSink: Story = {
    name: 'List (Kitchen Sink)',
    args: {
        items: listKitchenSinkItems,
    },
};

export default meta;

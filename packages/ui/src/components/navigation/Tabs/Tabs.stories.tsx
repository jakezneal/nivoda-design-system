import type { Meta, StoryObj } from '@storybook/react';
import { Outlet } from 'react-router-dom';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

import { type Tab, Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    parameters: {
        layout: 'centered',
        reactRouter: reactRouterParameters({
            routing: {
                path: '/tabs/:tabId',
            },
        }),
    },
    decorators: [withRouter],
    render: (args) => (
        <Tabs {...args}>
            <Outlet />
        </Tabs>
    ),
};

type Story = StoryObj<typeof meta>;

const items = [
    {
        label: 'Pending',
        route: '/tabs/pending',
    },
    {
        label: 'Active',
        route: '/tabs/active',
    },
    {
        label: 'Rejected',
        route: '/tabs/rejected',
    },
    {
        label: 'Expired',
        route: '/tabs/expired',
    },
] satisfies Tab[];

const scrollableItems = Array.from({ length: 20 }).map((_, index) => ({
    label: `Tab ${index + 1}`,
    route: `/tabs/${index + 1}`,
})) satisfies Tab[];

export const tabs: Story = {
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { tabId: 'pending' },
            },
        }),
    },
    args: {
        label: 'Hold request tab',
        tabs: items,
    },
};

export const tabsScrollable: Story = {
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { tabId: '1' },
            },
        }),
    },
    args: {
        label: 'Hold request tab',
        tabs: scrollableItems,
    },
};

export const tabsWithBadges: Story = {
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                pathParams: { tabId: 'pending' },
            },
        }),
    },
    args: {
        label: 'Hold request tab',
        tabs: [...items].map((tab) => ({ ...tab, badgeCount: 123 })),
    },
};

export default meta;

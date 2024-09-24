import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs, type BreadcrumbsProps } from './Breadcrumbs';

interface BreadcrumbsPropsAndCustomArgs extends BreadcrumbsProps {}

const meta = {
    component: Breadcrumbs,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return <Breadcrumbs {...args} />;
    },
} satisfies Meta<BreadcrumbsPropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

const items = 5;

export const breadcrumbs: Story = {
    args: {
        items: Array.from({ length: items }).map((_, index) => ({
            label: `Section ${index + 1}`,
            href: index === items - 1 ? undefined : `#`,
        })),
    },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, type AccordionProps } from './Accordion';

interface AccordionPropsAndCustomArgs extends AccordionProps {}

const meta: Meta<AccordionPropsAndCustomArgs> = {
    component: Accordion,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '800px' }}>
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        return <Accordion {...args} />;
    },
};

type Story = StoryObj<typeof meta>;

export const accordion: Story = {
    args: {
        items: Array.from({ length: 3 }).map((_, index) => ({
            id: index,
            title: `Section ${index + 1}`,
            children: <div>Content</div>,
        })),
    },
};

export default meta;

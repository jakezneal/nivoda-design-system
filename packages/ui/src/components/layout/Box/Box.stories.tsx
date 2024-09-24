import type { Meta, StoryObj } from '@storybook/react';

import { Box, type BoxProps } from './Box';

interface BoxPropsAndCustomArgs extends BoxProps {}

const meta = {
    component: Box,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return (
            <Box sx={{ padding: 4, border: '1px solid #e7e5e4' }} {...args}>
                This is a simple containing box
            </Box>
        );
    },
} satisfies Meta<BoxPropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

export const box: Story = {
    args: {},
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';
import { Box as MuiBox } from '@mui/material';

import { Skeleton, type SkeletonProps } from './Skeleton';

interface SkeletonPropsAndCustomArgs extends SkeletonProps {}

const meta = {
    component: Skeleton,
    argTypes: {
        animation: {
            control: { type: 'select' },
            options: ['pulse', 'wave', 'none'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return <Skeleton {...args} />;
    },
} satisfies Meta<SkeletonPropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

export const skeleton: Story = {
    args: {
        animation: 'pulse',
    },
    render: (args) => (
        <MuiBox sx={{ width: 250 }}>
            <Skeleton variant="rectangular" width={250} height={150} {...args} />
            <MuiBox sx={{ pt: 0.5 }}>
                <Skeleton {...args} />
                <Skeleton width="60%" {...args} />
            </MuiBox>
        </MuiBox>
    ),
};

export default meta;

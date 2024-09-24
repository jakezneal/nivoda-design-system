import type { Meta, StoryObj } from '@storybook/react';
import { Typography as MuiTypography, Divider as MuiDivider, Box as MuiBox, Chip as MuiChip } from '@mui/material';
import { IconCopy, IconHelp } from '@tabler/icons-react';
import { Checkbox } from '@/components/inputs/Checkbox/Checkbox';

import { Card, type CardProps } from './Card';

interface CardPropsAndCustomArgs extends CardProps {}

const meta: Meta<CardPropsAndCustomArgs> = {
    component: Card,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '350px' }}>
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        return (
            <Card variant="tight" {...args}>
                <MuiBox sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <MuiBox sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                        <MuiBox sx={{ display: 'flex', gap: '12px' }}>
                            <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                <MuiTypography variant="caption">GIA</MuiTypography>
                                <MuiTypography variant="caption">1206011112</MuiTypography>
                                <IconCopy size={16} />
                            </MuiBox>
                            <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                <MuiTypography variant="caption">Stock ID</MuiTypography>
                                <MuiTypography variant="caption">SN12060</MuiTypography>
                                <IconCopy size={16} />
                            </MuiBox>
                        </MuiBox>
                        <MuiTypography variant="h6">Round 1.46ct F VS1 EX EX EX None</MuiTypography>
                        <MuiBox sx={{ display: 'flex', gap: '8px' }}>
                            <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                <MuiTypography variant="caption">T</MuiTypography>
                                <MuiTypography variant="caption">56%</MuiTypography>
                            </MuiBox>
                            <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                <MuiTypography variant="caption">D</MuiTypography>
                                <MuiTypography variant="caption">64.8%</MuiTypography>
                            </MuiBox>
                            <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                <MuiTypography variant="caption">R</MuiTypography>
                                <MuiTypography variant="caption">0.99</MuiTypography>
                            </MuiBox>
                            <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                <MuiTypography variant="caption">M</MuiTypography>
                                <MuiTypography variant="caption">6.20x6.26x4.04</MuiTypography>
                            </MuiBox>
                        </MuiBox>
                        <MuiBox sx={{ display: 'flex', gap: '4px' }}>
                            <MuiChip label="No shade" size="small" />
                            <MuiChip label="Excellent luster" size="small" />
                            <MuiChip label="100% eye clean" size="small" />
                        </MuiBox>
                    </MuiBox>
                    <MuiDivider />
                    <MuiBox sx={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                        <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <MuiTypography variant="caption">Express Delivery</MuiTypography>
                            <MuiTypography variant="caption">1-2 business days</MuiTypography>
                        </MuiBox>
                        <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <Checkbox label="Add returnable option for a fee" />
                            <IconHelp size={16} />
                        </MuiBox>
                    </MuiBox>
                    <MuiDivider />
                    <MuiBox sx={{ display: 'flex', gap: '4px', flexDirection: 'column' }}>
                        <MuiBox sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <MuiTypography variant="h6">$5,000.00</MuiTypography>
                            <MuiChip label="-36.20%" size="small" />
                        </MuiBox>
                        <MuiTypography variant="caption">Total price · €6,568.72 · $4,228,74 per carat</MuiTypography>
                    </MuiBox>
                </MuiBox>
            </Card>
        );
    },
};

type Story = StoryObj<typeof meta>;

export const card: Story = {
    args: {},
};

export default meta;

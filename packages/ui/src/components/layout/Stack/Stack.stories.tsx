import type { Meta, StoryObj } from '@storybook/react';
import {
    Box as MuiBox,
    Typography as MuiTypography,
    Chip as MuiChip,
    Divider as MuiDivider,
    Divider,
} from '@mui/material';
import { IconTrash } from '@tabler/icons-react';

import { Stack, type StackProps } from './Stack';

interface StackPropsAndCustomArgs extends StackProps {}

const CartItem = () => (
    <MuiBox sx={{ display: 'flex', gap: '16px', p: '16px', alignItems: 'flex-start' }}>
        <img src="https://via.placeholder.com/64" alt="Cart Item" />
        <MuiBox sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <MuiBox sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <MuiTypography variant="subtitle2">Cushion Brilliant 1.00ct H VS2 VG EX VG Faint</MuiTypography>
                <MuiBox sx={{ display: 'flex', gap: '11px' }}>
                    <MuiTypography variant="caption">GIA 7458574931</MuiTypography>
                    <MuiTypography variant="caption">Stock ID 7458574931</MuiTypography>
                </MuiBox>
            </MuiBox>
            <MuiBox sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <MuiTypography variant="subtitle2">$1,234,567.89</MuiTypography>
                    <MuiChip label="-41.01%" size="small" />
                </MuiBox>
                <MuiTypography variant="caption">€1,234,567.89</MuiTypography>
            </MuiBox>
            <MuiBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <IconTrash size={16} />
                <MuiTypography variant="caption">Remove</MuiTypography>
            </MuiBox>
        </MuiBox>
    </MuiBox>
);

const meta = {
    component: Stack,
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['row', 'column'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return (
            <Stack sx={{ width: args.direction === 'column' ? '500px' : 'auto' }} {...args}>
                {[1, 2, 3].map((_, index) => (
                    <>
                        <CartItem key={index} />
                        <Divider key={`divider-${index}`} />
                    </>
                ))}
            </Stack>
        );
    },
} satisfies Meta<StackPropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

export const stack: Story = {
    args: {
        spacing: 0,
        direction: 'column',
    },
};

export default meta;

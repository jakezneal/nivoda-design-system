import type { Meta, StoryObj } from '@storybook/react';

import { Drawer, DrawerProps } from './Drawer';
import { useState } from 'react';
import {
    Button as MuiButton,
    Box as MuiBox,
    Divider as MuiDivider,
    Typography as MuiTypography,
    IconButton as MuiIconButton,
} from '@mui/material';
import { IconArrowBarToRight } from '@tabler/icons-react';

const DrawerWithHooks = ({ ...rest }: DrawerProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <MuiButton onClick={toggleDrawer(true)}>Open Drawer</MuiButton>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{ variant: 'tight', sx: { width: '400px' } }}
                {...rest}
            >
                <MuiBox
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                >
                    <MuiBox>
                        <MuiBox
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '20px',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <MuiTypography variant="subtitle1">Transaction details</MuiTypography>
                            <MuiIconButton onClick={toggleDrawer(false)} sx={{ padding: 0 }}>
                                <IconArrowBarToRight />
                            </MuiIconButton>
                        </MuiBox>
                        <MuiDivider />
                    </MuiBox>
                    <MuiBox sx={{ height: '100%', padding: '20px' }}>
                        <MuiTypography variant="body1">Content goes here</MuiTypography>
                    </MuiBox>
                    <MuiBox>
                        <MuiDivider />
                        <MuiBox
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '12px',
                                padding: '20px',
                                justifyContent: 'center',
                            }}
                        >
                            <MuiButton variant="contained" color="primary" sx={{ width: '100%' }} disabled>
                                Reset
                            </MuiButton>
                            <MuiButton
                                variant="contained"
                                color="primary"
                                sx={{ width: '100%' }}
                                onClick={toggleDrawer(false)}
                            >
                                Save and close
                            </MuiButton>
                        </MuiBox>
                    </MuiBox>
                </MuiBox>
            </Drawer>
        </>
    );
};

const meta: Meta<typeof Drawer> = {
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        anchor: {
            control: { type: 'select' },
            options: ['left', 'right'],
        },
        variant: {
            control: { type: 'select' },
            options: ['permanent', 'persistent', 'temporary'],
        },
    },
    render: (args) => <DrawerWithHooks {...args} />,
};

type Story = StoryObj<typeof Drawer>;

export const drawer: Story = {
    args: {
        anchor: 'right',
        hideBackdrop: false,
        transitionDuration: {
            appear: 300,
            enter: 300,
            exit: 300,
        },
        variant: 'temporary',
    },
};

export default meta;

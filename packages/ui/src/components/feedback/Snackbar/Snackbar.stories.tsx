import type { Meta, StoryObj } from '@storybook/react';

import { Snackbar, SnackbarProps } from './Snackbar';
import React, { useState } from 'react';
import Button from '@/components/inputs/Button/Button';
import { SnackbarCloseReason } from '@mui/material/Snackbar';

interface SnackbarPropsAndCustomArgs extends SnackbarProps {}

const SnackbarWithHooks = ({ autoHideDuration, ...rest }: SnackbarPropsAndCustomArgs) => {
    const [open, setOpen] = useState(true); // TODO: Change back to false.

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                {...rest}
                open={open}
                autoHideDuration={autoHideDuration ?? null}
                onClose={handleClose}
                handleClose={() => setOpen(false)}
            />
        </>
    );
};

const meta: Meta<SnackbarPropsAndCustomArgs> = {
    component: Snackbar,
    argTypes: {
        severity: {
            options: ['success', 'info', 'warning', 'error'],
            control: { type: 'select' },
        },
        autoHideDuration: {
            control: { type: 'number' },
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => <SnackbarWithHooks {...args} />,
};

type Story = StoryObj<SnackbarPropsAndCustomArgs>;

export const snackbar: Story = {
    args: {
        title: 'Updates have been made to your profile',
        severity: 'success',
        description: 'Your team has made changes to your company profile since you last logged in.',
        icon: false,
        autoHideDuration: null,
        showAction: false,
        actionText: 'Review changes',
    },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';

import { Snackbar, SnackbarProps } from './Snackbar';
import React, { useState } from 'react';
import Button from '@/components/inputs/Button/Button';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { IconAlertTriangle, IconCircleCheck, IconHelpCircle, IconInfoCircle, IconX } from '@tabler/icons-react';
import { IconButton } from '@mui/material';

interface SnackbarPropsAndCustomArgs extends SnackbarProps {
    showIcon?: boolean;
    chosenIcon?: string;
    showAction?: boolean;
    actionText?: string;
}

const SnackbarWithHooks = ({
    showIcon,
    chosenIcon,
    severity,
    autoHideDuration,
    showAction,
    actionText,
    ...rest
}: SnackbarPropsAndCustomArgs) => {
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

    const action = (
        <>
            {showAction && (
                <Button variant="text" color={severity} onClick={handleClose} size="small">
                    {actionText ?? 'Try again'}
                </Button>
            )}
            <IconButton onClick={handleClose}>
                <IconX size={16} />
            </IconButton>
        </>
    );

    const AlertIcon = ({ icon }: { icon: string }) => {
        let iconToShow: React.ReactNode = <IconAlertTriangle />;

        switch (icon) {
            case 'info-circle':
                iconToShow = <IconInfoCircle />;
                break;
            case 'circle-check':
                iconToShow = <IconCircleCheck />;
                break;
            case 'help-circle':
                iconToShow = <IconHelpCircle />;
                break;
            default:
                iconToShow = <IconAlertTriangle />;
                break;
        }

        return iconToShow;
    };

    return (
        <>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                {...rest}
                icon={showIcon ? <AlertIcon icon={chosenIcon ?? 'alert-triangle'} /> : false}
                open={open}
                autoHideDuration={autoHideDuration ?? null}
                onClose={handleClose}
                action={action}
                severity={severity}
                sx={{ minWidth: '450px' }}
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
        showIcon: {
            control: { type: 'boolean' },
        },
        chosenIcon: {
            control: { type: 'select' },
            options: ['alert-triangle', 'info-circle', 'circle-check', 'help-circle'],
            description: 'Takes a Tabler icon',
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
        title: 'Uh oh! Something went wrong',
        severity: 'error',
        description: 'There was a problem with your request.',
        showIcon: false,
        autoHideDuration: null,
        showAction: false,
        actionText: 'Try again',
    },
};

export default meta;

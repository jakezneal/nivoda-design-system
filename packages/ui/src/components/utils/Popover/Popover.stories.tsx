import type { Meta, StoryObj } from '@storybook/react';

import { Popover, PopoverProps } from './Popover';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';

interface PopoverPropsAndCustomArgs extends PopoverProps {
    content?: string;
}

const PopoverWithHooks = ({ content, ...rest }: PopoverPropsAndCustomArgs) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;

    return (
        <>
            <Button onClick={handleClick}>Open Popover</Button>
            <Popover
                {...rest}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                elevation={0}
            >
                <Typography>{content}</Typography>
            </Popover>
        </>
    );
};

const meta: Meta<PopoverPropsAndCustomArgs> = {
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <PopoverWithHooks {...args} />,
};

type Story = StoryObj<PopoverPropsAndCustomArgs>;

export const popover: Story = {
    args: {
        content: 'Popover content goes here',
    },
};

export default meta;

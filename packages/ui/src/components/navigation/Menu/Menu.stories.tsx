import type { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuProps } from './Menu';
import Button from '@/components/inputs/Button/Button';
import { useState } from 'react';
import {
    listItems,
    listWithDescriptionItems,
    listWithDescriptionDisabledItems,
    listWithEndIconItems,
    listWithStartIconItems,
    listWithSubheaderItems,
    listKitchenSinkItems,
} from '@/components/shared';

interface MenuPropsAndCustomArgs extends MenuProps {}

const MenuWithHooks: typeof Menu = ({ ...rest }: MenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button onClick={handleClick}>Open Menu</Button>
            <Menu
                {...rest}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ sx: { width: '360px' } }}
            />
        </>
    );
};

const meta: Meta<MenuPropsAndCustomArgs> = {
    component: Menu,
    render: (args) => <MenuWithHooks {...args} />,
};

type Story = StoryObj<typeof meta>;

export const menu: Story = {
    args: {
        items: listItems,
    },
};

export const menuWithDescription: Story = {
    name: 'Menu (With Description)',
    args: {
        items: listWithDescriptionItems,
    },
};

export const menuWithDescriptionDisabled: Story = {
    name: 'Menu (With Description - Disabled)',
    args: {
        items: listWithDescriptionDisabledItems,
    },
};

export const menuWithEndIcon: Story = {
    name: 'Menu (With End Icon)',
    args: {
        items: listWithEndIconItems,
    },
};

export const menuWithStartIcon: Story = {
    name: 'Menu (With Start Icon)',
    args: {
        items: listWithStartIconItems,
    },
};

export const menuWithSubheader: Story = {
    name: 'Menu (With Subheader)',
    args: {
        items: listWithSubheaderItems,
    },
};

export const menuKitchenSink: Story = {
    name: 'Menu (Kitchen Sink)',
    args: {
        items: listKitchenSinkItems,
    },
};

export default meta;

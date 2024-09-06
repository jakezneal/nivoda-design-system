import {
    Menu as MuiMenu,
    MenuItem as MuiMenuItem,
    ListItemIcon as MuiListItemIcon,
    ListItemText as MuiListItemText,
    ListSubheader as MuiListSubheader,
    Box as MuiBox,
    type MenuProps as MuiMenuProps,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { ListItemProps } from '@/components/data-display/List/List';

export interface MenuGroupProps {
    id: string;
    subheader?: string;
    items: ListItemProps[];
}

export interface MenuProps extends MuiMenuProps {
    items: MenuGroupProps[];
}

export const Menu = ({ items, ...rest }: MenuProps) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const toggleItemSelection = (itemId: string) => {
        if (selectedItem === itemId) {
            setSelectedItem(null);
        } else {
            setSelectedItem(itemId);
        }
    };

    return (
        <MuiMenu {...rest}>
            {items.map(({ id: groupId, subheader, items: menuItems }, index) => (
                <>
                    <MuiBox key={groupId}>
                        {subheader && <MuiListSubheader>{subheader}</MuiListSubheader>}
                        {menuItems.map(
                            ({ id: itemId, primary, secondary, startIcon, endIcon, disabled, secondaryAction }) => (
                                <MuiMenuItem
                                    key={itemId}
                                    selected={selectedItem === itemId}
                                    disabled={disabled}
                                    onClick={() => toggleItemSelection(itemId)}
                                >
                                    {startIcon && <MuiListItemIcon>{startIcon}</MuiListItemIcon>}
                                    <MuiListItemText primary={primary} secondary={secondary} />
                                    {selectedItem === itemId && !secondaryAction && <IconCheck />}
                                    {endIcon && selectedItem !== itemId && endIcon}
                                    {secondaryAction && secondaryAction}
                                </MuiMenuItem>
                            ),
                        )}
                    </MuiBox>
                    {index !== items.length - 1 && <Divider key={`divider-${groupId}-${index}`} />}
                </>
            ))}
            {/* <MuiBox>
                <MuiListSubheader>MENU GROUP LABEL</MuiListSubheader>
                <MuiMenuItem>
                    <MuiListItemText primary="Menu item label" />
                </MuiMenuItem>
                <MuiMenuItem>
                    <MuiListItemText primary="Menu item label" secondary="Short description about this menu item" />
                </MuiMenuItem>
            </MuiBox>
            <Divider />
            <MuiBox>
                <MuiListSubheader>MENU GROUP LABEL</MuiListSubheader>
                <MuiMenuItem>
                    <MuiListItemText primary="Menu item label" />
                    <IconChevronRight />
                </MuiMenuItem>
                <MuiMenuItem>
                    <MuiListItemText primary="Menu item label" secondary="Short description about this menu item" />
                    <IconChevronRight />
                </MuiMenuItem>
                <MuiMenuItem selected>
                    <MuiListItemText primary="Menu item label" secondary="Short description about this menu item" />
                    <IconCheck />
                </MuiMenuItem>
                <MuiMenuItem disabled>
                    <MuiListItemText primary="Menu item label" secondary="Short description about this menu item" />
                </MuiMenuItem>
            </MuiBox>
            <Divider />
            <MuiBox>
                <MuiListSubheader>MENU GROUP LABEL</MuiListSubheader>
                <MuiMenuItem>
                    <MuiListItemIcon>
                        <IconExternalLink />
                    </MuiListItemIcon>
                    <MuiListItemText primary="Menu item label" />
                    <IconChevronRight />
                </MuiMenuItem>
                <MuiMenuItem>
                    <MuiListItemIcon>
                        <IconExternalLink />
                    </MuiListItemIcon>
                    <MuiListItemText primary="Menu item label" />
                </MuiMenuItem>
            </MuiBox> */}
        </MuiMenu>
    );
};

export default Menu;

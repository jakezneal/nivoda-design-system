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
import { ListItemProps } from '@/components/data-display/List/List';
import Checkbox from '@/components/inputs/Checkbox/Checkbox';

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
                <MuiBox key={groupId} sx={{ padding: 0 }}>
                    <MuiBox>
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
                                    {endIcon && selectedItem !== itemId && endIcon}
                                    {secondaryAction && (
                                        <Checkbox
                                            edge="end"
                                            onChange={() => toggleItemSelection(itemId)}
                                            checked={selectedItem === itemId}
                                        />
                                    )}
                                </MuiMenuItem>
                            ),
                        )}
                    </MuiBox>
                    {index !== items.length - 1 && <Divider key={`divider-${groupId}-${index}`} />}
                </MuiBox>
            ))}
        </MuiMenu>
    );
};

export default Menu;

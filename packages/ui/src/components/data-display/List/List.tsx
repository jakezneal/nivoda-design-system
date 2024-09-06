import {
    List as MuiList,
    ListItem as MuiListItem,
    ListItemText as MuiListItemText,
    ListSubheader as MuiListSubheader,
    ListItemButton as MuiListItemButton,
    ListItemIcon as MuiListItemIcon,
    Box as MuiBox,
    Paper as MuiPaper,
    type ListProps as MuiListProps,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';

interface ListItemProps {
    id: string;
    primary: string;
    secondary?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    secondaryAction?: React.ReactNode;
}

export interface ListGroupProps {
    id: string;
    subheader?: string;
    items: ListItemProps[];
}

export interface ListProps extends MuiListProps {
    items: ListGroupProps[];
}

export const List = ({ items, ...rest }: ListProps) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const toggleItemSelection = (itemId: string) => {
        if (selectedItem === itemId) {
            setSelectedItem(null);
        } else {
            setSelectedItem(itemId);
        }
    };

    return (
        <MuiPaper>
            <MuiList {...rest}>
                {items.map(({ id: groupId, subheader, items: menuItems }, index) => (
                    <>
                        <MuiBox key={groupId}>
                            {subheader && <MuiListSubheader>{subheader}</MuiListSubheader>}
                            {menuItems.map(
                                ({ id: itemId, primary, secondary, startIcon, endIcon, disabled, secondaryAction }) => (
                                    <MuiListItem key={itemId} secondaryAction={secondaryAction}>
                                        <MuiListItemButton
                                            selected={selectedItem === itemId}
                                            disabled={disabled}
                                            onClick={() => toggleItemSelection(itemId)}
                                        >
                                            {startIcon && <MuiListItemIcon>{startIcon}</MuiListItemIcon>}
                                            <MuiListItemText primary={primary} secondary={secondary} />
                                            {selectedItem === itemId && !secondaryAction && <IconCheck />}
                                            {endIcon && selectedItem !== itemId && endIcon}
                                        </MuiListItemButton>
                                    </MuiListItem>
                                ),
                            )}
                        </MuiBox>
                        {index !== items.length - 1 && <Divider key={`divider-${groupId}-${index}`} />}
                    </>
                ))}
            </MuiList>
        </MuiPaper>
    );
};

export default List;

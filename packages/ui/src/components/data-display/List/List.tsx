import {
    List as MuiList,
    ListItem as MuiListItem,
    ListItemText as MuiListItemText,
    ListSubheader as MuiListSubheader,
    ListItemButton as MuiListItemButton,
    ListItemIcon as MuiListItemIcon,
    Box as MuiBox,
    Checkbox as MuiCheckbox,
    type ListProps as MuiListProps,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState } from 'react';

export interface ListItemProps {
    id: string;
    primary: string;
    secondary?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    secondaryAction?: boolean;
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
        <MuiBox sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <MuiList {...rest}>
                {items.map(({ id: groupId, subheader, items: menuItems }, index) => (
                    <>
                        <MuiBox key={groupId}>
                            {subheader && <MuiListSubheader>{subheader}</MuiListSubheader>}
                            {menuItems.map(
                                ({ id: itemId, primary, secondary, startIcon, endIcon, disabled, secondaryAction }) => (
                                    <MuiListItem
                                        key={itemId}
                                        secondaryAction={
                                            secondaryAction ? (
                                                <MuiCheckbox
                                                    edge="end"
                                                    onChange={() => toggleItemSelection(itemId)}
                                                    checked={selectedItem === itemId}
                                                />
                                            ) : undefined
                                        }
                                    >
                                        <MuiListItemButton
                                            selected={secondaryAction ? selectedItem === itemId : false}
                                            disabled={disabled}
                                            onClick={secondaryAction ? () => toggleItemSelection(itemId) : undefined}
                                        >
                                            {startIcon && <MuiListItemIcon>{startIcon}</MuiListItemIcon>}
                                            <MuiListItemText
                                                primary={primary}
                                                secondary={secondary}
                                                secondaryTypographyProps={{ variant: 'caption' }}
                                            />
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
        </MuiBox>
    );
};

export default List;

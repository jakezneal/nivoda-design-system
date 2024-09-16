import { ListGroupProps } from './data-display/List/List';
import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';

export const listItems: ListGroupProps[] = [
    {
        id: 'group-1',
        items: [
            {
                id: 'item-1',
                primary: 'Menu item label',
            },
        ],
    },
];

export const listWithDescriptionItems: ListGroupProps[] = [
    {
        id: 'group-1',
        items: [
            {
                id: 'item-1',
                primary: 'Menu item label',
                secondary: 'Short description about this menu item',
            },
        ],
    },
];

export const listWithDescriptionDisabledItems: ListGroupProps[] = [
    {
        id: 'group-1',
        items: [
            {
                id: 'item-1',
                primary: 'Menu item label',
                secondary: 'Short description about this menu item',
                disabled: true,
            },
        ],
    },
];

export const listWithEndIconItems: ListGroupProps[] = [
    {
        id: 'group-1',
        items: [
            {
                id: 'item-1',
                primary: 'Menu item label',
                secondary: 'Short description about this menu item',
                endIcon: <IconChevronRight />,
            },
        ],
    },
];

export const listWithStartIconItems: ListGroupProps[] = [
    {
        id: 'group-1',
        items: [
            {
                id: 'item-1',
                primary: 'Menu item label',
                secondary: 'Short description about this menu item',
                startIcon: <IconExternalLink />,
            },
        ],
    },
];

export const listWithSubheaderItems: ListGroupProps[] = [
    {
        id: 'group-1',
        subheader: 'MENU GROUP LABEL',
        items: [
            {
                id: 'item-1',
                primary: 'Menu item label',
                secondary: 'Short description about this menu item',
                endIcon: <IconChevronRight />,
            },
        ],
    },
];

const groupLength = 5;
const itemLength = 3;

const kitchenSinkItems: ListGroupProps[] = Array.from({ length: groupLength }).map((_, groupIndex) => ({
    id: `group-${groupIndex}`,
    subheader: 'Menu Group Label',
    items: Array.from({ length: itemLength }).map((_, itemIndex) => ({
        id: `group-${groupIndex}-item-${itemIndex}`,
        primary: 'Menu item label',
        secondary: itemIndex > 0 ? 'Short description about this menu item' : undefined,
        disabled: itemIndex === itemLength - 1,
        endIcon: groupIndex > 0 && groupIndex !== groupLength - 1 ? <IconChevronRight /> : undefined,
        startIcon: groupIndex === 3 ? <IconExternalLink /> : undefined,
        secondaryAction: groupIndex === groupLength - 1 ? true : false,
    })),
}));

export const listKitchenSinkItems: ListGroupProps[] = kitchenSinkItems;

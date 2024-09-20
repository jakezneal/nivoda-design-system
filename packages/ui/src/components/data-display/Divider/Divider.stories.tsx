import type { Meta, StoryObj } from '@storybook/react';

import { Divider, type DividerProps } from './Divider';
import {
    Paper as MuiPaper,
    Box as MuiBox,
    List as MuiList,
    ListItem as MuiListItem,
    ListItemText as MuiListItemText,
    ListSubheader as MuiListSubheader,
    ListItemButton as MuiListItemButton,
    ListItemIcon as MuiListItemIcon,
} from '@mui/material';

interface DividerPropsAndCustomArgs extends DividerProps {}

const meta: Meta<DividerPropsAndCustomArgs> = {
    component: Divider,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['fullWidth', 'inset', 'middle'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => (
        <MuiPaper sx={{ width: 200 }} variant="tight">
            <MuiList>
                <MuiBox>
                    <MuiListItem>
                        <MuiListItemButton>
                            <MuiListItemText primary="List item" />
                        </MuiListItemButton>
                    </MuiListItem>
                </MuiBox>
                <Divider {...args} />
                <MuiBox>
                    <MuiListItem>
                        <MuiListItemButton>
                            <MuiListItemText primary="List item" />
                        </MuiListItemButton>
                    </MuiListItem>
                </MuiBox>
            </MuiList>
        </MuiPaper>
    ),
};

type Story = StoryObj<typeof Divider>;

export const divider: Story = {
    args: {
        variant: 'fullWidth',
    },
};

export default meta;

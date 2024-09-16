import type { Meta, StoryObj } from '@storybook/react';
import { Typography as MuiTypography } from '@mui/material';

import { Paper } from './Paper';

// TODO: Move this to global TS file.
declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        tight: true;
        loose: true;
    }
}

const meta: Meta<typeof Paper> = {
    component: Paper,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['tight', 'default', 'loose'],
        },
    },
    render: (args) => (
        <Paper {...args}>
            <>
                <MuiTypography variant="h4" gutterBottom>
                    Paper title goes here
                </MuiTypography>
                <MuiTypography variant="body1" gutterBottom>
                    Paper content goes here
                </MuiTypography>
            </>
        </Paper>
    ),
};

type Story = StoryObj<typeof meta>;

export const paper: Story = {
    args: {
        variant: 'loose',
    },
};

export default meta;

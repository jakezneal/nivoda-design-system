// @ts-nocheck

import tokens from '@nivoda/design-tokens';
import { dialogClasses } from '@mui/material/Dialog';
import { dialogContentClasses } from '@mui/material/DialogContent';
import { dialogActionsClasses } from '@mui/material/DialogActions';
import { dialogTitleClasses } from '@mui/material/DialogTitle';
import { boxClasses } from '@mui/material/Box';
import { buttonBaseClasses } from '@mui/material/ButtonBase';

const MuiDialogStyles = {
    styleOverrides: {
        root: {
            [`& .${dialogClasses.paper}`]: {
                borderRadius: tokens.components.dialog.border.radius,
                padding: `${tokens.components.dialog.padding.vertical} ${tokens.components.dialog.padding.horizontal}`,
                gap: tokens.components.dialog.spacing.root,

                '& .tabler-icon': {
                    cursor: 'pointer',
                    position: 'absolute',
                    right: tokens.components.dialog.icon.right,
                    top: tokens.components.dialog.icon.top,
                },
            },

            [`& .${dialogContentClasses.root}, & .${dialogActionsClasses.root}`]: {
                padding: '0',
            },

            [`& .${dialogTitleClasses.root}`]: {
                padding: '0',
            },

            [`& .${boxClasses.root}`]: {
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.components.dialog.spacing.title,
            },

            [`& .${dialogActionsClasses.root}`]: {
                gap: tokens.components.dialog.spacing.actions,

                [`& .${buttonBaseClasses.root}`]: {
                    margin: 0,
                },
            },
        },
    },
};

export default MuiDialogStyles;

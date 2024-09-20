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

            [`& .${dialogContentClasses.root}`]: {
                borderBottom: `1px solid ${tokens.components.dialog.border.colour}`,
                borderTop: `1px solid ${tokens.components.dialog.border.colour}`,
                padding: `${tokens.components.dialog.padding.content.vertical} ${tokens.components.dialog.padding.content.horizontal}`,
            },

            [`& .${dialogTitleClasses.root}`]: {
                padding: '0',
            },

            [`& .${boxClasses.root}`]: {
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.components.dialog.spacing.title,
                paddingTop: tokens.components.dialog.padding.root.vertical,
                paddingRight: tokens.components.dialog.padding.root.horizontal,
                paddingLeft: tokens.components.dialog.padding.root.horizontal,
            },

            [`& .${dialogActionsClasses.root}`]: {
                gap: tokens.components.dialog.spacing.actions,
                paddingBottom: tokens.components.dialog.padding.root.vertical,
                paddingRight: tokens.components.dialog.padding.root.horizontal,
                paddingLeft: tokens.components.dialog.padding.root.horizontal,

                [`& .${buttonBaseClasses.root}`]: {
                    margin: 0,
                },
            },
        },
    },
};

export default MuiDialogStyles;

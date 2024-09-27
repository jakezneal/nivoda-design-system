import type { Components } from '@mui/material';
import { dialogClasses } from '@mui/material/Dialog';
import { dialogContentClasses } from '@mui/material/DialogContent';
import { dialogActionsClasses } from '@mui/material/DialogActions';
import { dialogTitleClasses } from '@mui/material/DialogTitle';
import { boxClasses } from '@mui/material/Box';
import { buttonBaseClasses } from '@mui/material/ButtonBase';
import {
    ComponentsDialogBorderColour,
    ComponentsDialogBorderRadius,
    ComponentsDialogIconRight,
    ComponentsDialogIconTop,
    ComponentsDialogPaddingContentHorizontal,
    ComponentsDialogPaddingContentVertical,
    ComponentsDialogPaddingRootHorizontal,
    ComponentsDialogPaddingRootVertical,
    ComponentsDialogSpacingActions,
    ComponentsDialogSpacingRoot,
    ComponentsDialogSpacingTitle,
} from '@nivoda/design-tokens';

const MuiDialogStyles: Components['MuiDialog'] = {
    styleOverrides: {
        root: {
            [`& .${dialogClasses.paper}`]: {
                borderRadius: ComponentsDialogBorderRadius,
                gap: ComponentsDialogSpacingRoot,

                '& .tabler-icon': {
                    cursor: 'pointer',
                    position: 'absolute',
                    right: ComponentsDialogIconRight,
                    top: ComponentsDialogIconTop,
                },
            },

            [`& .${dialogContentClasses.root}, & .${dialogActionsClasses.root}`]: {
                padding: '0',
            },

            [`& .${dialogContentClasses.root}`]: {
                borderBottom: `1px solid ${ComponentsDialogBorderColour}`,
                borderTop: `1px solid ${ComponentsDialogBorderColour}`,
                padding: `${ComponentsDialogPaddingContentVertical} ${ComponentsDialogPaddingContentHorizontal}`,
            },

            [`& .${dialogTitleClasses.root}`]: {
                padding: '0',
            },

            [`& .${boxClasses.root}`]: {
                display: 'flex',
                flexDirection: 'column',
                gap: ComponentsDialogSpacingTitle,
                paddingTop: ComponentsDialogPaddingRootVertical,
                paddingRight: ComponentsDialogPaddingRootHorizontal,
                paddingLeft: ComponentsDialogPaddingRootHorizontal,
            },

            [`& .${dialogActionsClasses.root}`]: {
                gap: ComponentsDialogSpacingActions,
                paddingBottom: ComponentsDialogPaddingRootVertical,
                paddingRight: ComponentsDialogPaddingRootHorizontal,
                paddingLeft: ComponentsDialogPaddingRootHorizontal,

                [`& .${buttonBaseClasses.root}`]: {
                    margin: 0,
                },
            },
        },
    },
};

export default MuiDialogStyles;

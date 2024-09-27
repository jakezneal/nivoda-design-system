import type { Components } from '@mui/material';
import { avatarClasses } from '@mui/material/Avatar';
import { ComponentsAvatarBackground, ComponentsAvatarColour } from '@nivoda/design-tokens';

const MuiAvatarStyles: Components['MuiAvatar'] = {
    styleOverrides: {
        root: {
            [`&.${avatarClasses.colorDefault}`]: {
                backgroundColor: ComponentsAvatarBackground,
                color: ComponentsAvatarColour,
            },
        },
    },
};

export default MuiAvatarStyles;

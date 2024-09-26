import type { Components } from '@mui/material';
import { avatarClasses } from '@mui/material/Avatar';
import tokens from '@nivoda/design-tokens';

const MuiAvatarStyles: Components['MuiAvatar'] = {
    styleOverrides: {
        root: {
            [`&.${avatarClasses.colorDefault}`]: {
                backgroundColor: tokens.components.avatar.background,
                color: tokens.components.avatar.colour,
            },
        },
    },
};

export default MuiAvatarStyles;

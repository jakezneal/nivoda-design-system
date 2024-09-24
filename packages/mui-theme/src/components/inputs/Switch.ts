import type { Components } from '@mui/material';
import tokens from '@nivoda/design-tokens';
import { switchClasses } from '@mui/material/Switch';

const MuiSwitchStyles: Components['MuiSwitch'] = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
    styleOverrides: {
        root: {
            width: tokens.components.switch.track.width,
            height: tokens.components.switch.track.height,
            padding: 0,

            [`& .${switchClasses.switchBase}`]: {
                padding: 0,
                marginTop: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,
                marginBottom: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,
                marginLeft: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,

                '&.Mui-checked': {
                    color: tokens.components.switch.thumb.colour.checked,
                    marginLeft: 0,

                    [`& + .${switchClasses.track}`]: {
                        backgroundColor: tokens.components.switch.track.colour.checked,
                        // Opacity isn't exporting incorrectly.
                        // opacity: tokens.components.switch.track.opacity.checked,
                        opacity: 1,
                    },

                    [`&.Mui-disabled + .${switchClasses.track}`]: {
                        backgroundColor: tokens.components.switch.track.colour.checkeddisabled,
                        // Opacity isn't exporting incorrectly.
                        // opacity: tokens.components.switch.track.opacity.checkeddisabled,
                        opacity: 0.5,
                    },
                },

                [`&.Mui-disabled .${switchClasses.thumb}`]: {
                    color: tokens.components.switch.thumb.colour.disabled,
                },

                [`&.Mui-disabled + .${switchClasses.track}`]: {
                    backgroundColor: tokens.components.switch.track.colour.disabled,
                    opacity: 1,
                },
            },

            [`& .${switchClasses.thumb}`]: {
                boxSizing: 'border-box',
                width: tokens.components.switch.thumb.size,
                height: tokens.components.switch.thumb.size,
                boxShadow: 'none',
                color: tokens.components.switch.thumb.colour.default,
            },

            [`& .${switchClasses.track}`]: {
                borderRadius: tokens.components.switch.track.borderradius,
                backgroundColor: tokens.components.switch.track.colour.default,
                // TODO: Add opacity for default state.
                opacity: 1,
            },
        },
    },
};

export default MuiSwitchStyles;

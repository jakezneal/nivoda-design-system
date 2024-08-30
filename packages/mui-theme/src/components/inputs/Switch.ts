// @ts-nocheck

import tokens from '@nivoda/design-tokens';

const MuiSwitchStyles = {
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
            '& .MuiSwitch-switchBase': {
                padding: 0,
                marginTop: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,
                marginBottom: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,
                marginLeft: `calc((${tokens.components.switch.track.height} - ${tokens.components.switch.thumb.size}) / 2)`,
                '&.Mui-checked': {
                    color: tokens.components.switch.thumb.colour.checked,
                    marginLeft: 0,
                    '& + .MuiSwitch-track': {
                        backgroundColor: tokens.components.switch.track.colour.checked,
                        // Opacity isn't exporting incorrectly.
                        // opacity: tokens.components.switch.track.opacity.checked,
                        opacity: 1,
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        backgroundColor: tokens.components.switch.track.colour.checkeddisabled,
                        // Opacity isn't exporting incorrectly.
                        // opacity: tokens.components.switch.track.opacity.checkeddisabled,
                        opacity: 0.5,
                    },
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color: tokens.components.switch.thumb.colour.disabled,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    backgroundColor: tokens.components.switch.track.colour.disabled,
                    opacity: 1,
                },
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: tokens.components.switch.thumb.size,
                height: tokens.components.switch.thumb.size,
                boxShadow: 'none',
                color: tokens.components.switch.thumb.colour.default,
            },
            '& .MuiSwitch-track': {
                borderRadius: tokens.components.switch.track.borderradius,
                backgroundColor: tokens.components.switch.track.colour.default,
                // TODO: Add opacity for default state.
                opacity: 1,
            },
        },
    },
};

export default MuiSwitchStyles;

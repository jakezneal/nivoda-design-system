import type { Components } from '@mui/material';
import { switchClasses } from '@mui/material/Switch';
import {
    ComponentsSwitchThumbColourChecked,
    ComponentsSwitchThumbColourDefault,
    ComponentsSwitchThumbColourDisabled,
    ComponentsSwitchThumbSize,
    ComponentsSwitchTrackBorderradius,
    ComponentsSwitchTrackColourChecked,
    ComponentsSwitchTrackColourCheckeddisabled,
    ComponentsSwitchTrackColourDefault,
    ComponentsSwitchTrackColourDisabled,
    ComponentsSwitchTrackHeight,
    ComponentsSwitchTrackWidth,
} from '@nivoda/design-tokens';

const MuiSwitchStyles: Components['MuiSwitch'] = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        disableTouchRipple: true,
    },
    styleOverrides: {
        root: {
            width: ComponentsSwitchTrackWidth,
            height: ComponentsSwitchTrackHeight,
            padding: 0,

            [`& .${switchClasses.switchBase}`]: {
                padding: 0,
                marginTop: `calc((${ComponentsSwitchTrackHeight} - ${ComponentsSwitchThumbSize}) / 2)`,
                marginBottom: `calc((${ComponentsSwitchTrackHeight} - ${ComponentsSwitchThumbSize}) / 2)`,
                marginLeft: `calc((${ComponentsSwitchTrackHeight} - ${ComponentsSwitchThumbSize}) / 2)`,

                '&.Mui-checked': {
                    color: ComponentsSwitchThumbColourChecked,
                    marginLeft: 0,

                    [`& + .${switchClasses.track}`]: {
                        backgroundColor: ComponentsSwitchTrackColourChecked,
                        // TODO: Needs hooking up to design tokens
                        opacity: 1,
                    },

                    [`&.Mui-disabled + .${switchClasses.track}`]: {
                        backgroundColor: ComponentsSwitchTrackColourCheckeddisabled,
                        // TODO: Needs hooking up to design tokens
                        opacity: 0.5,
                    },
                },

                [`&.Mui-disabled .${switchClasses.thumb}`]: {
                    color: ComponentsSwitchThumbColourDisabled,
                },

                [`&.Mui-disabled + .${switchClasses.track}`]: {
                    backgroundColor: ComponentsSwitchTrackColourDisabled,
                    opacity: 1,
                },
            },

            [`& .${switchClasses.thumb}`]: {
                boxSizing: 'border-box',
                width: ComponentsSwitchThumbSize,
                height: ComponentsSwitchThumbSize,
                boxShadow: 'none',
                color: ComponentsSwitchThumbColourDefault,
            },

            [`& .${switchClasses.track}`]: {
                borderRadius: ComponentsSwitchTrackBorderradius,
                backgroundColor: ComponentsSwitchTrackColourDefault,
                // TODO: Add opacity for default state.
                opacity: 1,
            },
        },
    },
};

export default MuiSwitchStyles;

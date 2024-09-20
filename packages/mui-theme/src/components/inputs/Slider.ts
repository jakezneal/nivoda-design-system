import type { Components } from '@mui/material';
import { sliderClasses } from '@mui/material/Slider';

const MuiSliderStyles: Components['MuiSlider'] = {
    styleOverrides: {
        root: {
            [`& .${sliderClasses.rail}`]: {
                backgroundColor: '#e7e5e4',
            },

            [`& .${sliderClasses.track}`]: {
                backgroundColor: '#0c0a09',
                borderColor: '#0c0a09',
            },

            [`& .${sliderClasses.thumb}`]: {
                backgroundColor: 'white',
                borderColor: '#e7e5e4',
                borderStyle: 'solid',
                borderWidth: '1px',

                ':before': {
                    boxShadow: '#0000000d 0px 1px 2px',
                },

                ':hover': {
                    borderColor: '#a8a29e',
                },

                '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                    boxShadow: 'none',
                },
            },
        },
    },
};

export default MuiSliderStyles;

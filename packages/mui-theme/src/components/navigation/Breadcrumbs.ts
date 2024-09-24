import type { Components } from '@mui/material';
import { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import { linkClasses } from '@mui/material/Link';

const MuiBreadcrumbsStyles: Components['MuiBreadcrumbs'] = {
    styleOverrides: {
        root: {
            [`& .${breadcrumbsClasses.li}`]: {
                [`& .${linkClasses.root}`]: {
                    color: '#78716C',
                },

                '&:last-child': {
                    color: '#0C0A09',
                },

                '&:first-child': {
                    [`& .${linkClasses.root}`]: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#0C0A09',
                    },
                },
            },
        },
    },
};

export default MuiBreadcrumbsStyles;

import type { TemplateData } from '../types';

export default (value: TemplateData) => `import type { Components } from '@mui/material';
import { ${value.component.name.camel}Classes } from '@mui/material/${value.component.name.pascal}';

const Mui${value.component.name.pascal}Styles: Components['Mui${value.component.name.pascal}'] = {
    styleOverrides: {
        root: {},
    },
};

export default Mui${value.component.name.pascal}Styles;
`;

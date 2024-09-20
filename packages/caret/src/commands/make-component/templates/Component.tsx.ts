import type { TemplateData } from '../types';

export default (
    value: TemplateData,
) => `import { ${value.component.name.pascal} as Mui${value.component.name.pascal}, type ${value.component.name.pascal}Props as Mui${value.component.name.pascal}Props } from '@mui/material';

export interface ${value.component.name.pascal}Props extends Mui${value.component.name.pascal}Props {}

export const ${value.component.name.pascal} = ({ ...rest }: ${value.component.name.pascal}Props) => <Mui${value.component.name.pascal} {...rest} />;

export default ${value.component.name.pascal};
`;

import type { TemplateData } from '../types';

export default (value: TemplateData) => `import type { Meta, StoryObj } from '@storybook/react';

import { ${value.component.name.pascal}, type ${value.component.name.pascal}Props } from './${value.component.name.pascal}';

interface ${value.component.name.pascal}PropsAndCustomArgs extends ${value.component.name.pascal}Props {}

const meta: Meta<${value.component.name.pascal}PropsAndCustomArgs> = {
    component: ${value.component.name.pascal},
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof ${value.component.name.pascal}>;

export const ${value.component.name.camel}: Story = {
    args: {},
};

export default meta;
`;

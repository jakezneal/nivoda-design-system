import type { TemplateData } from '../types';

export default (value: TemplateData) => `import type { Meta, StoryObj } from '@storybook/react';

import { ${value.component.name.pascal}, type ${value.component.name.pascal}Props } from './${value.component.name.pascal}';

interface ${value.component.name.pascal}PropsAndCustomArgs extends ${value.component.name.pascal}Props {}

const meta = {
    component: ${value.component.name.pascal},
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return <${value.component.name.pascal} 
            {...args} 
        />
    },
} satisfies Meta<${value.component.name.pascal}PropsAndCustomArgs>;

type Story = StoryObj<typeof meta>;

export const ${value.component.name.camel}: Story = {
    args: {},
};

export default meta;
`;

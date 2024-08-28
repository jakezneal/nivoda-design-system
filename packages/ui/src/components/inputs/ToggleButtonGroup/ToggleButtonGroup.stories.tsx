import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButtonGroup, ToggleButtonGroupProps } from './ToggleButtonGroup';
import { useState } from 'react';

const meta: Meta<typeof ToggleButtonGroup> = {
    component: ToggleButtonGroup,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium'],
        },
    },
    parameters: {
        layout: 'centered',
    },
};

type Story = StoryObj<typeof ToggleButtonGroup>;

const ToggleButtonGroupWithHooks: typeof ToggleButtonGroup = ({ exclusive, ...rest }: ToggleButtonGroupProps) => {
    const [exclusiveValues, setExclusiveValues] = useState<string | null>('');
    const [multipleValues, setMultipleValue] = useState<string[]>(() => []);

    const handleExclusiveChange = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
        setExclusiveValues(newValue);
        console.log(newValue, exclusiveValues);
    };

    const handleMultipleChange = (event: React.MouseEvent<HTMLElement>, newValue: string[]) => {
        setMultipleValue(newValue);
        console.log(newValue, multipleValues);
    };

    return (
        <ToggleButtonGroup
            value={exclusive ? exclusiveValues : multipleValues}
            exclusive={exclusive}
            onChange={exclusive ? handleExclusiveChange : handleMultipleChange}
            {...rest}
        />
    );
};

export const toggleButtonGroup: Story = {
    args: {
        exclusive: true,
        size: 'medium',
        disabled: false,
    },
    render: (args) => <ToggleButtonGroupWithHooks {...args} />,
};

export default meta;

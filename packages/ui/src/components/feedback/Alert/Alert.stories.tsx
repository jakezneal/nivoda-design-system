import type { Meta, StoryObj } from '@storybook/react';
import { IconAlertTriangle, IconInfoCircle, IconCircleCheck, IconHelpCircle } from '@tabler/icons-react';

import { Alert, AlertProps } from './Alert';

interface AlertPropsAndCustomArgs extends AlertProps {
    showIcon?: boolean;
    chosenIcon?: string;
}

const meta: Meta<AlertPropsAndCustomArgs> = {
    component: Alert,
    argTypes: {
        severity: {
            options: ['success', 'info', 'warning', 'error'],
            control: { type: 'select' },
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        chosenIcon: {
            control: { type: 'select' },
            options: ['alert-triange', 'info-circle', 'circle-check', 'help-circle'],
            description: 'Takes a Tabler icon',
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        const { showIcon, chosenIcon } = args;

        const AlertIcon = ({ icon }: { icon: string }) => {
            let iconToShow: React.ReactNode = <IconAlertTriangle />;

            switch (icon) {
                case 'info-circle':
                    iconToShow = <IconInfoCircle />;
                    break;
                case 'circle-check':
                    iconToShow = <IconCircleCheck />;
                    break;
                case 'help-circle':
                    iconToShow = <IconHelpCircle />;
                    break;
                default:
                    iconToShow = <IconAlertTriangle />;
                    break;
            }

            return iconToShow;
        };

        return (
            <Alert icon={showIcon ? <AlertIcon icon={chosenIcon ?? 'alert-triangle'} /> : false} {...args}>
                Alert body should go here.
            </Alert>
        );
    },
};

type Story = StoryObj<AlertPropsAndCustomArgs>;

export const alert: Story = {
    args: {
        severity: 'success',
        title: '',
        showIcon: false,
    },
};

export default meta;

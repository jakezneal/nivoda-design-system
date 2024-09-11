import type { Meta, StoryObj } from '@storybook/react';

import { Link, LinkProps } from './Link';
import { IconBookmark, IconHeart, IconStar } from '@tabler/icons-react';

interface LinkPropsAndCustomArgs extends LinkProps {
    text: string;
    showIcon?: boolean;
    chosenIcon?: string;
}

const meta: Meta<LinkPropsAndCustomArgs> = {
    component: Link,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'body1',
                'body2',
                'button',
                'caption',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'inherit',
                'overline',
                'subtitle1',
                'subtitle2',
                'string',
            ],
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        chosenIcon: {
            control: { type: 'select' },
            options: ['heart', 'star', 'bookmark'],
            description: 'Takes a Tabler icon',
        },
    },
    render: (args) => {
        const { text, showIcon, chosenIcon } = args;

        const LinkIcon = ({ icon }: { icon: string }) => {
            let iconToShow: React.ReactNode = <IconHeart />;

            switch (icon) {
                case 'star':
                    iconToShow = <IconStar />;
                    break;
                case 'bookmark':
                    iconToShow = <IconBookmark />;
                    break;
                default:
                    iconToShow = <IconHeart />;
                    break;
            }

            return iconToShow;
        };

        return (
            <Link {...args} onClick={(e) => e.preventDefault()}>
                {showIcon && <LinkIcon icon={chosenIcon ?? 'heart'} />}
                {text}
            </Link>
        );
    },
};

type Story = StoryObj<LinkPropsAndCustomArgs>;

export const link: Story = {
    args: {
        text: 'Move to shortlist',
        href: 'https://nivoda.com',
        variant: 'body1',
        showIcon: false,
    },
};

export default meta;

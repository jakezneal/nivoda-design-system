import type { Meta, StoryObj } from '@storybook/react';

import { Dialog, DialogProps } from './Dialog';

interface DialogPropsAndCustomArgs extends DialogProps {
    body?: string;
}

const meta: Meta<DialogPropsAndCustomArgs> = {
    component: Dialog,
    argTypes: {
        primaryButtonColour: {
            control: { type: 'select' },
            options: ['primary', 'error', 'success'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => <Dialog {...args}>{args.body}</Dialog>,
};

type Story = StoryObj<DialogPropsAndCustomArgs>;

const defaultArgs: DialogPropsAndCustomArgs = {
    title: 'Are you absolutely sure?',
    description:
        "This action cannot be undone. This will permanently delete your account and remove your data from your servers. We won't be able to recover the data afterwards.",
    body: '',
    primaryButtonColour: 'primary',
    primaryButtonText: 'Confirm',
    open: true,
};

export const dialog: Story = {
    args: {
        ...defaultArgs,
    },
};

export const dialogScroll: Story = {
    args: {
        ...defaultArgs,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat non tellus sit amet sagittis. Pellentesque a faucibus dolor. Praesent mollis mattis neque vel volutpat. Pellentesque ultrices est a libero fringilla, sed consectetur magna faucibus. In et diam non magna vulputate suscipit sit amet quis eros. Morbi auctor justo vel congue sagittis. Etiam vitae placerat lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur egestas tempus dolor. Mauris quis finibus ex. Nam vel vehicula ex. Proin tincidunt condimentum nunc, nec sagittis lectus feugiat vel. Aenean ex nulla, blandit sit amet semper pharetra, porta a velit. Vivamus non pulvinar orci, a volutpat felis. Morbi ultricies eros orci, sit amet auctor felis malesuada at. Praesent diam turpis, laoreet vel dapibus at, lacinia sed lectus. Etiam ut nunc neque. Sed elementum facilisis purus eu vehicula. Ut a sem sed enim consectetur efficitur vel quis elit. Nam rhoncus sapien eget orci tempor accumsan. Nullam hendrerit tincidunt magna at ultricies. Vivamus consectetur arcu at ante cursus fringilla. Aenean magna nibh, hendrerit id lobortis ac, consectetur sed diam. Etiam venenatis, ipsum sit amet bibendum condimentum, purus nunc aliquet tellus, quis dictum sem justo id massa. Curabitur id leo iaculis lorem fermentum accumsan vel vitae mi. Vivamus enim urna, bibendum id elementum eu, rutrum quis nunc. Quisque ac justo arcu. Vestibulum iaculis convallis nibh vitae aliquam. Aliquam fringilla sapien arcu, sed dapibus libero tincidunt sit amet. Nulla tempor tempor fermentum. Duis vel aliquet dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sem erat, pretium eu nunc non, convallis ullamcorper est. Curabitur nec enim dignissim odio ornare gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod fringilla libero, ac rhoncus purus pulvinar ac. Vivamus tincidunt nibh in placerat imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tempus magna nibh. Donec et lectus quis nulla elementum vestibulum ut eget felis. Aenean iaculis tellus id arcu molestie condimentum. Nullam suscipit faucibus diam, ac fringilla nunc ullamcorper ut. Etiam commodo ac nibh at venenatis. Nunc sed leo id tellus posuere consectetur ut sollicitudin ante. Vestibulum fermentum sem a leo posuere pulvinar. Praesent placerat lacus sed auctor vehicula. Nullam sit amet velit in turpis placerat aliquet sit amet at lorem. Aliquam pretium sollicitudin nibh in fermentum. Suspendisse venenatis tortor lectus. Nullam sed mauris vestibulum diam varius maximus a vel quam. Quisque porttitor ante at leo luctus, vel dapibus purus consectetur. Praesent sed blandit justo. In hac habitasse platea dictumst. Quisque semper suscipit imperdiet. Sed sollicitudin sed diam convallis auctor.',
    },
};

export default meta;

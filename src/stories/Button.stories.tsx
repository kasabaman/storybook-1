import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta = {
    component: Button,
    title: 'Button',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {
//         variant: "primary"
//     }
// }

export const Primary1 = () => (
    <Button variant="primary">This is button</Button>
)
    
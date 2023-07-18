import SignUpForm from './SignUpForm.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof SignUpForm>;

const meta: Meta<typeof SignUpForm> = {
  title: 'SignUpForm',
  component: SignUpForm,
  render: (args) => ({
    components: { SignUpForm },
    setup() {
      return { args };
    },
    template: '<SignUpForm v-bind="args" />',
  })
}

export const Default: Story = {}

export default meta;
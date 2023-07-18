import SignUpForm from './SignUpForm.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent, within } from '@storybook/testing-library';
import {expect} from '@storybook/jest'

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

export const Complete: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText('Name', {selector: 'input'});
    const ageInput = canvas.getByLabelText('Age', {selector: 'input'});
    const submitButton = canvas.getByRole('button', {name: '確定'});

    await userEvent.type(nameInput, 'sasaki');
    await userEvent.clear(ageInput);
    await userEvent.type(ageInput, '30');
    await userEvent.click(submitButton);

    // エラーメッセージが表示されていないことをアサート
    expect(canvas.queryByText('名前は必須です')).toBeNull();
    expect(canvas.queryByText('18歳未満は登録できません')).toBeNull();
  }
}

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText('Name', {selector: 'input'});
    const ageInput = canvas.getByLabelText('Age', {selector: 'input'});
    const submitButton = canvas.getByRole('button', {name: '確定'});

    await userEvent.clear(nameInput);
    await userEvent.clear(ageInput);
    await userEvent.type(ageInput, '15');
    await userEvent.click(submitButton);
  }
}

export default meta;
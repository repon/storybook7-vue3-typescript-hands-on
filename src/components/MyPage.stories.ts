import MyPage from "./MyPage.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";

type Story = StoryObj<typeof MyPage>;

const meta: Meta<typeof MyPage> = {
  title: "MyPage",
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: "<MyPage />",
  }),
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

export const Default: Story = {}

export default meta
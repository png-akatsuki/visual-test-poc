import type { Meta, StoryObj } from "@storybook/vue3";
import "../style.css";
import ProfileCard from "./ProfileCard.vue";
import App from "../App.vue";

const meta = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  render: (args: any) => ({
    components: { ProfileCard },
    setup() {
      return { args };
    },
    template: "<profile-card v-bind='args'></profile-card>",
  }),
  parameters: {
    layout: "fullscreen",
  },
  args: {
    defaultShowMore: false, // Default to not showing more
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    percy: {
      name: 'Profile Pic Default',
      additionalSnapshots: [
        { prefix: '[Dark mode] ', args: { colorScheme: 'dark' } },
        { suffix: ' with globals', globals: { textDirection: 'rtl' } },
      ],
    },
  },
  args: {
    defaultShowMore: false, // Default collapsed state
  },
};

export const Expanded: Story = {
  parameters: {
    percy: {
      name: 'Profile Pic Expanded',
      additionalSnapshots: [
        { prefix: '[Dark mode] ', args: { colorScheme: 'dark' } },
        { suffix: ' with globals', globals: { textDirection: 'rtl' } },
      ],
    },
  },
  args: {
    defaultShowMore: true, // Expanded state with 'See More' clicked
  },
};

export const WithBrightlyNav: Story = {
  parameters: {
    percy: {
      name: 'Profile Pic Brightly App',
      additionalSnapshots: [
        { prefix: '[Dark mode] ', args: { colorScheme: 'dark' } },
        { suffix: ' with globals', globals: { textDirection: 'rtl' } },
      ],
    },
  },
  render: (args: any) => ({
    components: { ProfileCard, App },
    setup() {
      return { args };
    },
    template: "<app><profile-card v-bind='args'></profile-card></app>",
  }),
};

import type { Meta, StoryObj } from "@storybook/vue3";
import "../style.css";
import ProfileCard from "./ProfileCard.vue";

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
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   parameters: {
//     percy: {
//       name: 'Profile Pic Default',
//       skip: false, // Snapshot this story
//       // waitForSelector: '.profile-pic', Example for Wait for profile-pic element before snapshot
//       queryParams: {
//         theme: 'light', // Add custom query parameters for snapshot
//       },
//       additionalSnapshots: [
//         { suffix: ' with globals', globals: { textDirection: 'rtl' } },
//       ],
//     },
//   },
//   args: {
//     defaultShowMore: false, // Default collapsed state
//   },
// };

// export const Expanded: Story = {
//   parameters: {
//     percy: {
//       name: 'Profile Pic Expanded',
//       skip: false, // Ensure this snapshot is not skipped
//       queryParams: {
//         theme: 'dark', // Apply dark theme via query params
//       },
//       additionalSnapshots: [
//         { suffix: ' with globals', globals: { textDirection: 'rtl' } },
//       ],
//     },
//   },
//   args: {
//     defaultShowMore: true, // Expanded state with 'See More' clicked
//   },
// };
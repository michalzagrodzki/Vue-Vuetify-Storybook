import MyPage from "./Page";
import * as CardStories from "./Card.stories";

export default {
  title: "Example/Page",
  component: MyPage
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
  template: '<my-page @onLogin="onLogin"/>'
});

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...CardStories.Default.args
};

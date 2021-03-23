import MyPage from "./../components/Page";
import MyCard from "./../components/Card";
import MyInput from "./../components/Input";
import MyButton from "./../components/Button";
import * as CardStories from "./Card.stories";

export default {
  title: "Example/Page",
  component: MyPage,
  MyCard,
  MyInput,
  MyButton
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage, MyCard, MyInput, MyButton },
  template: `
    <my-page @onLogin="onLogin">
      <my-card
        title="Login"
        subTitle="Welcome back. Please login to our service"
        width="500"
        elevation="2"
      >
        <template v-slot:body>
          <my-input label="Login" />
          <my-input label="Password" />
        </template>
        <template v-slot:footer>
          <my-button label="Login" />
        </template>
      </my-card>
    </my-page>
  `
});

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...CardStories.Default.args
};

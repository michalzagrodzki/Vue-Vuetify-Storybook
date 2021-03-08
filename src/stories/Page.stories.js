import MyPage from "./Page";
import MyCard from "./Card.vue";
import MyInput from "./Input.vue";
import MyButton from "./Button.vue";
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
      <MyCard
        title="Login"
        subTitle="Welcome back. Please login to our service"
        width="500"
        elevation="2"
      >
        <template v-slot:body>
          <MyInput label="Login" />
          <MyInput label="Password" />
        </template>
        <template v-slot:footer>
          <MyButton label="Login" />
        </template>
      </MyCard>
    </my-page>
  `
});

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...CardStories.Default.args
};

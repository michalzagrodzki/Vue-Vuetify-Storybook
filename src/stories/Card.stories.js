import MyCard from "./Card.vue";
import MyInput from "./Input.vue";
import MyButton from "./Button.vue";

export default {
  title: "Example/Card",
  component: MyCard,
  MyInput,
  MyButton,
  argTypes: {
    color: { control: "color" },
    width: {
      control: { type: "range", min: 100, max: 500, step: 5 }
    },
    elevation: { control: { type: "range", min: 0, max: 24, step: 1 } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCard, MyInput, MyButton },
  template: `
  <my-card v-bind="$props">
    <template v-slot:body>
      <my-input label="Login" />
      <my-input label="Password" />
    </template>
    <template v-slot:footer>
      <my-button label="Login" />
    </template>
  </my-card>`
});

export const Default = Template.bind({});
Default.args = {
  title: "Login",
  subTitle: "Welcome back. Please login to our service",
  width: "500",
  elevation: "0"
};

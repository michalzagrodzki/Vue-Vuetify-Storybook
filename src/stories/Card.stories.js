import MyCard from "./Card.vue";

export default {
  title: "Example/Card",
  component: MyCard,
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
  components: { MyCard },
  template: '<my-card v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  title: "Login",
  subTitle: "Welcome back. Please login to our service",
  width: "500",
  elevation: "0"
};

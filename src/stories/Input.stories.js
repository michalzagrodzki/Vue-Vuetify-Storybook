import MyInput from "./Input.vue";

export default {
  title: "Example/Input",
  component: MyInput,
  argTypes: {
    color: { control: "color" },
    dense: { control: { type: "radio", options: ["true", "false"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyInput },
  template: '<my-input v-bind="$props" />'
});

export const Primary = Template.bind({});
Primary.args = {
  dense: false,
  label: "Input"
};

export const Dense = Template.bind({});
Dense.args = {
  dense: true,
  label: "Dense Input"
};

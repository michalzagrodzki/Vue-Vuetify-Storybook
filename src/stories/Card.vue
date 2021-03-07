<template>
  <v-card :color="color" :width="width" :elevation="elevation">
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ subTitle }}
    </v-card-subtitle>
    <v-card-text>
      <MyInput label="Login" />
      <MyInput label="Password" />
    </v-card-text>
    <v-card-actions>
      <MyButton label="Login" />
    </v-card-actions>
  </v-card>
</template>

<script>
import MyInput from "./Input";
import MyButton from "./Button";
export default {
  name: "my-card",
  components: { MyInput, MyButton },
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    elevation: {
      type: String,
      required: false
    }
  },
  data: () => ({
    input: ""
  }),
  computed: {
    style() {
      return {
        color: this.color
      };
    }
  },
  methods: {}
};
</script>

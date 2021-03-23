<template>
  <v-text-field :label="label" :color="color" :dense="dense" v-model="input" />
</template>

<script>
export default {
  name: "my-input",

  props: {
    label: {
      type: String,
      required: true
    },
    dense: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
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

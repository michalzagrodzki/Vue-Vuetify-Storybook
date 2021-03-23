<template>
  <v-card :color="color" :width="width" :elevation="elevation">
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ subTitle }}
    </v-card-subtitle>
    <v-card-text>
      <slot name="body" />
    </v-card-text>
    <v-card-actions>
      <slot name="footer" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "my-card",
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

<template>
  <v-container fluid>
    <v-row>
      <v-col cols>
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "my-page",
  methods: {
    onLogin() {
      this.$emit("onLogin");
    }
  }
};
</script>

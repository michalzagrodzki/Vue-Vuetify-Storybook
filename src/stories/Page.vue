<template>
  <v-container fluid>
    <v-row>
      <v-col cols>
        <MyCard
          title="Login"
          subTitle="Welcome back. Please login to our service"
          width="500"
          elevation="2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyCard from "./Card";

export default {
  name: "my-page",
  components: { MyCard },
  methods: {
    onLogin() {
      this.$emit("onLogin");
    }
  }
};
</script>

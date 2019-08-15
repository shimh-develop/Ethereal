<template>
  <v-app :dark="theme">
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.state.app.theme === 'dark'
    }
  }
}
</script>
<style>
</style>

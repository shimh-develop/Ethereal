<template>
  <div style="height:100%;background-image: url('/b.jpg');background-size: 100% 100%;">
  <v-container>
    <v-layout
      justify-center
      row
      wrap
      fill-height
    >
      <v-flex xs12>
        <div style="font-size: 34px">Ethereal</div>
      </v-flex>
      <v-flex xs10 md8 sm8 style="margin-top: 80px">
        <browser-search></browser-search>
      </v-flex>

      <tool-bars></tool-bars>

    </v-layout>
  </v-container>
  </div>
</template>

<script>
  import ToolBars from '~/components/index/ToolBars'
  import BrowserSearch from '~/components/index/BrowserSearch'

  export default {
    components: {
      ToolBars,
      BrowserSearch
    }
  }
</script>
<style scoped>

</style>

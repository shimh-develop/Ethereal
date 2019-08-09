<template>
  <v-speed-dial
    v-model="fab"
    :top="false"
    :bottom="true"
    :right="true"
    :left="false"
    direction="top"
    :open-on-hover="true"
    transition="slide-x-reverse-transition"
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon v-if="fab">close</v-icon>
        <v-icon v-else>list</v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      dark
      small
    >
      <v-icon>brightness_medium</v-icon>
    </v-btn>
    <!--<v-btn-->
    <!--fab-->
    <!--small-->
    <!--dark-->
    <!--&gt;-->
    <!--<v-icon>brightness_low</v-icon>-->
    <!--</v-btn>-->
    <v-btn
      fab
      dark
      small
      color="red"
    >
      <v-icon>crop_original</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
  export default {
    name: 'ToolBars',
    data() {
      return {
        fab: false
      }
    }
  }
</script>

<style scoped>
  .v-speed-dial {
    position: absolute;
  }

</style>

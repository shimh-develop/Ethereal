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
        fab
      >
        <v-icon v-if="fab">close</v-icon>
        <v-icon v-else>list</v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      small
      @click="changeTheme"
    >
      <v-icon>brightness_medium</v-icon>
    </v-btn>
    <v-btn
      fab
      small
      color="red"
      @click="toggleBackground"
    >
      <v-icon>crop_original</v-icon>
    </v-btn>
    <v-btn
      fab
      small
      color="orange"
      @click="addBackground"
    >
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
  const IMGS = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
  export default {
    name: 'ToolBars',
    data() {
      return {
        fab: false,
        index: 1
      }
    },
    methods: {
      toggleBackground(){
        this.$store.dispatch('app/toggleBackground')
      },
      changeTheme() {
        this.$store.dispatch('app/toggleTheme')
      },
      addBackground() {
        const current = IMGS.indexOf(this.$store.state.app.backgroundUrl) || 0
        this.index = current + 1
        this.index === 10 && (this.index = 0)
        this.$store.dispatch('app/setBackground', true)
        this.$store.dispatch('app/setBackgroundUrl', IMGS[this.index])
      }
    }
  }
</script>

<style scoped>
  .v-speed-dial {
    position: absolute;
  }

</style>

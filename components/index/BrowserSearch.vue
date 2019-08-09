<template>
  <v-text-field
    style="font-size: 24px"
    v-model="value"
    clearable
    autofocus
    @input="handleValue"
    @keyup.enter="handleSearch"
    :loading="loading"
    label=""
    type="text"
  >
    <template v-slot:prepend-inner>
      <v-menu bottom  transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <img width="80" contain v-on="on" height="25" :src="currentBrowser.img" alt="">
        </template>

        <v-list>
          <v-list-tile
            v-for="(b, i) in browsers"
            :key="i"
            @click="changeBrowser(b)"
          >
            <img width="120"  contain max-height="30"  height="30" :src="b.img" alt="">
          </v-list-tile>
        </v-list>
      </v-menu>

    </template>
    <template v-slot:append>
      <v-fade-transition leave-absolute>
        <v-progress-circular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        ></v-progress-circular>
        <v-icon  v-else>search</v-icon>
      </v-fade-transition>
    </template>

  </v-text-field>
</template>

<script>
  export default {
    name: "BrowserSearch",
    data() {
      return {
        value: '',
        loading: false,
        currentBrowser: {
          img: 'https://www.baidu.com/img/baidu_resultlogo@2.png',
          url: 'https://www.baidu.com/s?wd='
        },
        browsers: [
          {
            img: 'https://www.baidu.com/img/baidu_resultlogo@2.png',
            url: 'https://www.baidu.com/s?wd='
          },
          {
            img: 'https://p.ssl.qhimg.com/t01d1f1a2ae31e3c3e4.png',
            url: ''
          },
          {
            img: 'http://www.google120.com/themes/default/skin/logo.png',
            url: ''
          }
        ]
      }
    },
    methods: {
      changeBrowser(browser) {
        this.currentBrowser = browser
      },
      handleSearch() {
        window.open(this.currentBrowser.url + this.value)
      },
      handleValue(value) {
        console.info(value)
      }
    }
  }
</script>

<style scoped>

</style>

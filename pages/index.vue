<template>
  <div style="height:100%;background-size: 100% 100%;" :style="background">
    <v-container grid-list-xl>
      <v-layout
        align-center
        row
      >
        <v-flex xs10>
          <div style="font-size: 34px">
            <img :src="logo"/>
          </div>
        </v-flex >
        <v-flex xs2>
          <div id="he-plugin-simple"></div>
        </v-flex>
      </v-layout>
      <v-layout
        justify-center
        align-center
        row
        style="margin-top: 60px"
      >
        <v-flex xs10 md8 sm8>
          <browser-search></browser-search>
        </v-flex>
      </v-layout>
    </v-container>
    <tool-bars></tool-bars>

  </div>
</template>

<script>
  import ToolBars from '~/components/index/ToolBars'
  import BrowserSearch from '~/components/index/BrowserSearch'

  export default {
    components: {
      ToolBars,
      BrowserSearch
    },
    mounted() {
      this.weather()
    },
    watch: {
      '$store.state.app.theme'() {
        this.weather()
      }
    },
    computed: {
      background() {
        return {
          backgroundImage: this.$store.state.app.background ? `url("${this.$store.state.app.backgroundUrl}")` : ''
        }
      },
      logo() {
        return `/logo-${this.$store.state.app.theme}.png`
      }
    },
    methods: {
      weather() {
        const color = this.$store.state.app.theme === 'light' ? '000000': 'FFFFFF'
        window.WIDGET = {
          CONFIG: {
            "modules": "01234",
            "background": 5,
            "tmpColor": color,
            "tmpSize": 16,
            "cityColor": color,
            "citySize": 16,
            "aqiColor": color,
            "aqiSize": 16,
            "weatherIconSize": 24,
            "alertIconSize": 18,
            "padding": "10px 10px 10px 10px",
            "shadow": "1",
            "language": "auto",
            "city": "CN101120101",
            "fixed": "false",
            "vertical": "middle",
            "horizontal": "center",
            "key": "354b25d5d951496aaf64be4e5d33d8ed"
          }
        }
        var oScript = document.createElement('script')
        oScript.src = "https://widget.heweather.net/simple/static/js/he-simple-common.js?v=1.1"
        document.body.append(oScript)
        oScript.remove()
      }
    }
  }
</script>
<style scoped>

</style>

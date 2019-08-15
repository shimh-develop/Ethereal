<template>
  <div>
    <v-text-field
      style="font-size: 24px"
      v-model="word"
      clearable
      @input="(() => {return this.$lodash.debounce(getWords, 400)})()"
      @keyup.enter="handleSearch(word)"
      @click:clear="clearWords"
      @blur="hideWords"
      @focus="checkWords"
      :loading="loading"
      type="text"
    >
      <template v-slot:prepend-inner>
        <v-menu light bottom transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <img class="pointer" width="80" contain v-on="on" height="25" :src="currentBrowser.img"
                 :alt="currentBrowser.name">
          </template>

          <v-list>
            <v-list-tile
              v-for="(b, i) in browsers"
              :key="i"
              @click="changeBrowser(b)"
            >
              <img width="120" contain max-height="30" height="30" :src="b.img" :alt="b.name">
            </v-list-tile>
          </v-list>
        </v-menu>

      </template>
      <template v-slot:append>
        <v-fade-transition leave-absolute>
          <v-progress-circular
            v-if="loading"
            size="24"
            color="red"
            indeterminate
          ></v-progress-circular>
          <v-icon @click="handleSearch(word)" v-else>search</v-icon>
        </v-fade-transition>
      </template>

    </v-text-field>
    <v-expand-transition>
      <v-list dense v-show="wordListShow" style="position:relative;top: -16px;">
        <template v-for="(item) in words">
          <v-list-tile
            :key="item"
            ripple
            @click="handleSearch(item)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ item }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-expand-transition>
  </div>
</template>

<script>
  import {renderPlaceholder} from '@/utils'

  const BROWSER_BAIDU = 'baidu',
    BROWSER_360 = '360',
    BROWSER_GOOGLE = 'Google',
    BROWSERS = {
      [BROWSER_BAIDU]: {
        key: BROWSER_BAIDU,
        name: '百度',
        img: 'https://www.baidu.com/img/baidu_resultlogo@2.png',
        site: `https://www.baidu.com/s?wd={word}`,
        suggest: 'https://www.baidu.com/sugrec?prod=pc&wd={word}&cb=resolveWords',
        resolve(res) {
          let words = []
          const originWords = (res && res.g) || []
          if (originWords.length > 0) {
            words = originWords.map(w => {
              return w.q
            })
          }
          return words
        }
      },
      [BROWSER_360]: {
        key: BROWSER_360,
        name: '360',
        img: 'https://p.ssl.qhimg.com/t01d1f1a2ae31e3c3e4.png',
        site: 'https://www.so.com/s?q={word}',
        suggest: 'https://sug.so.360.cn/suggest?callback=resolveWords&encodein=utf-8&encodeout=utf-8&format=json&fields=word&word={word}',
        resolve(res) {
          let words = []
          const originWords = (res && res.result) || []
          if (originWords.length > 0) {
            words = originWords.map(w => {
              return w.word
            })
          }
          return words
        }
      },
      [BROWSER_GOOGLE]: {
        key: BROWSER_GOOGLE,
        name: 'Google',
        img: 'http://www.google120.com/themes/default/skin/logo.png',
        site: 'https://www.google.com/search?q={word}'
      }
    }
  export default {
    name: "BrowserSearch",
    created() {
      !process.server && (window.resolveWords = this.resolveWords)
      this.browsers = [BROWSER_BAIDU, BROWSER_360, BROWSER_GOOGLE].map(b => BROWSERS[b])
      this.currentBrowser = this.browsers[0]
    },
    data() {
      return {
        wordListShow: false,
        words: [],
        word: '',
        loading: false,
        currentBrowser: '',
        browsers: []
      }
    },
    methods: {
      changeBrowser(browser) {
        this.clearWords()
        this.currentBrowser = browser
      },
      handleSearch(word) {
        if (word) {
          const site = renderPlaceholder(this.currentBrowser.site, {word})
          window.open(site)
        }
      },
      getWords(word) {
        const wd = word ? word.trim() : ''
        const suggest = this.currentBrowser.suggest
        if (wd && suggest) {
          this.loading = true
          var oScript = document.createElement('script');
          oScript.src = renderPlaceholder(this.currentBrowser.suggest, {word: wd});
          document.body.append(oScript);
          oScript.remove();
        } else {
          this.wordListShow = false
        }
      },
      resolveWords(res) {
        let words = this.currentBrowser.resolve(res)
        if (words.length > 0) {
          this.words = words.length > 10 ? words.slice(0, 10) : words
          this.wordListShow = true
        } else {
          this.wordListShow = false
        }
        setTimeout(() => {
          this.loading = false
        }, 800)
      },
      checkWords(event) {
        if (event && event.sourceCapabilities) {
          this.wordListShow = this.word && !!this.words.length
        }
      },
      clearWords() {
        this.words = []
      },
      hideWords() {
        setTimeout(() => {
          this.wordListShow = false
        }, 100)
      }
    }
  }

</script>

<style scoped>

</style>

<template>
  <v-container grid-list-xl style="margin-top: 80px">
    <v-layout
      align-center
      justify-center
    >
      <v-flex xs10>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
          outline
        >
          页面不存在，跳转中 {{ process }}
        </v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        process: ''
      }
    },
    beforeMount() {
      let i = 0
      setInterval(() => {
        i++
        this.process += '......'
        i === 3 &&  this.$router.push('/')
      }, 1000)
    }
  }
</script>

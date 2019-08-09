<template>
  <v-bottom-sheet v-model="sheet">
    <v-sheet class="text-center" height="500px" style="overflow: auto">
      <v-btn
        class="mt-6"
        text
        color="red"
        @click="sheet = !sheet"
      >close
      </v-btn>
      <div class="py-3">
        <v-container v-bind="{ [`grid-list-md`]: true }" fluid>
          <v-layout wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  flat
                  tile
                >
                  <v-img
                    :src="`https://unsplash.it/150/300?image=42`"
                    height="300px"
                  >
                    <div v-show="hover" style="" class="align-self-bottom">
                      <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        :class="{ 'show-btns': hover }"
                        color="transparent"
                        icon
                      >
                        <v-icon
                          :class="{ 'show-btns': hover }"
                          color="transparent"
                        >
                          {{ icon }}
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-img>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-container>

      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
  export default {
    name: "ImageContainer",
    data() {
      return {
        sheet: false,
        icons: ['fast_rewind', 'play_arrow', 'fast_forward']
      }
    }
  }
</script>

<style scoped>

</style>

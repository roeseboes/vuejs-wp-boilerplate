<template>
  <router-view></router-view>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      showLoader: true
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      loadingProgress: 'loadingProgress'
    }),
    loaderStyle() {
      return `width: ${this.loadingProgress}%;`
    }
  },
  watch: {
    isLoading(val) {
      if (val == false) {
        setTimeout(() => {
          this.showLoader = false
        }, 1000)
      }
    }
  }
}
</script>
<style lang="scss" src="./styles/master.scss"></style>

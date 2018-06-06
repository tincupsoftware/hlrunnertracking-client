<template>
  <v-app class="app">
    <v-content :runners="runners">
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  },
  created () {
        this.$store.dispatch("listRunners")
    },
  computed: {
        runners (){
            return this.$store.state.runners
        }
    }
}
</script>


<style>
div#app {
  background-color: #A97C54;
  }
#content {
  height: 80vh;
  width: 100vw;
}

</style>

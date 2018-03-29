<template>
  <v-app class="app">
    <v-content>
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
  data () {
    return {
      apiUrl: 'https://hl100-runnertracking.herokuapp.com/runners',
      runners: []
    }
  },
  mounted () {
    this.getDataFromDatabase()
  },
  methods: {
    getDataFromDatabase () {
      fetch(this.apiUrl)
        .then(response => response.json())
        .then(response => {
          // console.log(response)
          this.runners = response
        })
    }
  }
}
</script>

<style>
/* body {
  margin: 0 auto;
  background-color: black;
} */
div#app {
  background-color: #A97C54;
}
.content {
  margin: auto;
  height: 100%;
}

</style>

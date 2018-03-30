<template>
    <!-- <v-container class="footer"> -->
        <v-footer id="footer" :fixed="fixed" app>
          <span id="copyright">&copy; 2018 Tin Cup Software</span>
        </v-footer>
    <!-- </v-container> -->
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      fixed: false
    }
  },
  mounted () {
    // this.getDataFromDatabase()
  },
  methods: {
    // getDataFromDatabase () {
    //   fetch(this.apiUrl)
    //     .then(response => response.json())
    //     .then(response => {
    //       // console.log(response)
    //       this.runners = response
    //     })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  margin: 0;
  background-color: #A97C54;
  opacity: 0.7;
  justify-content: center;
}
#copyright {
  margin-left: 2vw;
}
</style>

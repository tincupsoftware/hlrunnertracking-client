<template>
<v-container class="landingpage splash-page primary">
  <img src="../../static/highlonesome100image.png" alt="High Lonesome 100">

  <v-layout column align-center class="logo">
    <!-- <img src="../../static/highlonesome100image.png" alt="High Lonesome 100"> -->
    <h1>High Lonesome 100</h1>
  </v-layout>
</v-container>
</template>
<!-- class="mb-5" -->
<script>
export default {
  name: 'SplashPage',
  data () {
    return {
      title: 'LONESOME',
      title_span1: 'HIGH',
      title_span2: '100'
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
img {
  margin: 0;

  width: auto;
}
.landingpage {
  /* background-color: #3F4040; */
  /* margin: auto; */
  height: 700px;
  padding: 0;
}

.logo {
  margin: 20vh 20vh 0px 20vh;
  height: 700px;

}

h1,
h2 {
  background-color: #A97C54;
  color: #3F4040;
  width: 100vw;
  height: 38vh;
  padding-top: 10%;
  text-align: center;
  font-weight: normal;
  font-family: 'Lato', sans-serif;
  font-size: 5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

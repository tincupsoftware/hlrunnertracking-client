<template>
<v-container class="landingpage splash-page">
  <v-layout column align-center class="splash-wrap">
    <div  class="upper-wrap">
      <div class="img-wrap">
        <img src="../../static/highlonesome100image.png" alt="High Lonesome 100" id="logo">
      </div>
    </div>
    <div class="lower-wrap">
      <h1>{{ title_h1 }}</h1>
      <h2>{{ title_h2 }}</h2>
    </div>
  </v-layout>
  <div class="text-xs-center home-link">
    <router-link class="nav-link-home" :to="{ name: 'Access'}">
      <v-btn round color="secondary" class="btn-home" large dark>
        ENTER
      </v-btn>
    </router-link>
  </div>
</v-container>
</template>

<script>
export default {
  name: 'SplashPage',
  data () {
    return {
      title: 'LONESOME',
      title_span1: 'HIGH',
      title_span2: '100',
      title_h1: 'High Lonesome 100',
      title_h2: 'Runner Management System'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.splash-page {
  /* margin: 0; */
  padding: 0;
}
.layout .splash-wrap {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.upper-wrap {
  display: flex;
  justify-content: center;
  background-color: #3F4040;
  /* background-color: blue; */
  margin: 0;
  height: 50%;
  width: 100vw;
  padding: 0;
}
img#logo {
  width: 100%;
}
h1 {
    margin-top: 2vh;
    font-size: 4rem;
}
h2 {
  font-size: 2.5rem;
  margin-bottom: 2vh;
}
h1, h2 {
  background-color: #A97C54;
  color: #3F4040;
  width: 100vw;
  text-align: center;
  font-weight: normal;
  font-family: 'Lato', sans-serif;
}
.nav-link-home .btn-home {
  color: #A97C54;
  font-size: 2rem;
  height: 5rem;
  width: 15rem;
  margin-bottom: 25px;
}
.nav-link-home {
  text-decoration: none;
}


/* .splash-page {
  background-color: #3F4040;
  margin: 0;
  height: 50%;
  width: 2000px;
  padding: 0;
} */
/* .img-div {
  display: flex;
  height: 50vh;
}
*/
/* #logo {
  width: 80vw;
} */
/*
img {
  margin: 0;

  width: auto;
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
} */

</style>

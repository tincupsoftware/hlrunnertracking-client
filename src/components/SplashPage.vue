<template>
  <v-container fluid class="landingpage">
      <v-layout column align-center class="logo">
        <img src="../../static/highlonesome100image.png" alt="High Lonesome 100" class="mb-5">
        <h1>High Lonesome 100</h1>
      </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landingpage {
  background-color: #3F4040;
  width: 100vw;
  height: 100vh;
  margin: auto;
}
.logo {
  margin: 20vh 20vh 0px 20vh;
}
h1, h2 {
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

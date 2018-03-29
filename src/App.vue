<template>
  <v-app>
    <v-toolbar id="navbar">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>High Lonesome 100 Administration Portal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{name: 'RunnerCheckIn'}">Runner Checkin</v-btn>
      <v-btn flat :runners="runners">Runner List</v-btn>
      <v-btn flat>Aid Station Input</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-content style="min-height: calc(100vh-32px);" id="content">
      <router-view/>
    </v-content>
    <v-footer id="footer" :fixed="fixed">
      <span id="copyright">&copy; 2018 Tin Cup Software</span>
      <span><ul class="linkwrapper">
        </ul>
        </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      fixed: false,
      apiUrl: 'https://hl100-runnertracking.herokuapp.com/api/beta/runners',
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
          this.runners = response
        })
    }
  }
}
</script>

<style scoped>
#navbar {
  background-color: #639D6A;
  heigh: 10vh;
}
#content {
  height: 80vh;
  width: 100vw;
}
#footer {
  position: relative;
  padding: 40px 10px;
  display: flex;
  height: 10vh;
  justify-content: space-between;
  background-color: #639D6A;
}
#copyright {
  margin-left: 2vw;
}
.linkwrapper {
  margin-right: 2vw;
}
.links {
  display: inline;
}
</style>


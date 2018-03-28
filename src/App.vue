<template>
  <v-app>
 <v-toolbar id="navbar">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>High Lonesome 100 Administration Portal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{name: 'RunnerCheckIn'}">Runner Checkin</v-btn>
      <v-btn flat>Runner List</v-btn>
      <v-btn flat>Aid Station Input</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
      <v-footer id="footer" :fixed="fixed" app>
      <span id="copyright">&copy; 2018 GROUP NAME GOES HERE</span>
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
          this.runners = response
        })
    }
  }
}
</script>

<style scoped>
#navbar {
  background-color: #639D6A
}
<style scoped>
#router {
  height: 100vh;
  width: 100vw;
}
#footer {
  display: flex;
  justify-content: space-between;
  background-color: #639D6A
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


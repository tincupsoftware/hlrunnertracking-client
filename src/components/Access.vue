<template>
    <v-container class="access access-page">
      <v-layout column align-center class="logo">
        <h1><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
        <div class="text-xs-center tri-links">
          <router-link class="nav-link" :to="{ name: 'Roster'}">
            <v-btn round color="blue" large dark>
              Roster
            </v-btn>
          </router-link>
          <router-link class="nav-link" :to="{ name: 'Trail'}">
            <v-btn round color="green" large dark>
              Trail Runners
            </v-btn>
          </router-link>
          <router-link class="nav-link" :to="{ name: 'AidStation'}">
            <v-btn round color="taupe" large dark>
              Aid-Station
            </v-btn>
          </router-link>
        </div>
        <div class="text-xs-center home-link">
          <router-link class="nav-link-home" :to="{ name: 'SplashPage'}">
            <v-btn round color="secondary" class="btn-home" large dark>
              Home
            </v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Access',
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
.access-page {
  height: 700px;
}

span {
  font-weight: 400;
}
.tri-links {
  margin-top: 100px;
}
.tri-links button {
  margin-bottom: 30px;
}
.home-link {
 margin-top: 140px;
}
.nav-link .btn {
  color: #303131;
  font-size: 2rem;
  height: 5rem;
  width: 25rem;
}
.nav-link {
  text-decoration: none;
}
.nav-link-home {
  text-decoration: none;
}
.nav-link-home .btn-home {
  color: #A97C54;
  font-size: 2rem;
  height: 5rem;
  width: 15rem;
}
</style>

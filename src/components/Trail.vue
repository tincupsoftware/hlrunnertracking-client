<template>
  <!-- <div class="access"> -->
    <v-container class="trail">
      <v-layout column align-center class="logo">
        <h1><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
        <!-- <div class="text-xs-center">
          <v-btn round color="blue" large dark>
            <router-link class="nav-link" :to="{ name: 'Roster'}">
              Roster
            </router-link>
          </v-btn>
          <v-btn round color="green" large dark>
            <router-link class="nav-link" :to="{ name: 'Trail'}">
              Trail Runners
            </router-link>
          </v-btn>
          <v-btn round color="taupe" large dark>
            <router-link class="nav-link" :to="{ name: 'AidStation'}">
              Aid-Station
            </router-link>
          </v-btn>
        </div>
        <div class="text-xs-center">
          <v-btn round color="secondary" large dark>
            <router-link class="nav-link" :to="{ name: 'SplashPage'}">
              Home
            </router-link>
          </v-btn>
        </div> -->
        <div class="text-xs-center trail-link">
          <router-link class="nav-link-trail" :to="{ name: 'Access'}">
            <v-btn round color="secondary" class="btn-trail" large dark>
              RETURN
            </v-btn>
          </router-link>
          <!-- <router-link class="nav-link-trail" :to="{ name: 'RunnerCheckIn'}">
            <v-btn round color="secondary" class="btn-trail" large dark>
              add
            </v-btn>
          </router-link> -->
        </div>
      </v-layout>
    </v-container>
  <!-- </div> -->

</template>

<script>
export default {
  name: 'Trail',
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
span {
  font-weight: 400;
}
.btn {
  font-size: 2rem;
  height: 5rem;
  width: 25rem;
}
.nav-link {
  color: #303131;
  text-decoration: none;
}

.nav-link-trail .btn-trail {
  color: #A97C54;
  font-size: 2rem;
  height: 3rem;
  width: 10rem;
  margin-bottom: 25px;
}
.nav-link-trail {
  text-decoration: none;
}
</style>

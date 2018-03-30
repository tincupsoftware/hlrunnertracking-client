<template>
    <v-container class="aid-station">
      <v-layout column align-center class="logo">
        <h1><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
        <div class="text-xs-center warning" >
          <h2>Under Construction</h2>
        </div>
        <div class="text-xs-center aid-link">
          <router-link class="nav-link-aid" :to="{ name: 'Access'}">
            <v-btn round color="secondary" class="btn-aid" large dark>
              RETURN
            </v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'AidStation',
  data () {
    return {
      title: 'LONESOME',
      title_span1: 'HIGH',
      title_span2: '100'
    }
  }
}
</script>

<style scoped>
span {
  font-weight: 400;
}
.warning {
  width: 100%;
  margin-top: 150px;
  border-radius: 70%;
  height: 125px;
  width: 225px;
  display: inline-block;
}
h2 {
  padding-top: 45px;
}
.aid-link {
 margin-top: 250px;
}
.nav-link-aid .btn-aid {
  color: #A97C54;
  font-size: 2rem;
  height: 3rem;
  width: 10rem;
  margin-bottom: 25px;
}
.nav-link-aid {
  text-decoration: none;
}
</style>

<template>
    <v-container class="trail">
      <v-layout column align-center class="logo">
        <h1><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
        <div class="text-xs-center trail-link">
          <router-link class="nav-link-trail" :to="{ name: 'Access'}">
            <v-btn round color="secondary" class="btn-trail" large dark>
              RETURN
            </v-btn>
          </router-link>
            <v-btn round color="secondary" class="btn-trail" large dark>
              add
            </v-btn>
        </div>
      </v-layout>
    </v-container>
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
  }
}
</script>

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

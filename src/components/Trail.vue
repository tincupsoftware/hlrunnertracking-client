<template>
<div>
    <v-container class="trail">
      <v-layout column align-center class="logo">
        <h1><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
        <div class="text-xs-center trail-link">
          <router-link class="nav-link-trail" :to="{ name: 'Access'}">
            <v-btn round color="secondary" class="btn-trail" large dark>
              BACK
            </v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-container>
    <RunnerList id="runnerlist"/>
</div>
</template>

<script>
import RunnerList from '@/components/RunnerList'
export default {
  name: 'Trail',
  components: { 
    RunnerList 
    },
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
/* #runnerlist {
  align-self: auto;
} */
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

<template>
  <v-app>
 <v-toolbar id="navbar">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>High Lonesome 100 Administration Portal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Runner Checkin</v-btn>
      <v-btn flat>Runner List</v-btn>
      <v-btn flat>Aid Station Input</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style scoped>
#navbar {
  background-color: #639D6A
}
</style>


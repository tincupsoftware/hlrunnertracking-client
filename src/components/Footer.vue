<template>
        <v-footer id="footer" :fixed="fixed" app>
          <span id="copyright">&copy; 2018 Tin Cup Software</span>
        </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<style scoped>
#footer {
  margin: 0;
  background-color: #A97C54;
  opacity: 0.7;
  justify-content: center;
}
#copyright {
  margin-left: 2vw;
}
</style>

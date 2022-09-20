<template>
  <div id="app">
    <Detail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Detail from './pages/DetailWrap.vue'

export default defineComponent({
  name: 'App',
  components: {
    Detail,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

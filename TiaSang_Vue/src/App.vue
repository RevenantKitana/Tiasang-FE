<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&family=Merriweather:wght@700&display=swap');
@import './assets/styles/styles.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Archivo', sans-serif;
  background-color: #0a0a0a;
  color: #fff;
}

#app {
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a;
}
</style>

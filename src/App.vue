<template>
  <div id="app">
    <div>
      <label for="select-1">Select 1</label>
      <select v-model="select1" id="select-1">
        <option value=""></option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
      </select>
    </div>
    <div v-if="select1">
      <label for="select-2">Select 2</label>
      <select v-model="select2" id="select-2">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
    <div v-if="select2">
      <label for="select-3">Select 3</label>
      <select v-model="select3" id="select-3">
        <option value=""></option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      select1: null,
      select2: null,
      select3: null
    }
  }
}
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

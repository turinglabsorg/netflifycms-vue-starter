<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"><br>
    <h3>This is a small Vue + NetlifyCMS starter</h3>
    You can find all the contents inside "src/contents" and import them by importing get.js file:<br>
    <pre style="text-align:left; display:inline-block; padding:20px; width:500px; border:1px solid #eee; border-radius:5px;">{{ translations }}</pre>
  </div>
</template>

<script>
  import * as contents from '@/contents/get'
  export default {
    name: 'Home',
    components: {
    },
    data() {
      return {
        translations: contents.translations
      }
    }
  }
</script>
<style>
  .home{
    margin-top:20vh;
  }
</style>

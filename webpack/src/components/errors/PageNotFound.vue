<template>
  <div id="page-not-found">
    Page Not Found
  </div>
</template>

<script>
  export default {
    name: 'page-not-found',
    data () {
      return {
        questions: []
      }
    }
  }
</script>

<style>
  h1, h2 {
    font-weight: normal;
  }

  table {
    margin: 0 auto;
    text-align: left;
  }

  .error {
    color: red;
  }
</style>

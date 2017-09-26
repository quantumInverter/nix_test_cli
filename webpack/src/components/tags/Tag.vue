<template>
  <a href="#"
     @click="sortByTag(tag.id)"
     class="tag badge badge-primary">
    {{ tag.name }}
  </a>
</template>

<script>
  // import { apiUrl } from '../Base'

  // const tagPath = (currentPath, query) => {
  //   return apiUrl + currentPath + query
  // }

  export default {
    name: 'tag',
    props: ['tag'],
    data () {
      return {}
    },
    methods: {
      sortByTag: function (id) {
        if (this.$route.name !== 'root') {
          this.$router.push(
            {
              name: 'root',
              query: {tag: this.tag.id}
            }
          )
        } else if (this.$route.query.tag === this.tag.id) {
          if (this.$route.query.tag === this.tag.id) {
            delete this.$route.query.tag
            return
          }
        }

        var query = this.$route.query
        query.tag = id
      }
    }
  }
</script>

<style>
  .tag {
    margin: 0px 2px;
  }
</style>

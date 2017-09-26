<template>
  <div class="tag-cloud card">
    <div class="card-body text-left">
      <tag
        v-for="tag in tags"
        :tag="tag"
        v-bind:key="tag.id">
      </tag>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { apiUrl } from '../Base'
  import Tag from './Tag'

  const tagsUrl = apiUrl + '/tags'

  export default {
    name: 'tag-cloud',
    data () {
      return {
        tags: []
      }
    },
    created () {
      this.fetchTags()
    },
    methods: {
      fetchTags () {
        var that = this
        axios.get(tagsUrl)
          .then((res) => {
            that.tags = res.data.data
          })
      }
    },
    components: {
      Tag
    }
  }
</script>

<style>
</style>

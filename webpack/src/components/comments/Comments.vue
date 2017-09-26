<template>
  <table class="table">
    <thead v-if="comments.length > 0">
      <th colspan="2">
        <h4 class="text-left">{{ comments.length }} Comments</h4>
      </th>
    </thead>
    <comment
      v-for="comment in comments"
      :comment="comment"
      v-bind:key="comment.id">
    </comment>
    <tr>
      <comment-form></comment-form>
    </tr>
  </table>
</template>

<script>
  import axios from 'axios'
  import { apiUrl } from '../Base'
  import Comment from './Comment'
  import CommentForm from './CommentForm'

  const commentsUrl = (fullRoute) => {
    return apiUrl + fullRoute + '/comments?'
  }

  export default {
    name: 'comments',
    data () {
      return {
        comments: []
      }
    },
    created () {
      this.fetchComments()
    },
    methods: {
      fetchComments () {
        var that = this
        axios.get(commentsUrl(that.$route.fullPath))
          .then((res) => {
            that.comments = res.data.data
          })
      }
    },
    components: {
      Comment,
      CommentForm
    }
  }
</script>

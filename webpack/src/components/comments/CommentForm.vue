<template>
  <td class="comment-form" colspan="2">
    <form class="container-fluid" @submit.prevent="submitComment">
      <fieldset class="form-content">
        <label v-if="!comment" for="content">Your Answer</label>
        <textarea v-model="content"
                  type="text"
                  rows="4"
                  id="content"
                  name="content"
                  class="form-control"></textarea>
      </fieldset>

      <button class="btn btn-primary mt-3">
        <span v-if="comment">Update this</span>
        <span v-else>Submit your</span>
        answer
      </button>
    </form>
  </td>
</template>

<script>
  import axios from 'axios'
  import { apiUrl } from '../Base'

  const updateCommentUrl = (id) => {
    return apiUrl + '/comments/' + id
  }

  const createCommentUrl = (questionId) => {
    return apiUrl + '/questions/' + questionId + '/comments'
  }

  export default {
    name: 'comment-form',
    props: ['comment'],
    data () {
      return {
        content: ''
      }
    },
    created () {
      if (this.comment) {
        this.content = this.comment.content
      }
    },
    methods: {
      submitComment: function () {
        var that = this

        if (that.comment) {
          console.log('test')
          axios.put(updateCommentUrl(that.comment.id), {
            content: this.content
          }).then((res) => {
            this.$parent.comment = res.data.data
            this.$parent.editing = false
          })
        } else {
          axios.post(createCommentUrl(that.$route.params.id), {
            content: that.content
          }).then((res) => {
            this.$parent.fetchComments()
          })
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

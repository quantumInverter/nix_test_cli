<template>
  <tr v-if="!editing">
    <voter
      :rating="comment.rating"
      :vote="comment.vote"
      :route="route">
    </voter>
    <td>
      <div class="row">
        <div class="col-lg-12 tag-list">
          <p v-for="line in formattedContent" @click="editing = !editing">
            {{ line }}
          </p>
        </div>
        <div class="col-lg-12 text-right timestamp">
          {{ comment.createdAt }}
        </div>
        <div class="col-lg-12 text-right">
          <user-thumb
            :user="comment.user"
            v-bind:key="comment.user.id">
          </user-thumb>
        </div>
      </div>
    </td>
  </tr>
  <tr v-else>
    <comment-form
      :comment="comment">
    </comment-form>
  </tr>
</template>

<script>
  import UserThumb from '../users/UserThumb'
  import CommentForm from './CommentForm'
  import Voter from '../shared/Voter'
  import { apiUrl } from '../Base'

  const commentUrl = (id) => {
    return apiUrl + '/comments/' + id
  }

  export default {
    name: 'comment',
    props: ['comment'],
    data () {
      return {
        editing: false
      }
    },
    components: {
      UserThumb,
      Voter,
      CommentForm
    },
    computed: {
      route: function () {
        return commentUrl(this.comment.id)
      },
      formattedContent: function () {
        return this.comment.content.split('\n')
      }
    }
  }
</script>

<style lang="scss">
  .timestamp {
    color: gray;
  }
</style>

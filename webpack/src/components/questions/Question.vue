<template>
  <div class="question">
    <h4 class="text-left">{{ question.title }}</h4>
    <table class="table" v-if="!editing">
      <tr>
        <voter
          :rating="question.rating"
          :route="route"
          :vote="question.vote"
          rowspan="2">
        </voter>
        <td>
          <p v-for="line in formattedContent" @click="editing = !editing">
            {{ line }}
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <div class="row">
            <div class="col-lg-8 tag-list">
              <tag
                v-for="tag in question.tags"
                :tag="tag"
                v-bind:key="tag.id">
              </tag>
            </div>
            <div class="col-lg-4 text-right timestamp">
              {{ question.createdAt }}
            </div>
            <div class="col-lg-12 text-right">
              <user-thumb
                :user="question.user"
                v-bind:key="question.user.id">
              </user-thumb>
            </div>
          </div>
        </td>
      </tr>
    </table>
    <table class="table" v-else>
      <question-form :question="question">
      </question-form>
    </table>
    <comments>
    </comments>
  </div>
</template>

<script>
  import axios from 'axios'
  import { apiUrl } from '../Base'
  import Tag from '../tags/Tag'
  import Comments from '../comments/Comments'
  import UserThumb from '../users/UserThumb'
  import Voter from '../shared/Voter'
  import QuestionForm from './QuestionForm'

  const questionUrl = (id) => {
    return apiUrl + '/questions/' + id
  }

  export default {
    name: 'question',
    data () {
      return {
        question: {
          user: {
            id: 0
          },
          content: ''
        },
        editing: false
      }
    },
    created () {
      this.fetchQuestion()
    },
    methods: {
      fetchQuestion () {
        var that = this
        axios.get(questionUrl(that.$route.params.id))
          .then((res) => {
            that.question = res.data.data
          })
      }
    },
    computed: {
      route: function () {
        return apiUrl + this.$route.fullPath
      },
      formattedContent: function () {
        return this.question.content.split('\n')
      }
    },
    components: {
      QuestionForm,
      Tag,
      Comments,
      UserThumb,
      Voter
    }
  }
</script>

<style lang="scss">
  .timestamp {
    color: gray;
  }
</style>

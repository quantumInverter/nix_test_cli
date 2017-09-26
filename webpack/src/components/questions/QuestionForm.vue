<template>
  <div class="question-form">
    <h1 class="col-lg-12 mb-2" v-if="!question">Add your Question</h1>
    <form class="container-fluid" @submit.prevent="submitQuestion">
      <div class="input-group mb-4 mt-3">
        <div class="input-group-addon" style="width: 3.5rem">Title</div>
        <input type="text"
               v-model="title"
               id="title"
               name="title"
               class="form-control"/>
      </div>

      <textarea v-model="content"
        type="text"
        rows="9"
        id="content"
        name="content"
        class="form-control mb-4">
      </textarea>

      <div class="input-group mb-4">
        <div class="input-group-addon" style="width: 3.5rem">Tags</div>
        <input v-model="tags"
               type="text"
               id="tags"
               name="tags"
               class="form-control"/>
      </div>

      <button class="btn btn-primary mt-3">
        <span v-if="question">Update this</span>
        <span v-else>Submit your</span>
        question</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import { apiUrl } from '../Base'

  const submitQuestionUrl = (id) => {
    return apiUrl + '/questions/' + id
  }

  export default {
    name: 'question-form',
    props: ['question'],
    data () {
      return {
        title: '',
        content: '',
        tags: ''
      }
    },
    created () {
      if (this.question) {
        var that = this
        that.title = that.question.title
        that.content = that.question.content
        that.tags = []
        that.question.tags.forEach(function (obj) {
          that.tags.push(obj.name)
        })
        that.tags = that.tags.join(' ')
      }
    },
    methods: {
      submitQuestion: function () {
        var that = this

        if (that.$route.params.id) {
          axios.put(submitQuestionUrl(that.$route.params.id), {
            title: this.title,
            content: this.content,
            tags: this.tags
          }).then((res) => {
            this.$parent.question = res.data.data
            this.$parent.editing = false
          })
        } else {
          axios.post(submitQuestionUrl(''), {
            title: this.title,
            content: this.content,
            tags: this.tags
          }).then((res) => {
            console.log(res.data)
          })
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

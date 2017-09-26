<template>
  <table id="questions" class="table table-hover">
    <question-thumb
      v-for="question in questions"
      :question="question"
      v-bind:key="question.id">
    </question-thumb>
    <nav class="mx-auto" v-if="pagination.total_entries > 8">
      <ul class="pagination">
        <li class="page-item">
          <a href="#" class="page-link" @click="goToPage(previousPage)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="n in pages" class="page-item">
          <a href="#" class="page-link" @click="goToPage(n)">{{ n }}</a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link" @click="goToPage(nextPage)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </table>
</template>

<script>
  import axios from 'axios'
  import { apiUrl } from '../Base'
  import QuestionThumb from './QuestionThumb'

  export default {
    name: 'questions-index',
    data () {
      return {
        questions: [],
        pagination: {}
      }
    },
    beforeRouteUpdate (to, from, next) {
      // Black magic, shouldn't use that cuz it's disgusting:
      var path = this.$router.resolve({name: 'root', query: from.query})
      window.history.pushState({}, null, path.href)

      this.fetchQuestions(path.href)
    },
    created () {
      this.fetchQuestions(null)
    },
    methods: {
      fetchQuestions (to) {
        var that = this
        to = to || this.$route.fullPath

        axios.get(apiUrl + to)
          .then((res) => {
            that.questions = res.data.data
            that.pagination = res.data.pagination
          })
      },
      goToPage: function (n) {
        var query = this.$route.query
        query.page = n
      }
    },
    components: {
      QuestionThumb
    },
    computed: {
      pages: function () {
        var pagesSize = Math.ceil(this.pagination.total_entries / this.pagination.per_page)
        var pages = []

        for (var i = 1; i <= pagesSize; i++) {
          pages.push(i)
        }

        return pages
      },
      nextPage: function () {
        var pagesSize = Math.ceil(this.pagination.total_entries / this.pagination.per_page)
        var page = parseInt(this.$route.query.page || 1)

        if (page < pagesSize) {
          page += 1
        }

        return pagesSize
      },
      previousPage: function () {
        var page = parseInt(this.$route.query.page || 1)

        if (page > 1) {
          page -= 1
        }

        return page
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

<template>
  <tr class="question-thumb">
    <td class="stats">
      <p class="text-center stat rating" :class="ratingClass">
        <span>{{ actualRating }}</span>
        <small>votes</small>
      </p>
      <p class="text-center stat comments-count border-muted text-muted">
        <span>{{ question.commentsCount }}</span>
        <small>replies</small>
      </p>
    </td>
    <td>
      <router-link :to="{ name: 'question', params: { id: question.id }}" class="title">
        {{ question.title }}
      </router-link>
      <p class="content">
        {{ question.content }}
      </p>
      <div class="row">
        <div class="col-lg-8 tag-list">
          <tag
            v-for="tag in question.tags"
            :tag="tag"
            v-bind:key="tag.id">
          </tag>
        </div>
        <div class="col-lg-4 text-right timestamp text-muted">
          {{ question.createdAt }}
        </div>
      </div>
      <user-thumb
        :user="question.user"
        v-bind:key="question.user.id">
      </user-thumb>
    </td>
  </tr>
</template>

<script>
  import Tag from '../tags/Tag'
  import UserThumb from '../users/UserThumb'

  export default {
    name: 'question-thumb',
    props: ['question'],
    data () {
      return {}
    },
    components: {
      Tag,
      UserThumb
    },
    computed: {
      ratingClass: function () {
        var rating = parseInt(this.question.rating)
        if (rating === 0) {
          return 'border-muted text-muted'
        } else if (rating > 0) {
          return 'border-success bg-success text-white'
        } else {
          return 'border-warning bg-warning text-white'
        }
      },
      actualRating: function () {
        return Math.abs(this.question.rating)
      }
    }
  }
</script>

<style lang="scss">
  .title:hover {
    text-decoration: none;
  }

  .stat {
    border: 1px solid;
    width: 60px;

    span {
      display: block;
    }

    small {
      font-size: 12px;
    }
  }

  .timestamp {
    font-size: 12px;
  }

  .content {
    font-size: 13px;
    margin-bottom: 8px;
  }
</style>

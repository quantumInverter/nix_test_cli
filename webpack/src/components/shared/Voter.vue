<template>
  <td class="text-center rating-form">
    <i class="voter fa fa-caret-up fa-3x mb-1"
       aria-hidden="true"
       :class="vote > 0?'text-success':''"
       @click="sendVote(1)">
    </i>
    <span class="rating">
      {{ rating }}
    </span>
    <i class="voter fa fa-caret-down fa-3x mt-1"
       aria-hidden="true"
       :class="vote < 0?'text-warning':''"
       @click="sendVote(-1)">
    </i>
  </td>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'voter',
    props: ['rating', 'vote', 'route'],
    data () {
      return {}
    },
    methods: {
      sendVote: function (rating) {
        switch (true) {
          case rating === this.vote:
            var rate = 0
            break
          case this.vote === 0:
            rate = rating
            break
          case rating === 1:
            rate = 0
            break
          case rating === -1:
            rate = 0
            break
        }

        axios.post(this.route + '/votes', {
          rating: rate
        }).then((res) => {
          this.rating = res.data.data.rating
          this.vote = res.data.data.vote
        }).catch((error) => {
          this.errors = error.response.data.errors
        })
      }
    }
  }
</script>

<style lang="scss">
  .voter:hover {
    cursor: pointer;
  }

  .rating-form .rating {
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
</style>

<template>
  <div class="user text-left row">
    <div class="col-lg-3 avatar-container">
      <img :src="avatarUrl" class="avatar img-thumbnail">
    </div>
    <div class="about-user col-lg-5">
      <h2 class="login">{{ user.login }}</h2>
      <div class="about">
        {{ user.about }}
      </div>
    </div>
    <div class="col-lg-4 row">
      <div class="col-lg-6 text-center mb-2">
        <div class="stats questions text-left d-inline-block">
          <h5 class="mb-0">{{ user.questions }}</h5>
          <span class="stat-name text-muted">questions</span>
        </div>
      </div>
      <div class="col-lg-6 text-center mb-2">
        <div class="stats comments text-left d-inline-block">
          <h5 class="mb-0">{{ user.comments }}</h5>
          <span class="stat-name text-muted">comments</span>
        </div>
      </div>
      <div class="col-lg-4 text-center mb-2">
        <div class="stats upvotes text-left d-inline-block">
          <h5 class="mb-0">{{ user.upvotes }}</h5>
          <span class="stat-name text-muted">upvotes</span>
        </div>
      </div>
      <div class="col-lg-4 text-center mb-3">
        <div class="stats downvotes text-left d-inline-block">
          <h5 class="mb-0">{{ user.downvotes }}</h5>
          <span class="stat-name text-muted">downvotes</span>
        </div>
      </div>
      <div class="col-lg-4 text-center mb-3">
        <div class="stats rating text-left d-inline-block">
          <h5 class="mb-0">{{ user.rating }}</h5>
          <span class="stat-name text-muted">rating</span>
        </div>
      </div>
      <div class="col-lg-12">
        <p>
          <i class="fa fa-calendar"></i>
          <span class="birth-date">{{ user.birthDate }}</span>
        </p>
        <p>
          <i class="fa fa-map-marker"></i>
          <span class="location">{{ location }}</span>
        </p>
        <p>
          <i class="fa fa-history"></i>
          {{ user.createdAt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { apiUrlBase, apiUrl } from '../Base'

  const userUrl = (id) => {
    return apiUrl + '/users/' + id
  }

  export default {
    name: 'user',
    data () {
      return {
        user: ''
      }
    },
    created () {
      this.fetchUser()
    },
    methods: {
      fetchUser () {
        var that = this
        axios.get(userUrl(that.$route.params.id))
          .then((res) => {
            that.user = res.data.data
            console.log(res.data)
          })
      }
    },
    computed: {
      avatarUrl: function () {
        return apiUrlBase + this.user.avatar
      },
      location: function () {
        // var location = [this.user.country, this.user.city, this.user.address]
        var location = ['USA', 'Nebraska', 'st.Elm h.105']
        return location.join(', ')
      }
    }
  }
</script>

<style lang="scss">
  .avatar.img-thumbnail {
    max-width: none;
  }

  .avatar-container {
    width: 254px;
  }

  .about-user {
    overflow-y: auto;
    height: 230px;
  }

  .stat-name {
    font-size: 12px;
  }

  .user .stats {
    line-height: 70%;

    h5 {
      font-weight: bolder;
    }
  }
</style>

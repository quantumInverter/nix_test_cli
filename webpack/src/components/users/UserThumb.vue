<template>
  <div class="user-thumb text-right">
    <span class="user text-left">
      <img :src="avatar" class="avatar float-left" />
      <router-link :to="{ name: 'user', params: { id: user.id }}">{{ user.login }}</router-link>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'user-thumb',
    props: ['user'],
    data () {
      return {}
    },
    computed: {
      avatar: function () {
        return process.env.RAILS_URL + this.user.avatar
      }
    }
  }
</script>

<style lang="scss">
  .user-thumb {
    .user .avatar {
      height: 30px;
    }

    .user {
      display: inline-block;
      width: 155px;
    }
  }
</style>

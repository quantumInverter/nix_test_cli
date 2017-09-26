<template>
  <div id="app" class="container" role="main">
    <div class="row" v-if="renderTags">
      <div class="col-lg-9">
          <transition name="fade"
                      enter-active-class="fadeLeftIn"
                      leave-active-class="fadeLeftOut">
            <router-view class="view row"></router-view>
          </transition>
      </div>
      <div class="col-lg-3">
        <login></login>
        <tag-cloud>
        </tag-cloud>
      </div>
    </div>
    <div class="row" v-else-if="fullWidth">
      <div class="col-lg-12">
        <router-view class="view row"></router-view>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <router-view class="view row"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import TagCloud from './components/tags/TagCloud'
  import Login from './components/users/Login'
  import User from './components/users/User'

  export default {
    name: 'app',
    components: {
      Login,
      TagCloud,
      User
    },
    computed: {
      renderTags: function () {
        return !(['user', 'sign_up', 'sign_in'].includes(this.$route.name))
      },
      fullWidth: function () {
        return ['user'].includes(this.$route.name)
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

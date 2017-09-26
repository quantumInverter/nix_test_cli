<template>
  <div class="login mb-4 card">
    <div class="card-header">Sign In</div>
    <form class="card-body form-group mb-0 pb-0" @submit.prevent="signIn">
      <label class="sr-only" for="email">E-Mail Address</label>
      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
        <input type="text"
               name="email"
               class="form-control"
               id="email"
               placeholder="you@example.com"
               v-model="email">
      </div>
      <label class="sr-only" for="password">Password</label>
      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
        <input type="password"
               name="password"
               class="form-control"
               id="password"
               placeholder="Password"
               v-model="password">
      </div>
      <div class="btn-group" role="group">
        <button type="submit" class="btn btn-success"><i class="fa fa-sign-in"></i> Sign In</button>
        <router-link :to="{ name: 'sign_up'}" href="#" class="btn btn-success"><i class="fa fa-user-plus"></i> Sign Up</router-link>
      </div>
      <p><a class="forgotten-pass btn btn-link pb-0" href="#">Forgot your password?</a></p>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import { apiUrl } from '../Base'

  const loginUrl = () => {
    return apiUrl + '/sign_in'
  }

  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    created () {
    },
    methods: {
      signIn: function () {
        axios.post(loginUrl(), {
          email: this.email,
          password: this.password
        }).then((res) => {
          console.log(res.data)
        })
      }
    }
  }
</script>

<style lang="scss">
  .forgotten-pass.btn {
    font-size: 14px;
  }
</style>

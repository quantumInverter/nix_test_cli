<template>
  <div class="user-form text-center mb-4 card">
    <h1 class="col-lg-12 mb-2 card-header" v-if="!passedUser">Sign Up</h1>

    <form class="container-fluid card-body" @submit.prevent="signUpOrUpdate">
      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
        <input type="text"
               name="login"
               class="form-control"
               id="login"
               placeholder="your_login"
               v-model="user.login">
      </div>

      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
        <input type="text"
               name="email"
               class="form-control"
               id="email"
               placeholder="you@example.com"
               v-model="user.email">
      </div>

      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
        <input type="password"
               name="password"
               class="form-control"
               id="password"
               placeholder="Password"
               v-model="user.password">
      </div>

      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
        <input type="password"
               name="passwordConfirmation"
               class="form-control"
               id="passwordConfirmation"
               placeholder="Password Confirmation"
               v-model="user.passwordConfirmation">
      </div>

      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 6rem">Birth Date</div>
        <input class="form-control"
               type="date"
               id="birthDate"
               v-model="user.birthDate">
      </div>

      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 4.2rem">Avatar</div>
        <input type="file"
               name="avatar"
               class="form-control"
               id="avatar">
      </div>

      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-flag"></i></div>
        <input type="text"
               name="country"
               class="form-control"
               id="country"
               placeholder="Country"
               v-model="user.country">
      </div>

      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-building"></i></div>
        <input type="text"
               name="city"
               class="form-control"
               id="city"
               placeholder="City"
               v-model="user.city">
      </div>

      <div class="input-group mb-2">
        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-address-card"></i></div>
        <input type="text"
               name="address"
               class="form-control"
               id="address"
               placeholder="Address"
               v-model="user.address">
      </div>

      <button class="btn btn-primary mt-3">Sign Up</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import { apiUrl } from '../Base'

  const submitUserUrl = (id) => {
    return apiUrl + '/users/' + id
  }

  export default {
    name: 'user-form',
    props: ['passed-user'],
    data () {
      return {
        user: {
          email: '',
          login: '',
          password: '',
          passwordConfirmation: '',
          avatar: '',
          country: '',
          city: '',
          address: '',
          birthDate: '1996-09-29'
        }
      }
    },
    created () {
    },
    methods: {
      signUpOrUpdate: function () {
        var that = this

        if (that.$route.params.id) {
          axios.put(submitUserUrl(that.$route.params.id),
            that.user
          ).then((res) => {
            console.log(res.data)
          })
        } else {
          axios.post(submitUserUrl(''),
            that.user
          ).then((res) => {
            console.log(res.data)
          })
        }
      }
    }
  }
</script>

<style lang="scss">
</style>

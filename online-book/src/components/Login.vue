<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <div v-if="errors && errors.length">
        <div v-for="error of errors">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Felhasznalonev">
          <b-form-input id="username" :state="state" v-model.trim="user.username"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Jelszo">
          <b-form-input type="password" id="password" :state="state" v-model.trim="user.password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Acceso</b-button>
        <b-button type="button" variant="success" @click.stop="register()">Registrar</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Login',
    data () {
      return {
        user: {},
        errors: []
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post(`http://localhost:3000/user/login`, this.user)
          .then(response => {
            this.$router.push({
              name: 'BookList'
            })
          })
          .catch(e => {
            console.log(e)
            this.errors.push(e)
          })
      },
      register () {
        this.$router.push({
          name: 'Register'
        })
      }
    }
  }
</script>


<style scoped>

</style>

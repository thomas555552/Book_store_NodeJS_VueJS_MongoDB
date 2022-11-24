<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Registro de usuario
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal1"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Username">
          <b-form-input id="username" :state="state" v-model.trim="user.username"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal2"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Password">
          <b-form-input id="pw" :state="state" v-model.trim="user.password"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal3"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="E-mail">
          <b-form-input id="email" :state="state" v-model.trim="user.email"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal4"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Edad">
          <b-form-input id="age" :state="state" v-model.trim="user.age"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal5"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Direccion">
          <b-form-input id="address" :state="state" v-model.trim="user.address"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal6"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Balance">
          <b-form-input id="balance" :state="state" v-model.trim="user.balance"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Guardar</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'Register',
    data () {
      return {
        user: {}
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post(`http://localhost:3000/user/register`, this.user)
          .then(response => {
            this.$router.push({
              name: 'Login',
            })
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>
<style scoped>

</style>

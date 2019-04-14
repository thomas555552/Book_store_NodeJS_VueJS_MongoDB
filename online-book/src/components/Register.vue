<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Felhasznalo regisztralasa
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter ISBN">
          <b-form-input id="isbn" :state="state" v-model.trim="user.username"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Title">
          <b-form-input id="title" :state="state" v-model.trim="user.password"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Author">
          <b-form-input id="author" :state="state" v-model.trim="user.email"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Publisher Year">
          <b-form-input id="published_year" :state="state" v-model.trim="user.age"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Publisher">
          <b-form-input id="publisher" :state="state" v-model.trim="user.address"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Publisher">
          <b-form-input id="publisher" :state="state" v-model.trim="user.balance"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
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

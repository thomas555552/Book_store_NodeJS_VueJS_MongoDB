<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Konyv hozzadasa

      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal1"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="ISBN">
          <b-form-input id="isbn" :state="state" v-model.trim="book.isbn"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal2"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Cim">
          <b-form-input id="title" :state="state" v-model.trim="book.title"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal3"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Szerzo">
          <b-form-input id="author" :state="state" v-model.trim="book.author"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal7"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Leiras">
          <b-form-input id="description" :state="state" v-model.trim="book.description"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal5"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Kiadas eve">
          <b-form-input id="published_year" :state="state" v-model.trim="book.published_year"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal6"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Ara">
          <b-form-input id="price" :state="state" v-model.trim="book.price"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal8"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Darabszam">
          <b-form-input id="piece" :state="state" v-model.trim="book.piece"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'CreateBook',
    data () {
      return {
        book: {}
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post(`http://localhost:3000/book/add-book`, this.book)
          .then(response => {
            this.$router.push({
              name: 'Login'

            })
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

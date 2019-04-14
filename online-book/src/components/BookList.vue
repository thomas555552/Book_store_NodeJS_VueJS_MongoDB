<template>
  <div>
  <Navigation/>
  <b-row>
    <b-col cols="12">
      <h2>
        Könyv Lista
      </h2>
      <b-table striped hover :items="books" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" variant="outline-primary" @click.stop="buyBook(row.item)">Vasarlas</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
  </div>
</template>

<script>
  import Navigation from './layout/Navigation'
  import axios from 'axios'

  export default {
    name: 'BookList',
    components: { Navigation },
    data () {
      return {
        fields: {
          isbn: { label: 'ISBN', sortable: true, 'class': 'text-center' },
          title: { label: 'Cim', sortable: true },
          author: { label: 'Szerzo', sortable: true },
          published_year: { label: 'Kiadasi ev', sortable: true },
          piece: { label: 'Darab'},
          price: {label: 'Ar'},
          actions: { label: 'Action', 'class': 'text-center' }
        },
        books: [],
        errors: []
      }
    },
    created () {
      axios.get(`http://localhost:3000/book`)
        .then(response => {
          this.books = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      buyBook (book) {
        this.$router.push({
          name: 'BuyBook',
          params: { id: book._id, title: book.title, price: book.price }
        })
      }
    }
  }
</script>

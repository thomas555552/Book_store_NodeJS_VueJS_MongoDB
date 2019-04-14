<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">Menu</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
      <b-button type="button" class="mr-sm-2" variant="outline-warning" @click.stop="modifyUser()">Adatok modositasa</b-button>
      <b-button type="button" class="my-2 my-sm-0" variant="outline-danger" @click.stop="logout()">Kijelentkezes</b-button>
      </b-navbar-nav>
    </b-navbar>
    <br>
  </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "Navigation",
      data() {
        return {
          users: []
        }
      },
      methods: {
        logout () {
          this.$router.push({
            name: 'Login'
          })
        },
        modifyUser(){
          axios.get(`http://localhost:3000/user`)
            .then(response => {
              this.users = response.data
            })
            .catch(e => {
              this.errors.push(e)
            })

          var i;
          while (this.users[i].isLoggedIn===false) {
            i++;
          }


          this.$router.push({
            name: 'ModifyUser',
            params: { id: this.users[2]._id }
          })
        }
      }
    }
</script>

<style scoped>

</style>

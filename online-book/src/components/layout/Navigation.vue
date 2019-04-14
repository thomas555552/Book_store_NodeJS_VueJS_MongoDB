<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">Menu</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
      <b-button type="button" class="mr-sm-2" variant="outline-warning">Adatok modositasa</b-button>
      <b-button type="button" class="my-2 my-sm-0" variant="outline-danger" @click.stop="register()">Kijelentkezes</b-button>
      </b-navbar-nav>
    </b-navbar>
    <br>
  </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>

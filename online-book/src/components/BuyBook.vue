<template>
<div>
  <Navigation/>
    <div>
      <b-card-group deck>
        <b-card
          border-variant="success"
          header="Sikeres vasarlas"
          header-bg-variant="success"
          header-text-variant="white"
          align="center"
        >
          <b-card-text>
            Konyv Cime: {{book_title }} <br/>
            Konyv Ara: {{book_price}} <br/>
            Felhasznalo neve: {{user_name}} <br/>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
</div>
</template>

<script>
  import axios from 'axios'
  import Navigation from "./layout/Navigation";

    export default {
        name: "BuyBook",
      data () {
        return {
          book_id: this.$route.params.id,
          book_title: this.$route.params.title,
          book_price: this.$route.params.price,
          user_name: this.$route.params.user_name,
        }
      },
      components: {Navigation}
    }

</script>

<style scoped>

</style>

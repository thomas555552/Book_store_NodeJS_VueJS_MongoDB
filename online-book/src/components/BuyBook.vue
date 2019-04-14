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
          <b-card-text>Lasdasd.</b-card-text>
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
      components: {Navigation}
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <Nav />
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import Nav from '../components/Navigation'

export default {
  components: { Nav },

  data: () => ({
    //
  }),
}
</script>

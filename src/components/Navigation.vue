<template>
  <v-navigation-drawer app>
    <v-list dense nav>
      <v-list-item link router :to="{ name: 'stock' }">
        <v-list-item-icon>
          <v-icon>mdi-package</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> Stock </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link router :to="{ name: 'list' }">
        <v-list-item-icon>
          <v-icon>mdi-view-list</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> List </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$store.commit('setUser', '')
      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style></style>

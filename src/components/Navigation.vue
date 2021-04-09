<template>
  <v-navigation-drawer app>
    <v-list dense nav>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-package</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title router :to="{ name: 'stock' }">
            Stock
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-view-list</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title router :to="{ name: 'List' }">
            List
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title @click="logout">Logout</v-list-item-title>
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

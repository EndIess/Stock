<template>
  <div class="container">
    <v-card elevation="2">
      <v-text-field v-model="name" label="Name" required />
      <v-btn block color="green darken-3" dark @click="submit"> Submit </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    submit() {
      this.name = this.name.trim()
      if (!this.name) {
        return
      }

      this.$store.commit('setUser', this.name)
      this.$router.push({ name: 'welcome' })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .v-card {
    width: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      font-size: 1.5em;
      font-weight: 500;
    }

    .v-input {
      margin-bottom: 10px;
      width: 100%;
    }
  }
}
</style>

<template>
  <v-container>
    <v-row>
      <template v-for="i in items">
        <v-col cols="6" md="3" :key="i.id">
          <v-card class="pa-3">
            <div>
              <img :src="i.base64" />
            </div>
            <p>ID: {{ i.id }}</p>
            <p>Name: {{ i.name }}</p>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: this.$store.state.store,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    height: 250px;
    max-width: 100%;
    object-fit: contain;
  }
}
</style>

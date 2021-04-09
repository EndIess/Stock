<template>
  <div class="container">Welcome {{ user.name }}</div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
    }
  },
}
</script>

<style lang="scss" scoped></style>

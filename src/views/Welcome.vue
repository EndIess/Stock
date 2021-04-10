<template>
  <div class="background">
    <div class="overlay"></div>
    <h1>Welcome {{ user.name }}</h1>
  </div>
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

<style lang="scss" scoped>
.background {
  height: 100vh;
  width: 100%;
  background: url('/wallpaper.jpg');
  position: relative;
  background-position: 50% 20%;
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.75;
}

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  font-size: 4em;
  font-weight: 500;
}
</style>

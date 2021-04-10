<template>
  <v-dialog v-model="dialog" width="400">
    <v-card class="px-5 pt-3">
      <v-text-field label="Name" v-model="name"></v-text-field>

      <v-file-input
        accept="image/*"
        label="Image"
        v-model="image"
      ></v-file-input>

      <v-card-actions class="pr-0 pt-0">
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="submit"> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    item: Object,
    action: String,
  },
  data() {
    return {
      dialog: false,
      name: '',
      image: null,
    }
  },
  watch: {
    dialog(val) {
      if (val && this.action === 'edit') {
        this.name = this.item.name
        this.image = this.item.image
      } else {
        this.name = ''
        this.image = null
      }
    },
  },
  methods: {
    async submit() {
      let image = ''

      if (this.image) {
        const file = this.image
        const fr = new FileReader()
        fr.readAsDataURL(file)
        image = await new Promise((resolve) => {
          fr.addEventListener('load', () => {
            resolve(fr.result)
          })
        })
      }

      const data = {
        name: this.name,
        image: this.image,
        base64: image,
      }
      if (this.action === 'create') {
        this.$store.commit('addStore', data)
      } else {
        data.id = this.item.id
        this.$store.commit('editStore', data)
      }

      this.dialog = false
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="pa-5">
    <div class="d-flex">
      <v-btn class="ml-auto" color="green darken-4" dark @click="openDialog()">
        Create
      </v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      item-key="index"
      class="elevation-1 mt-2"
    >
      <template v-slot:[`item.base64`]="{ item }">
        <img :src="item.base64" />
      </template>

      <template v-slot:[`item.action`]="{ item }">
        <v-btn color="yellow darken-1" dark @click="editItem(item)">
          Edit
        </v-btn>
        <v-btn class="ml-1" color="red darken-4" dark @click="deleteItem(item)">
          Delete
        </v-btn>
      </template>
    </v-data-table>

    <DataDialog ref="dialog" :item="selectItem" :action="action" />
  </div>
</template>

<script>
import DataDialog from '../components/DataDialog'
export default {
  components: { DataDialog },
  data() {
    return {
      headers: [
        { text: 'Id', align: 'center', value: 'id' },
        { text: 'Image', value: 'base64', align: 'center', sortable: false },
        { text: 'name', value: 'name', align: 'center' },
        { text: 'action', value: 'action', align: 'center' },
      ],
      dialog: false,
      selectItem: {},
      action: 'create',
      items: this.$store.state.store,
    }
  },
  methods: {
    openDialog() {
      this.action = 'create'
      this.$refs.dialog.dialog = true
    },
    editItem(item) {
      this.action = 'edit'
      this.selectItem = item
      this.$refs.dialog.dialog = true
    },
    deleteItem(item) {
      this.$store.commit('deleteStore', item)
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  max-height: 200px;
  max-width: 200px;
  margin-top: 10px;
}
</style>

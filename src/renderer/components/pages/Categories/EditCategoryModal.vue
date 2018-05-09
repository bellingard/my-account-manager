<template>
  <v-dialog v-model="open" persistent width="50%">
    <v-card v-if="this.category !== null">
      <v-card-title>
        <div>
          <span class="headline">Edit Category</span>
        </div>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              label="Name"
              v-model="name">
            </v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-switch
              :label="this.visible ? 'visible' : 'hidden'"
              v-model="visible"
            ></v-switch>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="blue--text darken-1" flat @click.native="updateCategory()">Update</v-btn>
        <v-btn class="blue--text darken-1" flat @click.native="close()">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'edit-category-modal',
  props: ['open', 'category'],
  data() {
    return {
      name: '',
      visible: true
    }
  },
  methods: {
    close() {
      this.$emit('closed')
    },
    updateCategory() {
      this.$repo.category(this.category.id).name = this.name
      this.$repo.category(this.category.id).hidden = !this.visible
      this.$emit('saved', this.category)
    }
  },
  watch: {
    category: function(newCategory) {
      if (newCategory) {
        this.name = newCategory.name
        this.visible = !newCategory.hidden
      }
    }
  }
}
</script>

<style>

</style>

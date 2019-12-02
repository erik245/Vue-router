<template>
  <v-card
    class="d-inline-flex flex-wrap"
    color="grey lighten-2"
    flat
    tile
  >
    <v-card
      v-for="brand in brands"
      :key="brand.entity_id"
      class="pa-2"
      :style="{margin: '20px', float: 'left'}"
      width=300
      height=200
      outlined
      tile
      v-on:click="itemClicked(brand)"
    >
      <v-card-title>Name: {{ brand.name }}</v-card-title>
      <v-card-title>Number: {{ brand.state_registrations.length }}</v-card-title>
    </v-card>
  </v-card>
</template>

<script>
import store from '../store';
store.dispatch('init');

export default {
  components: {},
  computed: {
    brands() {
      return store.state.brands
    }
  },
  methods: {
    itemClicked: brand => {
      window.location.href = `/#/details/${brand.entity_id}`
    }
  }
};
</script>

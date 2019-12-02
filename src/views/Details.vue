<template>
  <div class="details">
    <h1>Brand Name: {{brand.name}}</h1>
    <v-card
      v-for="reg in brand.state_registrations"
      :key="reg.registrationNumber"
      class="pa-2"
      :style="{margin: '20px', float: 'left'}"
      width=300
      height=200
      outlined
      tile
    >
      <v-card-title>Registration Number: {{reg.registrationNumber}}</v-card-title>
      <v-card-title>State: {{reg.state}}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import store from '../store';

export default {
  components: {
  },
  created: function() {
    store.dispatch('setId', this.$route.params.id);
  },
  computed: {
    brand() {
      return store.state.brand
    },
  }
};
</script>

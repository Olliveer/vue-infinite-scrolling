<template>
  <div class="home">
    <ListComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListComponent from '@/components/ListComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ListComponent,
  },
});
</script>

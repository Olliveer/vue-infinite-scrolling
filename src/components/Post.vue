<template>
  <div class="post">
    <h2>{{ post.author }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.post {
  background: #fff;
  padding: 1.5rem;
}

.post:not(:last-child) {
  border-bottom: 1px solid #ddd;
}

.post h2 {
  font-size: 1.3rem;
  padding-bottom: 0.25rem;
}

.post p {
  color: #888;
}
</style>

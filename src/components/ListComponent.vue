<template>
  <div class="scrolling-component" ref="scrollComponent">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { getPosts } from '@/utils/get-posts';
import Post from './Post.vue';

type PostData = {
  id: number;
  author: string;
  content: string;
};

const posts = ref<PostData[]>(getPosts(10));
const scrollComponent = ref(null);

function loadMorePosts() {
  let newPosts = getPosts(10);
  posts.value.push(...newPosts);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  let element: any = scrollComponent.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMorePosts();
  }
}
</script>

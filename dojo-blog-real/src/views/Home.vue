<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>

    <!-- <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">Delete a post</button> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts.js";
// @ is an alias to /src

export default {
  name: "Home",
  components: { PostList },
  setup() {
    // const showPosts = ref(true);
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
};
</script>




<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
    };
  },
  computed: {
    truncateText() {
      if (this.post.content && this.post.content.length > 250) {
        return this.post.content.substring(0, 150) + "...";
      }
      return this.post.content;
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <div class="card-body">
      <h5>{{ project.title }}</h5>
      <p>{{ project.content }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgb(232, 232, 232);
}
</style>
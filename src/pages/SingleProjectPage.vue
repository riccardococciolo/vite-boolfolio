<script>
import axios from "axios";

export default {
  data() {
    return {
      curProject: null,
      loading: false,
      baseUrl: 'http://127.0.0.1:8000/api/projects',
    };
  },
  created() {
    this.loading = true;
    axios
      .get(`${this.baseUrl}/${this.$route.params.slug}`)
      .then((resp) => {
        console.log(resp);
        this.curProject = resp.data.results
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<template>
  <div class="container mt-4">
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-else>
      <h1 class="text-white">{{ curProject.title }}</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
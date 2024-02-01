<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';



export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000/api/projects',
      projects: [],
    }
  },
  created() {
    axios.get('${this.baseUrl}')
    .then((resp) => {
      this.projects = resp.data.results.data;
    })
  },
  components: { ProjectCard }
}
</script>

<template>
  <div class="container">
    <h1>Lista dei Progetti</h1>
    <div class="row-cols-4">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>
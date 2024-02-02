<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';



export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000/api/projects',
      projects: [],
    }
  },
  created() {
    axios.get(`${this.baseUrl}`)
    .then((resp) => {
      console.log(resp)
      this.projects = resp.data.results;
    })
    .catch(error => {
    console.error(error);
  });
  },
  components: { ProjectCard }
}
</script>

<template>
  <div class="container">
    <h1>Lista dei Progetti</h1>
    <div class="row row-cols-3 g-5">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
  
</style>
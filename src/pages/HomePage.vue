<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';



export default {
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000/api/projects',
      projects: [],
      curPage: 1,
      lastPage: 1,
      total: 0,
    }
  },
  created() {
    this.getProjects(1);
  },
  methods: {
    getProjects(pageNum) {
      this.curPage = pageNum,
      axios.get(`${this.baseUrl}`, {
        params: {
          page: pageNum,
        }
      })
        .then((resp) => {
          console.log(resp)
          this.projects = resp.data.results.data;
          this.lastPage = resp.data.results.last_page;
          this.total = resp.data.results.total;
        })
        .catch(error => {
          console.error(error);
        });
    }
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
    <div class="py-3 text-end">
      <button class="btn btn-primary" :disabled="curPage === 1" @click.prevent="getProjects(curPage - 1)"> Prev </button>
      <button class="btn btn-primary mx-2" :class="{'btn-success': num === curPage}" v-for="num in lastPage" @click.prevent="getProjects(num)">{{ num }}</button>
      <button class="btn btn-primary" :disabled="curPage === lastPage" @click.prevent="getProjects(curPage + 1)"> Next </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
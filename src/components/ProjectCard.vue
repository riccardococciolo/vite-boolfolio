<script>
export default {
    props: {
        project: Object,
    },
    data() {
        return {

        }
    },
}
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

</style>
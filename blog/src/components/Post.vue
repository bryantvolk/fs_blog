<template>
  <div class="post container">
    <div class="title">
      <p>{{post.title}} by {{post.author}}</p>
    </div>
    <div class="body">
      <p>{{post.text}}</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'post',

  data() {
    return {
      post: {}
    }
  },

  created() {
    this.fetchData();
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      axios.get('http://localhost:8000/api/posts/'+this.$route.params.id+'/', {
        headers: {
        'Content-Type': 'application/json'
        }
      })
        .then(response => {
          this.post = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>
.title {
  text-align: left;
  margin-left: 10px;
}
.body {
  text-align: left;
  margin-left: 20px;
}
</style>

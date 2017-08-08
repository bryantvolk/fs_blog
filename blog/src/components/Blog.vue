<template>
  <div class="blog container">
    <div v-for="post in posts" v-bind:key="post._id">
      <div class="blogTitle">
        <p><router-link :to="{ name: 'Post', params: {id: post._id }}">{{post.title}}</router-link> by {{post.author}}</p>
        <div class="blogDate">
          {{ post.date.substring(0, 10) }}
        </div>
      </div>
      <div class="blogBody">
        <p>{{post.text}}</p>
      </div>
    </div>
    <div v-for="error in errors" v-bind:key="error._id">
      <p>{{error}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var dateFormat = require('dateformat');
export default {
  name: 'Home',
  data: () => ({
    posts: [],
    errors: []
  }),
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8000/api/posts', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          this.posts = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        })
    },
  }
}
</script>

<style scoped>
.blogTitle {
    text-align: left;
    margin-left: 10px;
}
.blogBody {
  text-align: left;
  margin-left: 20px;
  margin-bottom: 40px;
}
.blogDate {
  font-size: 80%;
}
a {
  color: #42b983;
  text-decoration: none;
}
.redBackground {
  background-color: red;
}
</style>


<template>
  <div class="container">
    <router-link to="/">Back</router-link>

    <h1 class="page-header">{{user.firstname}} {{user.lastname}}
      <span class="pull-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/' + user.id">Edit</router-link>
        <button class="btn btn-danger" v-on:click="deleteCustomer(user.id)">Delete</button>
      </span>
    </h1>
  
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> {{user.username}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{user.email}}</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'user-details',
    data: function() {
      return {
        users: [],
        user: {},
      }
    },
    
    methods:{
      
      getUsers() {
        fetch('http://localhost:8005/api/systemusers')
        .then(response => response.json() )
        .then(data => {
          this.users = data.results;
          this.user = this.users[1];
        })
        .catch(err => console.log(err));
      },
      
      getUser() {
        let userId = 
        fetch('http://localhost:8005/api/systemusers/' + userId)
        .then(response => response.json() )
        .then(data => {
          this.users = [...this.users, data];
        })
        .catch(err => console.log(err));
      },
    },

    created: function(){
        // this.fetchCustomer(this.$route.params.id);
        this.getUsers();
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="container">
    <router-link to="/">Back</router-link>

    <div v-if="notification" class="notification">
      {{notification}}
    </div>

    <h1 class="page-header">{{user.firstname}} {{user.lastname}}
      <span class="pull-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/' + user.id">Edit</router-link>
        <button class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete</button>
      </span>
    </h1>
  
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> {{user.username}}</li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{user.email}}</li>
      <li class="list-group-item"><strong>Created: </strong>{{user.created}}</li>
      <li class="list-group-item"><strong>Activated: </strong>{{user.activated}}</li>
      <!-- <li v-for="(item, index) in user" :key="item.id"><strong>{{index}}</strong> : {{item}}</li> -->
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'user-details',
    data: function() {
      return {
        userId: this.$route.params.id,
        user: {},
        notification: ''
      }
    },
    
    methods:{
      
      getUser() {
        fetch('http://localhost:8005/api/systemusers/' + this.userId)
        .then(response => response.json() )
        .then(data => {
          this.user = data;
        })
        .catch(err => console.log(err));
      },
     
      deleteUser(userId) {
        fetch('http://localhost:8005/api/systemusers/' + userId, {
          method: 'DELETE'
        })
        .then(() => {
          this.notification = "User deleted!";
        })
        .catch(err => console.log(err));
      }
    },

    created: function(){
        this.getUser(this.userId);
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

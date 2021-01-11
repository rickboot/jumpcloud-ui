<template>
  <div class="container">
    <router-link to="/">Back</router-link>

    <div v-if="notification" class="notification">
      {{notification}}
    </div>

    <form v-on:submit.prevent="createUser">
      <h4>Create User</h4>
      <div class="well">
 
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" v-model="user.firstname">
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" v-model="user.lastname">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'create',

    data: function() {
      return {
        user: {},
        notification: ''
      }
    },
    
    methods:{

      createUser() {
        fetch('http://localhost:8005/api/systemusers/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify(this.user),
        })
        .then(() => { 
          this.notification = 'User created!';
        })
        .catch(err => console.log(err));
      },
    },

    created: function() {
      this.notification = '';
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

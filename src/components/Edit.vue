<template>
  <div class="container">
    <router-link class="subnav" to="/">Back</router-link>

    <div v-if="notification" class="notification">
      {{notification}}
    </div>
    
    <form v-on:submit.prevent="updateUser">
      <h4>Edit User</h4>
      
      <div class="well">
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

      <button type="submit" class="button-submit">Submit</button>
    </form>
  
  </div>
</template>

<script>
  export default {
    name: 'edit',

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

      updateUser() {
        if (!this.user.firstname && !this.user.lastname && !this.user.email) {
          this.notification = 'Please fill out fields.';
          return;
        }

        const user = {
          email: this.user.email,
          firstname: this.user.firstname,
          lastname: this.user.lastname
        };
        
        fetch('http://localhost:8005/api/systemusers/' + this.userId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify(user),
        })
        .then(() => {
          this.notification = "User updated!";
        })
        .catch(err => console.log(err));
      },
    },

    created: function(){
      this.getUser(this.userId);
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

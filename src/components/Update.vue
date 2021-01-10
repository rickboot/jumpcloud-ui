<template>
  <div class="container">
    <router-link to="/">Back</router-link>

    <form v-on:submit="updateUser">
      <div class="well">
        <h4>User Info</h4>

        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" placeholder="First Name" v-model="user.firstname">
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="user.lastname">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="Email" v-model="user.email">
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

  </div>
</template>

<script>
  export default {
    name: 'update',

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
      updateUser() {
        // RICK
        let userId = this.users[0].id;

        const user = {
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname
        };

        fetch('http://localhost:8005/api/systemusers/' + userId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify(user),
        })
        .then(this.getUsers)
        .catch(err => console.log(err));
      },
    },
    created: function(){
        // this.fetchCustomer(this.$route.params.id);
        this.getUsers();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
 color: white;
}

</style>

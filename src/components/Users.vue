<template>
  <div class="container">

    <h4>Users</h4>

    <table class="table table-striped">

      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr  v-for="user in users" :key="user.id">
          <td>{{user.firstname}} {{user.lastname}}</td>
          <td>{{user.username}}</td>
          <td>{{user.email}}</td>
          <td>
            <router-link :to="/edit/+user.id" tag="button">Edit</router-link>
            <router-link :to="/details/+user.id" tag="button">Details</router-link>
            <button>
              <span @click="deleteUser(user.id)" tag="button" class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </td>
        </tr>
      </tbody>

    </table>

  </div>

</template>

<script>

export default {

  name: 'Users',
  components: {
  },

  data: function() {
    return {
      users: []
    }
  },

  methods: {

    getUsers() {
      fetch('http://localhost:8005/api/systemusers')
      .then(response => response.json() )
      .then(data => {
        this.users = data.results;
      })
      .catch(err => console.log(err));
    },

    deleteUser(userId) {
      fetch('http://localhost:8005/api/systemusers/' + userId, {
        method: 'DELETE'
      })
      .then(this.getUsers)
      .catch(err => console.log(err));
    }
  },

  created() {
    this.getUsers();
  }

}

</script>

<style>

</style>


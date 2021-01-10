<template>
  <div class="container">

    <h4>Users</h4>

    <div class="button-container">
        <button @click.prevent="deleteUser">Delete</button>
    </div>

    <table class="table table-striped">

      <thead>
        <tr class="tableheader">
          <th class="name-column">Name</th>
          <th class="username-column">Username</th>
          <th class="email-column">Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr  v-for="user in users" :key="user.id">
          <td class="name-column">{{user.firstname}} {{user.lastname}}</td>
          <td class="username-column">{{user.username}}</td>
          <td class="email-column">{{user.email}}</td>
          <td>
            <router-link to="/update" tag="button">Edit</router-link>
          </td>
        </tr>
      </tbody>

    </table>

  </div>

</template>

<script>
// import UsersPane from './components/UsersPane.vue'

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

    deleteUser() {
      // RICK
      let userId = this.users[0].id;

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


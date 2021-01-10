<template>
  <div id="app">
    <header>Users</header>

    <!-- ACTION BAR ================================ -->
    <div class="action-bar">

      <!-- ADD USER -------------------------------- -->
      <form id="add-user">
          <input v-model="username" type="text" id="username-input" placeholder="username">
          <input v-model="firstname" type="text" id="firstname-input" placeholder="first name">
          <input v-model="lastname" type="text" id="lastname-input" placeholder="last name">
          <input v-model="email" type="text" id="email-input" placeholder="email">
          <button @click.prevent="createUser">Create User</button>
          <button @click.prevent="updateUser">Update User</button>
      </form>


      <!-- ACTION BUTTONS -------------------------- -->
      <div class="button-container">
          <button @click.prevent="deleteUser">Delete</button>
      </div>

      <!-- USER LIST =============================== -->
      <table>
        <thead>
          <tr class="tableheader">
            <th class="check-column"></th>
            <th class="name-column">Name</th>
            <th class="username-column">Username</th>
            <th class="email-column">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr class="user-rows" v-for="user in users" :key="user.id">
            <td>
              <input type="checkbox" id="check">
            </td>
            <td class="name-column">{{user.firstname}} {{user.lastname}}</td>
            <td class="username-column">{{user.username}}</td>
            <td class="email-column">{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

</template>

<script>
// import UsersPane from './components/UsersPane.vue'

export default {
  name: 'App',
  components: {
  },
  data: function() {
    return {
      users: [],
      username: 'EatMyShorts',
      firstname: 'Bart',
      lastname: 'Simpson',
      email: 'bart@thesimpsons.com'
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

    getUser() {
      // RICK
      // let userId = this.users[0].id;
      let userId;

      fetch('http://localhost:8005/api/systemusers/' + userId)
      .then(response => response.json() )
      .then(data => {
        this.users = [...this.users, data];
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
    },

    createUser() {
      const user = {
        username: this.username,
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname
      };

      fetch('http://localhost:8005/api/systemusers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(user),
      })
      .then(this.getUsers)
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
    }
  },

  created() {
    this.getUsers();
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  border: 1px gray solid;
  background-color: #161F32;
  color: white;
}

.tableheader {
  background-color: #fff;
  color: #000;
  height: 20px;
  font-size: 12px;
}

.button-container {
  padding: 10px;
}

.check-column {
  width: 20px;
}

.name-column {
  padding: 0px 15px;
  width: 20%;
}

.username-column {
  padding: 0px 15px;
  width: 20%;
}

.email-column {
  width: 60%;
}

body {
  background-color: #161F32;
}
button {
  width: 100px;
  padding: 4px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 3px;

  background-color: #41C8C3;
  border-style: none;
  outline: none;
  transition: all .2s ease;
}

button:hover {
  filter: brightness(90%);
}

header {
  font-size: 24px;
  text-align: left;
  padding: 4px 20px;
  background-color: #fff;
  color: #000;
}

input {
  outline: none;
}

h3 {
  margin: 40px 0 0;
}

table {
  border: none;

  border-spacing: 0 5px;
  background-color: #fff;
  color: #000;
  font-size: 13px;
}

.user-rows {
  height: 40px;
  background-color: #E8F0FE;
  transition: all .2s ease-in-out;
}

.user-rows:hover {
  filter: brightness(90%);
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


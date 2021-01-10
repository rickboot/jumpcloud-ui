<template>
    <div id="app">
      <nav class="navbar navbar-default">    
        <div class="container">
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">Users</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/create">Create User</router-link></li>
              <li><router-link to="/update">Edit User</router-link></li>
              <li><router-link to="/details">User Details</router-link></li>
            </ul>
          </div>
        </div>
    </nav>
    
    <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
 }

</script>

<style>
</style>


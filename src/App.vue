<template>
    <div id="app">

      <nav class="navbar navbar-default">    
        <div class="container">
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">System Users</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/create">Create User</router-link></li>
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
button {
  margin-left: 10px;
  border-style: none;
  outline: none;
  background: none;
}

.notification {
  height: 30px;
  padding-left: 10px;
  line-height: 30px; /* hack - convert to flex */
  vertical-align: center;
  background-color:skyblue;
}
</style>


<template>
    <div id="app">

      <nav class="navbar navbar-default">    
        <div class="container">
          <div id="">
            <ul class="nav navbar-nav">
              <li>
                <router-link to="/">
                  <span class="button-user glyphicon glyphicon-home"></span> 
                  <span class="button-user">User Console</span>
                </router-link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/create"><button class="button-user">Create User</button></router-link></li>
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

body {
  background-color: #022b3a;
  color: #000;
}

button {
  border-style: none;
  border-radius: 2px;
  font-size: 14px;
  background: none;
}

.navbar-nav,
button:hover {
  filter: brightness(90%);
}

h2, h4 {
  color: #fff; 
};

table {
  border: none;
}

tr {
  height: 40px;
  background-color: #ebf5ee;
  color: #000;
  transition: all .2s ease-in-out;
}

thead tr { 
  background-color: #bfdbf7;
}

tbody tr:hover {
  background-color: #fff;
}

td, th {
  padding-left: 20px;
}

tr td:first-child,
tr th:first-child { 
  border-top-left-radius: 5px; 
  border-bottom-left-radius: 5px; 
}

tr td:last-child,
tr th:last-child {  
  border-top-right-radius: 5px; 
  border-bottom-right-radius: 5px; 
}

.button-submit {
  height: 30px;
  width: 80px;
  border-style: none;
  outline: none;
  border-radius: 2px;
  font-size: 14px;
  background: rgb(0, 162, 255);
  color: #fff;;
}

.button-user {
  margin-left: 10px;
  border-style: none;
  outline: none;
  background: none;
}

.button-user:hover {
  color:rgb(0, 162, 255);
}

.glyphicon {
  padding-right: 10px;
}

.navbar {
  background-color: #ebf5ee;
  background-color: #fff;
}

.notification {
  height: 30px;
  padding-left: 10px;
  line-height: 30px; /* hack - convert to flex */
  vertical-align: center;
  background-color:skyblue;
}

.subnav {
  color: rgb(52, 129, 173);
}

</style>


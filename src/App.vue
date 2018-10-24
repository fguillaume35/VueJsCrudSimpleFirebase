<template>
  <div class="container" id="app">
    <header class="page-header">
      <nav class="navbar navbar-light bg-light navbar-expand-lg">
          <div class="container">
          <router-link class="navbar-brand" style="font-size:40px" to="/">Framework et librairies javascript</router-link>

          <div class="collapse navbar-collapse" style="margin-top:22px" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link :to="{ name: 'listing' }" class="nav-link">Accueil</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mémo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Nouveautés</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'src/assets/scss/design.scss';
  .gap {
    margin-top: 50px;
  }
    h1, h2 {
    font-weight: normal;
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
    color: black;
  }
</style>

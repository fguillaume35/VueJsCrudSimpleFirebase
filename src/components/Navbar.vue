<template>
      <nav class="navbar bg-primary navbar-dark navbar-expand-lg">
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
<template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

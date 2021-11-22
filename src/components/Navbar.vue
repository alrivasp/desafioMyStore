<template>
  <div id="navbar">
    <nav class="navbar fixed-top navbar-expand-lg bg-dark container">
      <router-link class="navbar-brand" :to="{ name: 'Inicio' }"
        ><img
          src="../assets/logostore.png"
          alt="MyStore Logotipo"
          class="logomusic"
      /></router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{ name: 'Inicio' }" class="nav-link text-light"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link
              :to="{ name: 'agregarproductos' }"
              class="nav-link text-light"
              >Ingresar<b> nueva Pelicula</b></router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav mr-5">
          <li class="nav-item active">
            <b>
              <router-link
                :to="{ name: 'micarrito' }"
                class="nav-link text-warning"
                >🛒Cesta ({{ $store.getters.productoosEnCarro }})
              </router-link>
            </b>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.logomusic {
  height: 50px;
}
</style>

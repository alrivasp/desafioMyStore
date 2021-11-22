<template>
  <div class="inicio">
    <section>
      <div>
        <div>
          <img
            src="../assets/fond.jpg"
            alt="Fondo collage"
            class="img-fluid"
            style="width: 100%; height: 70vh !important"
          />
        </div>
      </div>
    </section>
    <div class="mt-5">
      <div class="container mb-3 mt-5">
        <h1>Bienvenidos a <b>Movie Store</b></h1>
        <p></p>
        <form class="mt-5">
          <input
            class="form-control"
            type="buscar"
            placeholder="Buscar tu pelicula favorita..."
            aria-label="Search"
            :value="$store.state.buscar"
            @input="$store.dispatch('laBusqueda', $event.target.value)"
          />
        </form>
      </div>

      <div class="container">
        <div v-if="$store.getters.buscarProducto.length > 0">
          <Listado
            v-if="$store.getters.buscarProducto.length > 0"
            :productos="$store.getters.buscarProducto"
          ></Listado>
        </div>
        <div v-else>
          <div class="producto-not-found my-5">Producto no encontrado.</div>
          <div></div>
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Listado from "../components/Listado.vue";
export default {
  name: "Inicio",
  components: { Listado },
};
</script>

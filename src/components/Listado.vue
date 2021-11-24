<template>
  <div class="producto-list mt-5">
    <div class="container mt-5">
      <div class="row">
        <div
          class="col-md-6 col-lg-4 my-3"
          v-for="producto in productos"
          :key="producto.id"
        >
          <div class="card h-100 card-box">
            <div class="images-container">
              <img
                :src="producto.src"
                class="card-img-top image-producto"
                alt="Discos"
              />
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-danger">{{ producto.nombreMovie }}</h5>
              <p class="card-text">
                {{ producto.descripcionMovie }}
              </p>
              <p class="card-text">
                <i>Tipo formato: </i>
                {{ producto.tipo }}
              </p>
              <div>
                <div v-if="producto.acepta === true">
                  <h4 class="card-text producto-price text-danger">
                    <b> Oferta:</b>
                    ${{
                      parseInt(
                        producto.precio * (1 - producto.descuento / 100)
                      ).toLocaleString("de-DE")
                    }}
                  </h4>
                  <p class="card-text producto-price-without-clearance pb-3">
                    <b>Antes:</b> ${{
                      producto.precio.toLocaleString("de-DE")
                    }}
                    - {{ producto.descuento }}% <b>DCTO</b>
                  </p>
                </div>
                <div v-else>
                  <p class="card-text producto-price">
                    ${{ producto.precio.toLocaleString("de-DE") }}
                  </p>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-danger"
                style="margin-top: auto"
                @click="addToShoppingCart(producto)"
              >
                A la Cesta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listado",
  props: {
    productos: { type: Array, require: true },
  },
  methods: {
    addToShoppingCart(producto) {
      this.$store.dispatch("agregarProductoAlCarro", producto);
    },
  },
};
</script>

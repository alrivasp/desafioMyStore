<template>
  <div class="container">
    <table class="table table-bordered">
      <tbody>
        <tr v-for="(item, $index) in cartItems" :key="$index">
          <td class="align-middle">
            <img :src="item.src" alt="" class="img-fluid" />
          </td>
          <td class="align-middle">
            <h3 class="text-danger">
              {{ item.nombreMovie }}
            </h3>
            <p>{{ item.descripcionMovie }}</p>
            <div>
              <div v-if="item.acepta === true">
                <h4 class="card-text text-danger">
                  <b> Ahora:</b>
                  ${{
                    parseInt(
                      item.precio * (1 - item.descuento / 100)
                    ).toLocaleString("de-DE")
                  }}
                </h4>
                <p class="card-text pb-3">
                  <b> Antes:</b> ${{ item.precio.toLocaleString("de-DE") }} -
                  {{ item.descuento }}%
                </p>
              </div>
              <div v-else>
                <p class="card-text">
                  ${{ item.precio.toLocaleString("de-DE") }}
                </p>
              </div>
            </div>
          </td>
          <td class="align-middle">
            <button @click="reduceItemQuantity($index)">-</button
            >{{ item.cantidad
            }}<button @click="increaseItemQuantity(item)">+</button>
            <hr />
            <button
              class="btn btn-danger"
              @click="eliminarProductoDelCarro($index)"
            >
              Eliminar
            </button>
          </td>
          <td class="align-middle">
            <h5><b>Precio</b></h5>
            <h4 class="total-shopping-cart text-danger">
              ${{
                parseInt(
                  item.precio * (1 - item.descuento / 100) * item.cantidad
                ).toLocaleString("de-DE")
              }}
            </h4>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <div
        class="mt-3 text-right"
        v-if="$store.state.carritoDeCompras.length > 0"
      >
        <h4 class="total">
          <b> Total: </b>${{
            parseInt($store.getters["montoTotalCarro"]).toLocaleString("de-DE")
          }}
        </h4>

        <div class="container text-right">
          <button class="btn btn-warning">Finalizar Compra</button>
        </div>
      </div>

      <h4 class="mt-5" v-else>No hay peliculas en tu carro</h4>
      <br /><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "ElCarro",
  computed: {
    cartItems() {
      return this.$store.getters.enElCarro;
    },
  },
  methods: {
    increaseItemQuantity(item) {
      console.log("submit increaseItemQuantity");
      this.$store.dispatch("agregarProductoAlCarro", item);
    },

    reduceItemQuantity(index) {
      console.log("submit reduceItemQuantity");
      this.$store.dispatch("reducircantidad", index);
    },

    eliminarProductoDelCarro(index) {
      this.$store.dispatch("eliminarProductoDelCarro", index);
    },
  },
};
</script>

<template>
  <div id="agregarproducto">
    <div class="container mt-5">
      <br />
      <br />
      <br />
      <form
        @submit.prevent="agregarProductoAlListado"
        class="table table-bordered py-3 px-3"
      >
        <div class="form-group">
          <label>Nombre de la Pelicula:</label>

          <input
            class="form-control"
            type="text"
            v-model="form.nombreMovie"
            required
            placeholder="Nombre de la Pelicula"
          />
        </div>

        <div class="form-group">
          <label>Imagen:</label>

          <input
            class="form-control"
            type="text"
            v-model="form.src"
            required
            placeholder="Url"
          />
        </div>
        <div class="form-group">
          <label>Descripción:</label>

          <input
            class="form-control"
            type="text"
            v-model="form.descripcionMovie"
            required
            placeholder="Descripción"
          />
        </div>
        <div class="form-group">
          <label>Precio:</label>

          <input
            class="form-control"
            type="number"
            v-model.number="form.precio"
            required
            placeholder="Precio"
          />
        </div>

        <div class="form-group">
          <label>Categoría:</label>

          <select class="custom-select" v-model="form.categoria" required>
            <option disabled selected value="">Elige una categoría</option>
            <option value="Rock">Heroes</option>
            <option value="Pop">Ciencia ficcion</option>
            <option value="Metal">Policial</option>
          </select>
        </div>

        <div class="form-group">
          <label>Tipo:</label>

          <select class="custom-select" v-model="form.tipo" required>
            <option disabled selected value="">Tipo de formato</option>
            <option value="white">Digital</option>
            <option value="red">BlueRay</option>
            <option value="blue">Dvd</option>
          </select>
        </div>

        <div class="form-group">
          <label>Descuento:</label>

          <select class="custom-select" v-model="form.acepta" required>
            <option disabled selected value="">Selecciona</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>

        <div class="form-group" v-if="form.acepta">
          <label>De cuánto? (%):</label>

          <input
            class="form-control"
            type="number"
            min="0"
            max="100"
            step="1"
            v-model.number="form.descuento"
            v-if="form.acepta"
            required
            placeholder="Descuento"
          />
        </div>

        <button class="btn btn-danger" type="submit">Producto Listo</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgregarProductos",
  data: () => ({
    form: {
      nombreMovie: "",
      descripcionMovie: "",
      categoria: "",
      tipo: "",
      acepta: false,
      descuento: null,
      precio: null,
      src: "",
    },
  }),
  methods: {
    agregarProductoAlListado() {
      console.log("submit");
      console.log(this.form);
      this.$store.dispatch("agregarProductoAlListado", this.form);
      alert(`Disco ${this.form.nombreMovie} listo.`);
      this.form = "";
    },
  },
};
</script>

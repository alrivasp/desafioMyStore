import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buscar: "",
    carritoDeCompras: [],
    productos: [
      {
        nombreMovie: "Volver al futuro Trilogia",
        descripcionMovie:
          "Marty viaja al pasado de manera accidental en una maquina del tiempo",
        precio: 49990,
        descuento: 30,
        acepta: true,
        categoria: "Ciencia Ficcion",
        tipo: "Digital",
        src: "https://http2.mlstatic.com/D_NQ_NP_844795-MLA32921981794_112019-O.jpg",
      },
      {
        nombreMovie: "Piratas del caribe saga",
        descripcionMovie:
          "Jack Sparrow junto al Perla negra navegan por los 7 mares.",
        precio: 5990,
        descuento: 10,
        acepta: true,
        categoria: "Ciencia ficcion",
        tipo: "Digital",
        src: "https://elclavo.com/wp-content/uploads/2011/05/piratas-del-caribe-4.jpg",
      },
      {
        nombreMovie: "El señor de los anillos",
        descripcionMovie:
          "Frodo tiene la dificil mision de destruir el anillo.",
        precio: 29990,
        descuento: 20,
        acepta: true,
        categoria: "De epoca",
        tipo: "Digital",
        src: "https://i.pinimg.com/originals/0e/b7/59/0eb7590d962d59bffcf09c907a6268e4.jpg",
      },
      {
        nombreMovie: "Arma mortal Saga",
        descripcionMovie:
          "Los policia Glober y Gibson luchan contra el crimen.",
        precio: 69520,
        descuento: 10,
        acepta: true,
        categoria: "Policial",
        tipo: "Digital",
        src: "https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/67/73/64/20146911.jpg",
      },
      {
        nombreMovie: "Batman Saga",
        descripcionMovie: "Bruce Wine es el hombre murcielago",
        precio: 35990,
        descuento: 10,
        acepta: true,
        categoria: "Heroes",
        tipo: "Digital",
        src: "https://luquitelodice.files.wordpress.com/2012/07/poster-batman-el-caballero-de-la-noche-asciende-espac3b1ol-latino-2012-pelicula-ts-hq-descargar-1-link-by-www-compugamestv-com.jpg",
      },
      {
        nombreMovie: "Superman Saga",
        descripcionMovie: "El super hombre defiende el Mundo.",
        precio: 25500,
        descuento: 5,
        acepta: true,
        categoria: "Heroes",
        tipo: "Digital",
        src: "https://es.web.img3.acsta.net/medias/nmedia/18/89/70/81/20063083.jpg",
      },
    ],
  },
  getters: {
    buscarProducto(state) {
      if (state.buscar === "") {
        return state.productos;
      } else {
        return state.productos.filter(
          (producto) =>
            producto.nombreMovie
              .toLowerCase()
              .includes(state.buscar.toLowerCase()) ||
            producto.descripcionMovie
              .toLowerCase()
              .includes(state.buscar.toLowerCase()) ||
            producto.tipo.toLowerCase().includes(state.buscar.toLowerCase()) ||
            producto.categoria
              .toLowerCase()
              .includes(state.buscar.toLowerCase())
        );
      }
    },

    enElCarro(state) {
      return state.carritoDeCompras.map((item) => {
        const producto = state.productos.find(
          (producto) => producto.nombreMovie === item.nombreMovie
        );
        return {
          nombreMovie: producto.nombreMovie,
          descripcionMovie: producto.descripcionMovie,
          precio: producto.precio,
          descuento: producto.descuento,
          acepta: producto.acepta,
          src: producto.src,
          cantidad: item.cantidad,
        };
      });
    },

    montoTotalCarro(state) {
      return state.carritoDeCompras.reduce((acumula, item) => {
        acumula =
          acumula + item.precio * (1 - item.descuento / 100) * item.cantidad;
        return acumula;
      }, 0);
    },

    productoosEnCarro(state) {
      return state.carritoDeCompras.reduce((acumula, item) => {
        acumula = acumula + item.cantidad;
        return acumula;
      }, 0);
    },
  },
  mutations: {
    LA_BUSQUEDA(state, busqNueva) {
      state.buscar = busqNueva;
    },

    AGREGAR_PRODUCTO_AL_LISTADO(state, pnuevo) {
      state.productos.push(pnuevo);
    },

    AGREGAR_PRODUCTO_AL_CARRO(state, producto) {
      state.carritoDeCompras.push({ ...producto, cantidad: 1 });
    },

    INCREMENTAR_CANTIDAD(state, productoOkEnCarriro) {
      productoOkEnCarriro.cantidad++;
    },

    REDUCIR_CANTIDAD(state, index) {
      state.carritoDeCompras[index].cantidad--;
    },

    ELIMINAR_PRODUCTO_CARRO(state, index) {
      state.carritoDeCompras.splice(index, 1);
    },
  },
  actions: {
    laBusqueda(context, busqNueva) {
      context.commit("LA_BUSQUEDA", busqNueva);
    },

    agregarProductoAlListado(context, pnuevo) {
      context.commit("AGREGAR_PRODUCTO_AL_LISTADO", { ...pnuevo });
    },

    agregarProductoAlCarro(context, producto) {
      const productoOkEnCarriro = context.state.carritoDeCompras.find(
        (productoOkEnCarriro) =>
          (producto.nombreMovie && producto.descripcionMovie) ===
          (productoOkEnCarriro.nombreMovie &&
            productoOkEnCarriro.descripcionMovie)
      );

      if (productoOkEnCarriro) {
        context.commit("INCREMENTAR_CANTIDAD", productoOkEnCarriro);
      } else {
        context.commit("AGREGAR_PRODUCTO_AL_CARRO", producto);
      }
    },

    reducircantidad(context, index) {
      if (context.state.carritoDeCompras[index].cantidad > 1) {
        context.commit("REDUCIR_CANTIDAD", index);
      } else {
        context.commit("ELIMINAR_PRODUCTO_CARRO", index);
      }
    },
    eliminarProductoDelCarro(context, index) {
      const productoIndex = context.state.carritoDeCompras[index];
      context.commit("ELIMINAR_PRODUCTO_CARRO", productoIndex);
    },
  },
  modules: {},
});

<template>
  <div id="micarrito" class="mt-5">
    <div class="mt-5">
      <br />
      <br />
      <br />
      <ElCarro></ElCarro>
    </div>
  </div>
</template>

<script>
import ElCarro from "../components/ElCarro.vue";
export default {
  name: "MiCarrito",
  components: { ElCarro },
};
</script>

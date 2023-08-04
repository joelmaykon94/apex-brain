<template>
  <div class="home">
    <BemVindo />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import BemVindo from "@/components/BemVindo.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    BemVindo,
    Footer
  }
};
</script>

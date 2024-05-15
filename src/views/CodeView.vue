<template>
  <section>
    <div class="client-banner">
      <NavBar></NavBar>
    </div>
    <div class="container-sm services mb-3">
      <h4 class="py-3">TUTOR CODE OF CONDUCT</h4>
      <object
        data="/src/assets/pdf/Code of Conduct.pdf"
        type="application/pdf"
        class="pdf"
      ></object>
    </div>
  </section>
  <ContactUs></ContactUs>
  <Footer></Footer>
</template>

<script>
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Code of Conduct",
  components: {
    ContactUs,
    Footer,
    NavBar,
  },
};
</script>

<style scoped></style>

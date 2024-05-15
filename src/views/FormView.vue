<template>
  <section>
    <div v-if="smallBanner" class="client-banner"><NavBar></NavBar></div>
  </section>

  <section>
    <!-----------Our Offers------------->
    <div class="container-sm py-2 my-lg-5 services-apply mt-5 my-4">
      <div class="tutorFormRegister">
        <!-- Tutor Request Form -->
        <div v-if="request">
          <h3 class="hero-header fs-2 py-2">TUTOR REQUEST FORM</h3>
          <Form></Form>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact section -->

  <!-- <div v-if="contactSection">
    <ContactUs></ContactUs>
  </div> -->

  <!-- <div v-if="contactSection"><Footer></Footer></div> -->

  <div v-if="thankYou">
    <div class="client-banner">
      <NavBar></NavBar>
    </div>
    <div class="container-sm py-2 services bg-white">
      <div class="fs-5 px-lg-5 px-2 text-start mb-lg-2 mb-3 lh-lg">
        <p class="mt-lg-5 mt-3">Dear {{ tutorRequest.parentName }},</p>
        <p class="py-lg-3 pb-lg-3 pb-2">
          Thank you for considering our tuition service for your ward's
          educational needs. We have received your request and are set to work
          on giving you an excellent tutor to help <%= student %> become an
          excellent student.
        </p>
        <p class="">
          We kindly ask for your patience within this timeframe as we strive to
          fulfill your request to the best of our ability. If you have any
          questions or additional information to share, please feel free to get
          in touch:
          <a href="tel:0246011004">0246011004</a> or
          <a href="tel:0243934353">0243934353</a>.
        </p>

        <p class="">
          Regards, <br />
          Lifeline.
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
</template>

<script>
import About from "@/components/About.vue";
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";
import ChooseUs from "@/components/ChooseUs.vue";
import Form from "@/components/Form.vue";
import NavBar from "@/components/NavBar.vue";
import TheMessage from "@/components/TheMessage.vue";

export default {
  name: "Private Tuition",

  data() {
    return {
      request: true,
      bigBanner: true,
      smallBanner: true,
      contactSection: true,
      thankYou: false,
      tutorRequest: {
        parentName: "",
      },
    };
  },

  methods: {
    display() {
      this.request = true;
      (this.bigBanner = false),
        (this.smallBanner = true),
        (this.contactSection = false);
    },
  },

  components: {
    About,
    ContactUs,
    Footer,
    ChooseUs,
    Form,
    TheMessage,
    NavBar,
  },
};
</script>

<style scoped></style>

<template>
  <div class="client-banner">
    <NavBar></NavBar>
  </div>

  <div class="container-sm services-apply mt-lg-5 mt-4 py-3">
    <h1 class="fs-1 py-2">WE ARE LIFELINE</h1>
    <About></About>

    <section class="py-lg-5 py-3 bg-success text-start">
      <h4 class="text-white fs-1 fw-bolder text-center">What We Represent</h4>

      <p class="text-white px-lg-5 px-3 about-desc">
        At Lifeline, we specialize in providing tailored solutions to the myriad
        educational challenges encountered by schools, parents, and students.
        Our motto, "Think Solutions; think Lifeline," encapsulates our
        commitment to being the definitive answer to educational needs. We are
        more than just a solution; we are the epitome of excellence in
        education.
      </p>
    </section>

    <section class="row py-5">
      <h4 class="fs-1 fw-bolder text-center">Our Services</h4>
      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-header">
            <h3 class="card-title">Private Tuition</h3>
          </div>
          <div class="card-body text-muted">
            <p>
              Our private tuition services cater to students seeking targeted
              assistance in various subjects and educational levels. We use
              varied teaching approaches and problem-solving techniques to help
              students excel.
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-header">
            <h3 class="card-title">Consultancy</h3>
          </div>
          <div class="card-body text-muted">
            <p>
              We are your premier partner in achieving educational excellence.
              Our consultancy service is meticulously crafted to provide
              comprehensive guidance and support for schools, educators,
              parents, and students.
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-header">
            <h3 class="card-title">Counselling</h3>
          </div>
          <div class="card-body text-muted">
            <p>
              We provide tailored guidance to you and your ward. Contact us
              comprehensive guidance and counseling services. Together, let's
              pave the way for your ward's holistic development and a brighter,
              more fulfilling future! 🌟📚
            </p>
          </div>
        </div>
      </div>
    </section>

    <TheMessage></TheMessage>

    <template
      ><div class="lh-lg text-start px-lg-5 fs-5 py-5 fs-beauty">
        <p>
          We pride ourselves on equipping educators with cutting-edge
          methodologies and techniques that elevate teaching standards.
        </p>

        <p>
          We understand the importance of effective school management and
          functionality. Our cutting-edge technologies are tailored to optimize
          school processes, ensuring seamless and efficient operations. From
          administrative tasks to student management systems, our tech solutions
          are designed to empower your school to thrive.
        </p>

        <h4>Our Team</h4>
        <h5>Meet Our Amazing Team</h5>
        <p>
          Join our community of passionate educators committed to growth and
          innovation. Experience the Lifeline advantage and witness your
          teaching skills soar to new heights! Step into a world where solutions
          meet educational excellence. Choose Lifeline Educational Solutions
          Limited for a transformative educational journey! 🚀📚✨
        </p>
      </div></template
    >
  </div>

  <ContactUs></ContactUs>
  <Footer></Footer>
</template>

<script>
import About from "@/components/About.vue";
import ContactUs from "@/components/ContactUs.vue";
import TheMessage from "@/components/TheMessage.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "About Page",
  components: {
    About,
    ContactUs,
    TheMessage,
    NavBar,
    Footer,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.about-desc {
  line-height: 2;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>

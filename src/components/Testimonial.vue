<template>
  <section class="banner-half">
    <!-- Carousel-content -->

    <div data-bs-ride="carousel" data-bs-interval="6000" class="carousel slide">
      <div class="carousel-inner shadow">
        <h2 class="choose-title pt-lg-3">What Our Clients Say</h2>
        <div class="carousel-item">
          <div class="card myCard">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                I have had a number of tutors teach my children, but none has
                been as effective as the Lifeline tutor I have now. Thank you.
              </p>
              <h6 class="card-subtitle mb-2 text-muted">Mr. Erik</h6>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <div class="card myCard">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                The tutor is very good. He takes his time to teach my children
                and is very patient with them. He assist them with their
                homework, help them when they don't understand something and
                works with them even on his off days.
              </p>
              <h6 class="card-subtitle mb-2 text-muted">Mr. Emmanuel</h6>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card myCard">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">
                My daughter had reading challenge.She couldn't identify the
                letters and the sounds. Lifeline came in and helped. Now she can
                read.
              </p>
              <h6 class="card-subtitle mb-2 text-muted">Mrs. David</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div>
      <button
        class="btn btn-primary"
        data-bs-target="#testimonial"
        data-bs-slide="prev"
      >
        <i class="fa fa-arrow-circle-o-right"></i>
      </button>

      <button
        class="btn btn-primary shadow-one"
        data-bs-target="#testimonial"
        data-bs-slide="next"
      >
        <i class="fa fa-arrow-circle-o-left"></i>
      </button>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "Testimonial Component",
};
</script>

<style scoped>
#testimonial {
  padding: 4% 15%;
  background-color: #e64848;
}

.testimony {
  background-color: #fff;
  color: #000;
}

.testimonial-item {
  height: 130%;
  padding: 7% 8%;
}

.carousel-control-next {
  padding: 5px;
  margin: 5px;
}
</style>

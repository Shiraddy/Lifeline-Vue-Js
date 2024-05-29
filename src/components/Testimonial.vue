<template>
  <section class="">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/tutor1.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>First slide label</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              autem ut quis dolorem perspiciatis consequatur eos reprehenderit
              totam et. Sint nisi blanditiis nobis. Libero corrupti tempore sit
              numquam nisi distinctio!
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/tutor2.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>Second slide label</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sapiente quo eos, tenetur, et minus corporis commodi nulla
              laboriosam quae unde pariatur beatae modi enim repellat!
              Laudantium est eum repellat autem saepe, aspernatur ducimus
              impedit corporis quo ut voluptatem rerum dicta voluptatibus,
              debitis deleniti magnam? Enim id corporis veniam aliquam?
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/images/tutor3.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>Third slide label</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
              quae odio ratione labore. Vitae itaque voluptatibus optio!
              Doloribus aliquid architecto dignissimos. Blanditiis voluptatum
              quae debitis odit vero harum nostrum, cum neque voluptatem nisi
              ipsam dolorum optio voluptatibus cumque ab eum! Fugiat distinctio
              cumque recusandae harum delectus, inventore incidunt libero!
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial Component",
};
</script>

<style scoped>
.tes-text {
  color: white;
}

.test-text {
  font-family: "Kanit", sans-serif;
  font-size: 1.1rem;
}

.caro-item-about {
  height: 45vh;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.8);
  width: 55%;
  height: 35%;
  font-size: 1.1rem;
  font-family: "Kanit" Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 15px;
  padding: 7px 10px;
  position: absolute;
  bottom: 8%;
  left: 23.33%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-inner {
  max-width: 100%;
  height: auto;
}

.caro-pic {
  max-width: 100%;
  height: 80%;
}
</style>

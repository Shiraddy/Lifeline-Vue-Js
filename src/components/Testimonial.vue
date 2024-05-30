<template>
  <section class="">
    <div id="testimonialCarousel" class="carousel slide">
      <div class="carousel-inner banner">
        <div class="carousel-item active">
          <div class="card">
            <Panel>
              <template #header>
                <div class="flex align-items-center gap-2">
                  <Avatar image="/images/Pic.png" size="large" shape="circle" />
                </div>
              </template>
              <template #footer>
                <div
                  class="flex flex-wrap align-items-center justify-content-between gap-3"
                >
                  <div class="flex align-items-center gap-2">
                    <Button icon="pi pi-user" rounded text></Button>
                  </div>
                  <!-- <span class="p-text-secondary">Updated 2 hours ago</span> -->
                  <span class="p-text-secondary">Mr. Sule</span>
                </div>
              </template>
              <template #icons>
                <Menu ref="menu" id="config_menu" :model="items" popup />
              </template>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </p>
            </Panel>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <Panel>
              <template #header>
                <div class="flex align-items-center gap-2">
                  <Avatar image="/images/Pic.png" size="large" shape="circle" />
                </div>
              </template>
              <template #footer>
                <div
                  class="flex flex-wrap align-items-center justify-content-between gap-3"
                >
                  <div class="flex align-items-center gap-2">
                    <Button icon="pi pi-user" rounded text></Button>
                  </div>
                  <!-- <span class="p-text-secondary">Updated 2 hours ago</span> -->
                  <span class="p-text-secondary">Madam Beatrice</span>
                </div>
              </template>
              <template #icons>
                <Menu ref="menu" id="config_menu" :model="items" popup />
              </template>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </p>
            </Panel>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <Panel>
              <template #header>
                <div class="flex align-items-center gap-2">
                  <Avatar image="/images/Pic.png" size="large" shape="circle" />
                </div>
              </template>
              <template #footer>
                <div
                  class="flex flex-wrap align-items-center justify-content-between gap-3"
                >
                  <div class="flex align-items-center gap-2">
                    <Button icon="pi pi-user" rounded text></Button>
                  </div>
                  <!-- <span class="p-text-secondary">Updated 2 hours ago</span> -->
                  <span class="p-text-secondary">Alhaji Ahmed Adam</span>
                </div>
              </template>
              <template #icons>
                <Menu ref="menu" id="config_menu" :model="items" popup />
              </template>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </p>
            </Panel>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <i
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
          class="bi-caret-left-square text-danger fs-1 me-3"
        ></i>

        <i
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
          class="bi-caret-right-square text-danger fs-1"
        ></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial Component",
  data() {
    return {
      items: [
        {
          label: "Refresh",
          icon: "pi pi-refresh",
        },
        {
          label: "Search",
          icon: "pi pi-search",
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-times",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-inner.banner {
  position: relative;
  height: 500px; /* Adjust the height as needed */
}

.carousel-item {
  height: 100%;
}

.card {
  position: absolute;
  top: 50%;
  left: 46%;
  transform: translate(-50%, -50%);
  width: 80%; /* Adjust the width as needed */
  max-width: 800px; /* Set a maximum width for the card */
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Adjust the background color and opacity */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
</style>

<template>
  <section class="container-fluid">
    <!-- <div class="card flex justify-content-center">
      <Sidebar v-model:visible="visible">
        <template #container="{ closeCallback }">
          <div class="flex flex-column h-full">
            <div
              class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0"
            >
              <span class="inline-flex align-items-center gap-2">
                <Avatar
                  image="/images/logo.png"
                  class="mr-2"
                  size="large"
                  shape="circle"
                />
                <span class="font-semibold text-2xl text-danger">Lifeline</span>
              </span>
              <span>
                <Button
                  type="button"
                  @click="closeCallback"
                  icon="pi pi-times"
                  rounded
                  outlined
                  class="h-2rem w-2rem"
                ></Button>
              </span>
            </div>
            <div class="overflow-y-auto">
              <ul class="list-none p-3 m-0">
                <li></li>
              </ul>
            </div>
          </div>
        </template>
      </Sidebar>
      <Button icon="pi pi-bars" @click="visible = true" />
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-dark">
      <RouterLink class="navbar-brand text-danger" to="/"
        ><img
          id="#banner"
          class="logo"
          src="/images/logo.png"
          alt="LIFELINE"
        />LIFELINE</RouterLink
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
        <!-- header -->
        <div class="offcanvas-header bg-success">
          <h5
            class="offcanvas-title navbar-brand text-danger"
            id="offcanvasNavbarLabel"
          >
            <img src="/images/logo.png" alt="" class="nav-logo" />LIFELINE
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <!-- body -->
        <div class="offcanvas-body nav-background">
          <ul class="navbar-nav ms-auto pt-4 ps-2 me-lg-4">
            <li class="nav-item menu px-2 text-center">
              <RouterLink class="nav-link menu-link text-white" to="/"
                >Home</RouterLink
              >
            </li>

            <li class="nav-item menu px-2 text-center dropdown">
              <RouterLink class="nav-link menu-link text-white" to="#"
                >Services<span class="fa fa-caret-down px-1 d-inline"></span
              ></RouterLink>
              <div class="dropdown-content text-start">
                <RouterLink class="nav-link menu-link" to="/tuition"
                  >Private Tuition</RouterLink
                >
                <RouterLink class="nav-link menu-link" to="/counselling"
                  >Counselling</RouterLink
                >
                <RouterLink class="nav-link menu-link" to="/consultancy"
                  >Consultancy</RouterLink
                >
              </div>
            </li>

            <li class="nav-item menu px-2 text-center dropdown">
              <RouterLink class="nav-link menu-link text-white" to="#"
                >Tutor<span class="fa fa-caret-down px-1 d-inline"></span
              ></RouterLink>
              <div class="dropdown-content text-start">
                <RouterLink class="nav-link menu-link" to="/login"
                  >Sign In</RouterLink
                >
                <RouterLink class="nav-link menu-link" to="/apply"
                  >Apply</RouterLink
                >
                <RouterLink class="nav-link menu-link" to="/code"
                  >Code of Conduct</RouterLink
                >
                <!-- <a class="nav-link menu-link" to="/faq">Tutor Faq</a> -->
                <!-- <a class="nav-link menu-link" to="/faq">Code of Conduct</a> -->
                <!-- <a class="nav-link menu-link" to="#">Submit Forms</a> -->
              </div>
            </li>
            <li class="nav-item menu px-2 dropdown">
              <RouterLink class="nav-link menu-link text-white" to="#"
                >Pages<i class="fa fa-caret-down px-1 d-inline"></i
              ></RouterLink>
              <div class="dropdown-content text-start">
                <RouterLink class="nav-link menu-link text-white" to="/blog"
                  >Blog</RouterLink
                >
                <RouterLink class="nav-link menu-link text-white" to="/gallery"
                  >Gallery</RouterLink
                >
                <RouterLink class="nav-link menu-link text-white" to="/about"
                  >About</RouterLink
                >
                <RouterLink class="nav-link menu-link text-white" to="/lifeline"
                  >Admin</RouterLink
                >
              </div>
            </li>
            <li class="nav-item menu px-2 text-center">
              <a class="nav-link menu-link text-white" href="#contact"
                >Contact</a
              >
            </li>
            <li class="nav-item menu px-2 text-center">
              <RouterLink class="nav-link menu-link text-white" to="/faq"
                >Faq</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped></style>

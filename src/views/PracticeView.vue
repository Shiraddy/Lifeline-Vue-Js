<template>
  <div class="container-fluid client-banner">
    <NavBar></NavBar>
  </div>
  <div class="container-sm services py-4 px-4">
    <h3>CODE PRACTICE</h3>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2">
          <!-- <template class="card flex justify-content-center">
            <div class="text-start">
              <Menu :model="basics" />
            </div>
          </template> -->
          <template>
            <div class="card flex justify-content-center">
              <Menu :model="side" class="w-full md:w-15rem">
                <template #start>
                  <span class="inline-flex align-items-center gap-1 px-2 py-2">
                    <svg
                      width="35"
                      height="40"
                      viewBox="0 0 35 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-2rem"
                    >
                      <path
                        d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                        fill="var(--p-primary-color)"
                      />
                      <path
                        d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                        fill="var(--text-color)"
                      />
                    </svg>
                    <span class="font-medium text-xl font-semibold"
                      >PRIME<span class="text-primary">APP</span></span
                    >
                  </span>
                </template>
                <template #submenuitem="{ item }">
                  <span class="text-primary font-bold">{{ item.label }}</span>
                </template>
                <template #item="{ item, props }">
                  <a
                    v-ripple
                    class="flex align-items-center"
                    v-bind="props.action"
                  >
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge
                      v-if="item.badge"
                      class="ml-auto"
                      :value="item.badge"
                    />
                    <span
                      v-if="item.shortcut"
                      class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
                      >{{ item.shortcut }}</span
                    >
                  </a>
                </template>
                <template #end>
                  <button
                    v-ripple
                    class="relative overflow-hidden w-full border-none bg-transparent flex align-items-start p-2 pl-3 text-color hover:surface-100 border-noround cursor-pointer transition-colors transition-duration-200"
                  >
                    <Avatar
                      image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                      class="mr-2"
                      shape="circle"
                    />
                    <span class="inline-flex flex-column align-items-start">
                      <span class="font-bold">Amy Elsner</span>
                      <span class="text-sm">Admin</span>
                    </span>
                  </button>
                </template>
              </Menu>
            </div>
          </template>
        </div>
        <div class="col-lg-10">
          <template class="card mx-3">
            <div>
              <TabMenu :model="items" />
            </div>
          </template>
          <Toolbar>
            <template #start>
              <Button
                icon="pi pi-plus"
                class="mr-2"
                severity="secondary"
                text
              />
              <Button
                icon="pi pi-print"
                class="mr-2"
                severity="secondary"
                text
              />
              <Button icon="pi pi-upload" severity="secondary" text />
            </template>

            <template #center>
              <IconField>
                <InputIcon>
                  <i class="pi pi-search" />
                </InputIcon>
                <InputText placeholder="Search" />
              </IconField>
            </template>

            <template #end>
              <SplitButton label="Save" :model="items"></SplitButton
            ></template>
          </Toolbar>
          <Panel>
            <template #header>
              <h4>To Do App</h4>
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              nisi unde deserunt dolore, est officia natus labore. Vel, facere
              tempore deserunt dicta veritatis quia libero nesciunt
              necessitatibus hic quas iste sint, assumenda ab, perferendis eius.
              Voluptatum exercitationem maxime, eaque voluptas labore magnam ex
              odit perferendis omnis incidunt saepe dolorem. Harum fugiat
              perferendis inventore eveniet voluptates.
            </p>
            <template #icons></template>
            <template #footer>
              <Button
                icon="pi pi-bookmark"
                severity="secondary"
                rounded
                text
              ></Button>
            </template>
          </Panel>

          <button type="button" class="btn btn-primary" @click="showToastBtn">
            Show live toast
          </button>

          <div class="toast-container position-fixed top-0 end-0 p-3">
            <div
              class="toast"
              :class="showToast ? 'd-block' : ''"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <img src="" class="rounded me-2" alt="" />
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  class="btn-close"
                  @click="showToast = false"
                ></button>
              </div>
              <div class="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Menu from "primevue/menu";

export default {
  name: "Practice Area",
  components: {
    NavBar,
  },
  data() {
    return (
      {
        date: null,
        showToast: false,
        basics: [
          { label: "New", icon: "pi pi-plus" },
          { label: "Search", icon: "pi pi-search" },
        ],
        items: [
          { label: "Dashboard", icon: "pi pi-home" },
          { label: "Transactions", icon: "pi pi-chart-line" },
          { label: "Products", icon: "pi pi-list" },
          { label: "Messages", icon: "pi pi-inbox" },
        ],

        side: [
          {
            label: "New",
            icon: "pi pi-plus",
            shortcut: "⌘+N",
          },
          {
            label: "Search",
            icon: "pi pi-search",
            shortcut: "⌘+S",
          },
        ],
      },
      {
        label: "Profile",
        items: [
          {
            label: "Settings",
            icon: "pi pi-cog",
            shortcut: "⌘+O",
          },
          {
            label: "Messages",
            icon: "pi pi-inbox",
            badge: 2,
          },
          {
            label: "Logout",
            icon: "pi pi-sign-out",
            shortcut: "⌘+Q",
          },
        ],

        Nav: [
          {
            separator: true,
          },
          {
            label: "Documents",
            items: [
              {
                label: "New",
                icon: "pi pi-plus",
                shortcut: "⌘+N",
              },
              {
                label: "Search",
                icon: "pi pi-search",
                shortcut: "⌘+S",
              },
            ],
          },
          {
            label: "Profile",
            items: [
              {
                label: "Settings",
                icon: "pi pi-cog",
                shortcut: "⌘+O",
              },
              {
                label: "Messages",
                icon: "pi pi-inbox",
                badge: 2,
              },
              {
                label: "Logout",
                icon: "pi pi-sign-out",
                shortcut: "⌘+Q",
              },
            ],
          },
          {
            separator: true,
          },
        ],
        visible: false,
      }
    );
  },
  methods: {
    showToastBtn() {
      this.showToast = true;
    },
  },
};
</script>

<style scoped></style>

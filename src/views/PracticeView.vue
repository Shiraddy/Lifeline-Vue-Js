<template>
  <div class="container-fluid client-banner">
    <NavBar></NavBar>
  </div>
  <div class="container-sm services py-4 px-4">
    <h3>CODE PRACTICE</h3>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2">
          <div class="card flex justify-content-center">
            <Menu :model="Nav" class="w-full md:w-15rem">
              <template #start>
                <span>
                  <span class="font-medium text-xl font-semibold"
                    >PRIME<span class="text-primary">APP</span></span
                  >
                </span>
              </template>
              <template #submenuheader="{ item }">
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
                  class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"
                >
                  <Avatar
                    image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                    class="mr-2"
                    shape="circle"
                  />

                  <template>
                    <Card style="width: 25rem; overflow: hidden">
                      <template #header> </template>
                      <template #title>Advanced Card</template>
                      <template #subtitle>Card subtitle</template>
                      <template #content> </template>
                      <template #footer> </template>
                    </Card>
                  </template>
                </button>
              </template>
            </Menu>
          </div>
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
          <Button @click="confirm1($event)" label="Save" outlined></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TabMenu from "primevue/tabmenu";

export default {
  name: "Practice Area",
  components: {
    NavBar,
  },
  data() {
    return {
      items: [
        { label: "Dashboard", icon: "pi pi-home" },
        { label: "Transactions", icon: "pi pi-chart-line" },
        { label: "Products", icon: "pi pi-list" },
        { label: "Messages", icon: "pi pi-inbox" },
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
    };
  },
  methods: {
    show() {
      this.$toast.add({
        severity: "info",
        summary: "Info",
        detail: "Message Content",
        life: 3000,
      });
    },

    confirm1(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: "Are you sure you want to proceed?",
        icon: "pi pi-exclamation-triangle",
        rejectProps: {
          label: "Cancel",
          severity: "secondary",
          outlined: true,
        },
        acceptProps: {
          label: "Save",
        },
        accept: () => {
          this.$toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted",
            life: 3000,
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    },
  },
};
</script>

<style scoped></style>

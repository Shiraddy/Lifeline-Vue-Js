<template>
  <div class="container-fluid client-banner">
    <NavBar></NavBar>
  </div>
  <div class="container-sm services py-4 px-4">
    <h3>CODE PRACTICE</h3>
    <div class="card flex justify-content-center">
      <Menu :model="items" class="w-full md:w-15rem">
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
          <a v-ripple class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
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
                <template #header>
                  
                </template>
                <template #title>Advanced Card</template>
                <template #subtitle>Card subtitle</template>
                <template #content>
                  
                </template>
                <template #footer>
                  
                </template>
              </Card>
            </template>
          </button>
        </template>
      </Menu>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Practice Area",
  components: {
    NavBar,
  },
  data() {
    return {
      items: [
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
  },
};
</script>

<style scoped></style>

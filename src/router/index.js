import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CodeView from "@/views/CodeView.vue";
import FaqView from "@/views/FaqView.vue";
import PracticeView from "@/views/PracticeView.vue";
import TuitionView from "@/views/TuitionView.vue";
import CounsellingView from "@/views/CounsellingView.vue";
import ConsultancyView from "@/views/ConsultancyView.vue";
import LoginView from "@/views/LoginView.vue";
import ApplyView from "@/views/ApplyView.vue";
import LifelineView from "@/views/LifelineView.vue";
import GalleryView from "@/views/GalleryView.vue";
import FormView from "@/views/FormView.vue";
import BlogView from "@/views/BlogView.vue";
import AdminView from "@/views/AdminView.vue";
import PersonalView from "../views/PersonalView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/code",
      name: "code",
      component: CodeView,
    },

    {
      path: "/faq",
      name: "Faq",
      component: FaqView,
    },

    {
      path: "/practice",
      name: "practice",
      component: PracticeView,
    },

    {
      path: "/tuition",
      name: "tuition",
      component: TuitionView,
    },

    {
      path: "/consultancy",
      name: "consultancy",
      component: ConsultancyView,
    },

    {
      path: "/counselling",
      name: "counselling",
      component: CounsellingView,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },

    {
      path: "/apply",
      name: "apply",
      component: ApplyView,
    },

    {
      path: "/lifeline",
      name: "lifeline",
      component: LifelineView,
    },

    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },

    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },

    {
      path: "/form",
      name: "form",
      component: FormView,
    },

    {
      path: "/admin",
      component: () => import("../views/AdminView.vue"),

      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/personal",
      component: () => import("../views/PersonalView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      const user = await getCurrentUser();
      if (user) {
        next();
      } else {
        alert("You have no access");
        next("/login");
      }
    } catch (error) {
      console.error(error);
      next("/");
    }
  } else {
    next();
  }
});

export default router;

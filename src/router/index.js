import { createRouter, createWebHistory } from "vue-router";

import Coaches from "../components/coaches/Coaches.vue"
import CoachDetails from "../components/coaches/CoachDetails.vue"
import ContactCoach from "../views/ContactCoach.vue"
import CoachItemDetails from '../views/CoachItemDetails.vue'
import NotFound from "../pages/NotFound.vue"
import Requests from '../components/requests/Requests.vue'
import RegisterCoach from '../pages/RegisterCoach.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    { path: "/", redirect: "/coaches" },
    {
      path: "/coaches",
      component: Coaches,
    },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [
        { 
          path: "details",
          name: "CoachItemDetails", 
          component: CoachItemDetails 
        },
        {
          path: "contact",
          name: "ContactCoach",
          component: ContactCoach,
        },
      ],
    },
    {path: '/requests', component: Requests},
    {path: '/register', component: RegisterCoach},
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

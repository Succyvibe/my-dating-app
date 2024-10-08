import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import MatchesView from "@/views/MatchesView.vue";
import ViewMatchesView from "@/views/ViewMatchesView.vue";
import PricingPlanView from "@/views/PricingPlanView.vue";
import ChoosePlanView from "@/views/ChoosePlanView.vue";
import PaymentView from "@/views/PaymentView.vue";
import SuccessfulView from "@/views/SuccessfulView.vue";
import ChatView from "@/views/ChatView.vue";
import MessagingView from "@/views/MessagingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/matches",
      name: "matches",
      component: MatchesView,
    },
    {
      path: "/view-matches",
      name: "view-matches",
      component: ViewMatchesView,
    },
    {
      path: "/pricing-plan",
      name: "pricing-plan",
      component: PricingPlanView,
    },
    {
      path: "/choose-plan",
      name: "choose-plan",
      component: ChoosePlanView,
    },
    {
      path: "/payment",
      name: "payment",
      component: PaymentView,
    },
    {
      path: "/successful",
      name: "successful",
      component: SuccessfulView,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatView,
    },
    {
      path: "/messaging",
      name: "messaging",
      component: MessagingView,
    },
  ],
});

export default router;

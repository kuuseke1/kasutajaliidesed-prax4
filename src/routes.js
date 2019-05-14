import HomePage from "./pages/HomePage.vue";
import PatternList from "./pages/PatternList.vue";
import DetailView from "./pages/DetailView.vue";
import LoginPrompt from "./pages/LoginPrompt.vue";
import BankChoose from "./pages/BankChoose.vue";
import SuccessPage from "./pages/SuccessPage.vue";
import Basket from "./pages/Basket";
import Dashboard from "./pages/Dashboard";
import Recieve from "./pages/Receive";

export default [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/patterns",
    name: "patterns",
    component: PatternList
  },
  {
    path: "/detailview",
    name: "detailview",
    component: DetailView
  },
  {
    path: "/loginPrompt",
    name: "loginprompt",
    component: LoginPrompt
  },
  {
    path: "/bankchoose",
    name: "bankchoose",
    component: BankChoose
  },
  {
    path: "/success",
    name: "success",
    component: SuccessPage
  },
  {
    path: "/basket",
    name: "basket",
    component: Basket,
    props: true
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/recieve",
    name: "recieve",
    component: Recieve
  }
];

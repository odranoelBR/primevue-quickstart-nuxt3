import PrimeVue from "primevue/config";
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
import InputSwitch from "primevue/inputswitch";
import Badge from "primevue/badge";
import Ripple from "primevue/ripple";
import Card from "primevue/card";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Dropdown from "primevue/dropdown";
import Column from "primevue/column";
import ToastService from "primevue/toastservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("RadioButton", RadioButton);
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
  nuxtApp.vueApp.component("Badge", Badge);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("Calendar", Calendar);
  nuxtApp.vueApp.component("Dropdown", Dropdown);

  nuxtApp.vueApp.use(ToastService);

  nuxtApp.vueApp.directive("ripple", Ripple);
});

// 这里是按需引入的地方
import KlForm from "./kl-form";

KlForm.install = function(Vue) {
  Vue.component(KlForm.name, KlForm);
};
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(KlForm);
}

export default KlForm;

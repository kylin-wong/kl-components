// 这里是全局引入的地方
import KlTable from "./kl-table/index";
import KlForm from "./kl-form/index";
const components = {
  KlTable,
  KlForm
};

const install = function(Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  KlTable,
  KlForm
};

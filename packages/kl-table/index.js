// 这里是按需引入的地方
import KlTable from "./kl-table";

KlTable.install = function(Vue) {
  Vue.component(KlTable.name, KlTable);
};
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(KlTable);
}

export default KlTable;

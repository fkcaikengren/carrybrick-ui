import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue';
Collapse.install = (app: any) => { //Vue.use()时会调用组件的install方法
  app.component(Collapse.name, Collapse)
}
CollapseItem.install = (app: any) => {
  app.component(CollapseItem.name, CollapseItem)
}
export default Collapse;
export {
  CollapseItem
}
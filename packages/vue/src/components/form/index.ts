import Form from './Form.vue';
import FormItem from './FormItem.vue';
Form.install = (app: any) => { //Vue.use()时会调用组件的install方法
  app.component(Form.name, Form)
}
FormItem.install = (app: any) => {
  app.component(FormItem.name, FormItem)
}
export default Form;
export {
  FormItem,
}

import Switch from './Switch.vue'
Switch.install = (app: any) => { 
  app.component(Switch.name, Switch)
}
export default Switch;

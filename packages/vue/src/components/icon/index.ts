import Icon from './Icon.vue'
Icon.install = (app: any) => { 
  app.component(Icon.name, Icon)
}
export default Icon;

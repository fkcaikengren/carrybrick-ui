import Popover from './Popover.vue'
Popover.install = (app: any) => { 
  app.component(Popover.name, Popover)
}
export default Popover;

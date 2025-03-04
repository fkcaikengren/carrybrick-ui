import CBIcon from "./components/icon";
import CBButton from "./components/button";
import CBCollapse from "./components/collapse";
import {CollapseItem as CBCollapseItem} from "./components/collapse";
import CBPopover from "./components/popover";
import CBInput from "./components/input";
import CBTextarea from "./components/textarea";
import CBSwitch from "./components/switch";

export { CBIcon, CBButton, CBCollapse, CBCollapseItem, CBPopover, CBInput, CBTextarea, CBSwitch };

// // 组件库
const components = [
  CBIcon,
  CBButton,
  CBCollapse,
  CBCollapseItem,
  CBPopover,
  CBInput,
  CBTextarea,
  CBSwitch,
];
// 是否已安装标识
const INSTALLED_KEY = Symbol("INSTALLED_KEY");
// 组件库插件
const ElementPlus = {
  install(app: any) {
    // 如果该组件库已经安装过了，则不进行安装
    if (app[INSTALLED_KEY]) return;
    // 将标识值设置为 true，表示已经安装了
    app[INSTALLED_KEY] = true;
    // 循环组件库中的每个组件进行安装
    components.forEach((c) => app.use(c));
  },
};

export default ElementPlus;


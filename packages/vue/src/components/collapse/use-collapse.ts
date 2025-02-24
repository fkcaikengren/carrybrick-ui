import { useNamespace } from '@carrybrick-ui/vue-hooks';
import { computed } from 'vue'
import type { Ref } from 'vue'
export const useKls = ()=>{
  const {b} = useNamespace('collapse')
  const rootKls = b()
  return {
    rootKls
  }

}

export const useItemKls = (active: Ref<boolean>)=>{
  
  const {namespace, b, e, is} = useNamespace('collapse-item')
  const klsNamespace = computed(()=> namespace.value)
  const rootKls = computed(()=> b())
  
  const headKls = computed(()=> e('header'))
  const contentWrapKls = computed(()=> e('content-wrap'))
  const contentKls = computed(()=> e('content'))
  const arrowKls = computed(()=> [e('arrow'), is('active', active.value)])

  return {
    klsNamespace, rootKls, headKls, contentWrapKls, contentKls, arrowKls
  }
}


export const useCollapseTransition = ()=>{
  const onBeforeEnter = (el: Element)=>{
    (el as HTMLElement).style.height = '0px' //动画开始前，设置高度为0
  }
  const onEnter = (el: Element)=>{ 
    (el as HTMLElement).style.height = `${el.scrollHeight}px` //第一帧后，设置高度为内容高度
  }
  const onAfterEnter = (el: Element)=>{
    (el as HTMLElement).style.height = 'auto'; //动画结束后，设置高度为auto
  }
  
  const onBeforeLeave = (el: Element)=>{
    (el as HTMLElement).style.height = `${el.scrollHeight}px` 
  }
  const onLeave = (el: Element)=>{
    (el as HTMLElement).style.height = `0px` 
  }
  
  const onAfterLeave = (el: Element)=>{
    (el as HTMLElement).style.height = 'auto'; 
  }

  return {
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onBeforeLeave,
    onLeave,
    onAfterLeave
  }

}
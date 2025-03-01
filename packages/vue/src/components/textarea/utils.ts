
import type { CSSProperties } from "vue"

let hiddenTextarea: HTMLTextAreaElement | null = null

const HIDDEN_STYLE : CSSProperties = {
  height: '0',
  visibility: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0',
}

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing',
]

export function calcTextareaHeight(el: HTMLTextAreaElement, minRows:number = 1, maxRows?:number) {
  const results = {minHeight: '', height: ''}
  const style = getComputedStyle(el)
  //隐藏的textarea
  if(!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea') 
    for(const [key, value] of Object.entries(HIDDEN_STYLE)){
      hiddenTextarea.style[key as any] = value
    }
    for(const key of CONTEXT_STYLE){
      hiddenTextarea.style[key as any] = style[key as any]
    }
  }

  //填充内容 获取scrollHeight
  hiddenTextarea.value = el.value || el.placeholder || ''
  document.body.appendChild(hiddenTextarea)
  let height = hiddenTextarea.scrollHeight 
  const paddingSize = (parseFloat(style.getPropertyValue('padding-top')) + parseFloat(style.getPropertyValue('padding-bottom')))
  const borderSize = (parseFloat(style.getPropertyValue('border-top-width')) + parseFloat(style.getPropertyValue('border-bottom-width')))
  if(hiddenTextarea.style.boxSizing === 'border-box'){
    height += borderSize
  }else if(hiddenTextarea.style.boxSizing === 'content-box'){
    height -= paddingSize
  }

  //单行高度
  hiddenTextarea.value = ''
  const singleLineHeight = hiddenTextarea.scrollHeight - paddingSize 

  // 计算最小高度 （一来minRows）
  const minHeight = singleLineHeight * minRows + paddingSize + borderSize
  results.minHeight = minHeight+'px'
  // 计算最终高度（考虑到maxRows限制）
  if(maxRows){
    let maxHeight = singleLineHeight * maxRows + paddingSize + borderSize
    height = Math.min(maxHeight, height)
  }
  results.height = height+'px'
  document.body.removeChild(hiddenTextarea)
  hiddenTextarea = null
  return results
}
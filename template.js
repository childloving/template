// 模版名称
export const compName = 'comp-m-{{template}}';
import css from './index.scss';

// css书写
export function cssSplice(styleTag) {
  const cssCompName = compName.replace(/-/g, '_')
  if (!styleTag) return cssCompName;
  return `${cssCompName}-${styleTag}`;
}


// 普通模版
export function renderTemp(otherParam = {}) {
  const temp = document.createElement('template')
  temp.innerHTML = `
    <style>${css}</style>
    <div class=${cssSplice()}>
		<slot></slot>
    </div>
  `
  return temp
}

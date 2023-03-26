import { compName, renderTemp } from './template';
class {{template}} extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    const domContent = renderTemp({})
    this.shadow.appendChild(domContent.content.cloneNode(true));
  }
  disconnectedCallback() {
    unbindEvent()
  }
  connectedCallback() {
    this.addEvent()
  }
  addEvent() {

  }
  unbindEvent() {
	  
  }
  get status() {
    return this.getAttribute('status') || '';
  }
}


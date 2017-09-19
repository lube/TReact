/** @jsx compilarElemento */

import render from './../../lib/1/5NodoTexto.js'
import compilarElemento from './../../lib/2/1JSXAlRescate.js'

const rootDom = document.getElementById("root");

function tick() {
  const time = new Date().toLocaleTimeString();
  const clockElement = <h1>{time}</h1>;
  render(clockElement, rootDom);
}

tick();
setInterval(tick, 1000);
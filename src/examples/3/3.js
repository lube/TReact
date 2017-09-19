/** @jsx compilarElemento */

import render from './../../lib/3/2RenderAlgoInteligente.js'
import compilarElemento from './../../lib/2/1JSXAlRescate.js'

const rootDom = document.getElementById("root");

function tick() {
  const time = new Date().toLocaleTimeString();
  const clockElement = <h1>{time}<h2>2</h2><h2>3</h2><h2>4</h2></h1>;
  render(clockElement, rootDom);
}

tick();
setInterval(tick, 1000);  
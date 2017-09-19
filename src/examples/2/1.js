/** @jsx compilarElemento */

import render from './../../lib/1/5NodoTexto.js'
import compilarElemento from './../../lib/2/1JSXAlRescate.js'

const elemento = (
  <div id="container">
    <input value="foo" type="text" />
    <a href="/bar">bar</a>
    <span onClick={e => alert("Hi")}>click me</span>
  </div>
);

render(elemento, document.getElementById('root'))

import render, { TEXT_ELEMENT } from './../../lib/1/5NodoTexto.js'

render({
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "input", props: { value: "Aguante Arsenal", type: "text" } },
      { 
          type: "a",
          props: { 
            href: "/why-java-sucks",
            children: [
                { 
                    type: TEXT_ELEMENT,
                    props: {
                        nodeValue: 'Ea!'
                    } 
                }
            ]
          }
      },
      { 
          type: "span",
          props: { 
            children: [
                { 
                    type: TEXT_ELEMENT,
                    props: {
                        nodeValue: 'Aja!!'
                    } 
                }
            ]
          }
      }
    ]
  }
}, document.getElementById('root'))

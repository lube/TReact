import render from './../../lib/1/4RenderConSentido.js'

render({
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "input", props: { value: "Aguante Arsenal", type: "text" } },
      { type: "a", props: { href: "/why-java-sucks" } },
      { type: "span", props: {} }
    ]
  }
}, document.getElementById('root'))

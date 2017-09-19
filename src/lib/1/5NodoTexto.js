const textElementV1 = {
  type: "span",
  props: {
    children: ["Foo"]
  }
};

const textElementV2 = {
  type: "span",
  props: {
    children: [
      {
        type: "TEXT ELEMENT",
        props: { nodeValue: "Foo" }
      }
    ]
  }
};

export const TEXT_ELEMENT = "TEXT ELEMENT"

function render(element, parentDom) {
  const { type, props } = element;

  // Creamos un elemento o un nodo de texto
  const isTextElement = type === "TEXT ELEMENT";
  const dom = isTextElement
    ? document.createTextNode("")
    : document.createElement(type);

  // Agregar listeners
  const isListener = name => name.startsWith("on");
  Object.keys(props).filter(isListener).forEach(name => {
    const eventType = name.toLowerCase().substring(2);
    dom.addEventListener(eventType, props[name]);
  });

  // Setear atributos
  const isAttribute = name => !isListener(name) && name != "children";
  Object.keys(props).filter(isAttribute).forEach(name => {
    dom[name] = props[name];
  });

  // Renderear hijos
  const childElements = props.children || [];
  childElements.forEach(childElement => render(childElement, dom));

  // Appendear
  parentDom.appendChild(dom);
}

export default render
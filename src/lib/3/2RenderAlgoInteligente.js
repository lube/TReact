export const TEXT_ELEMENT = "TEXT ELEMENT"

function render(element, parentDom, key = 0) {
  const { type, props } = element;

  // Creamos un elemento o un nodo de texto
  const isTextElement = type === "TEXT ELEMENT";
  const dom = isTextElement
    ? document.createTextNode("")
    : document.createElement(type);

  dom['key'] = key

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
  childElements.forEach((childElement, key) => render(childElement, dom, key));

  // Appendear
  const oldNode = Array.from(parentDom.childNodes).find(node => node.key === key)
  if (!oldNode) {
    parentDom.appendChild(dom);     
  } else {
    parentDom.replaceChild(dom, oldNode);    
  }
}

export default render

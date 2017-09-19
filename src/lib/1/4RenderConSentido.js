function render(element, parentDom) {
  const { type, props } = element;
  const dom = document.createElement(type);

  // Helpers
  const isListener = name => name.startsWith("on");
  const isAttribute = name => !isListener(name) && name != "children";

  // Filtramos todas las props que sean listeners de eventos
  Object.keys(props).filter(isListener).forEach(name => {
    const eventType = name.toLowerCase().substring(2); // onChange -> change
    dom.addEventListener(eventType, props[name]); // Agregamos event listener
  });

  // Filtramos todas las props que no sean listeners ni children y las asignamos al nodo
  Object.keys(props).filter(isAttribute).forEach(name => {
    dom[name] = props[name];
  });

  const childElements = props.children || [];
  childElements.forEach(childElement => render(childElement, dom));

  parentDom.appendChild(dom);
}

export default render

function render(element, parentDom) {
  const { type, props } = element;

  // Lo mismo que:
  // var type = element.type
  // var props = element.props

  // Creamos elemento
  const dom = document.createElement(type);

  const childElements = props.children || [];

  // Rendereamos hijos recursivamente
  childElements.forEach(childElement => render(childElement, dom));

  // Appendeamos
  parentDom.appendChild(dom);
}

export default render

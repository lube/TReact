/*
const elemento = (
  <div id="container">
    <input value="foo" type="text" />
    <a href="/bar">bar</a>
    <span onClick={e => alert("Hi")}>click me</span>
  </div>
);
*/

function compilarElemento () {

}

const elementTranspilado = compilarElemento(
  "div",
  { id: "container" },
  compilarElemento("input", { value: "Aguante Arsenal!!", type: "text" }),
  compilarElemento(
    "a",
    { href: "/bar" },
    "bar"
  ),
  compilarElemento(
    "span",
    { onClick: e => alert("Hi") },
    "Clickeame"
  )
);

function compilarElementov1(type, config, ...args) {
  const props = Object.assign({}, config);

  const hasChildren = args.length > 0;
  props.children = hasChildren ? [].concat(...args) : [];

  // Nuestro elemento!
  return { type, props };
}

const TEXT_ELEMENT = "TEXT ELEMENT";

function compilarElementov2(type, config, ...args) {
  // Por que hacemos esto?! (Tip: Inmutabilidad, Shallow and Deep Copy)
  const props = Object.assign({}, config);

  // Tiene hijos?
  const hasChildren = args.length > 0;
  const rawChildren = hasChildren ? [].concat(...args) : [];

  // Filtramos los que son elementos de texto
  props.children = rawChildren
    .filter(c => c != null && c !== false)
    .map(c => c instanceof Object ? c : crearElementoTexto(c));

  // Ahora si!
  return { type, props };
}

function crearElementoTexto(value) {
  return compilarElementov2(TEXT_ELEMENT, { nodeValue: value });
}

export default compilarElementov2

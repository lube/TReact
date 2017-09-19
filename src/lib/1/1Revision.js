// Obtener un elemento por su id
const domRoot = document.getElementById("root");

// Crear un nuevo elemento por su nombre de tag
const domInput = document.createElement("input");

// Setear propiedades
domInput["type"] = "text";
domInput["value"] = "Hi world";
domInput["className"] = "my-class";

// Escuchar eventos
domInput.addEventListener("change", e => alert(e.target.value));

// Crear un nodo de texto
const domText = document.createTextNode("");

// Cambiar el contenido de un nodo de texto
domText["nodeValue"] = "Foo";

// Appendear un elemento
domRoot.appendChild(domInput);

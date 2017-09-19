const element = {
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "input", props: { value: "Aguante Arsenal", type: "text" } },
      { type: "a", props: { href: "/why-java-sucks" } },
      { type: "span", props: {} }
    ]
  }
};


//<div id="container">
//  <input value="Aguante Arsenal" type="text">
//  <a href="/why-java-sucks"></a>
//  <span></span>
//</div>
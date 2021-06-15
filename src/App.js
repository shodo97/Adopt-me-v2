const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", { key: "name" }, props.name),
    React.createElement("h3", { key: "animal" }, props.animal),
    React.createElement("h3", { key: "breed" }, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, { name: "doink", animal: "cat", breed: "mixed" }),
    React.createElement(Pet, { name: "aura", animal: "dog", breed: "street" })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

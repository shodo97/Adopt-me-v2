import React from "react";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", { key: "name" }, props.name),
    React.createElement("h3", { key: "animal" }, props.animal),
    React.createElement("h3", { key: "breed" }, props.breed),
  ]);
};

export default Pet;

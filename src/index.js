import Component from "./Component.js";

const parentContainer = document.querySelector(".container");
const button = document.querySelector(".button");
const input = document.querySelector(".input");

const createComponent = new Component(parentContainer);

button.addEventListener("click", () => {
  const elementToCreate = input.value;
  if (elementToCreate !== "") {
    createComponent.generateComponent(parentContainer, elementToCreate);
  }
});
class Component {
  parentContainer;
  elementToCreate;

  constructor(parentContainer, elementToCreate) {
    this.parentContainer = parentContainer;
    this.elementToCreate = elementToCreate;
    this.generateComponent();
  }

  generateComponent() {
    this.elementToCreate = document.createElement(elementToCreate);
    this.parentContainer.apendChild(this.elementToCreate);
  }
}

export default Component;
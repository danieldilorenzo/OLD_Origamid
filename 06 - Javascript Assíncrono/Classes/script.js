// function button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.protorype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement = innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
  }
}

const blueButton = new Button("comprar", "blue", "white");

console.log(blueButton.appendTo("body"));

const redButton = new Button({
  background: "red",
  text: "VERMELHO",
  color: "white",
});
//const redButton = new Button("comprar", "blue", "white");

console.log(redButton.appendTo("body"));

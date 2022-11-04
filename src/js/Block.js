export default class Block {
  constructor(parent) {
    this.parent = document.querySelector(`.${parent}`);
  }

  createDefault({ backGround }) {
    console.log(this.parent);
    const newElement = document.createElement("li");
    newElement.classList.add("render-block");
    newElement.style.background = backGround;

    newElement.style.background = backGround;
    this.parent.append(newElement);
  }

  createCustom({ backGround, width, height }) {
    const newElement = document.createElement("li");
    newElement.classList.add("render-block");
    newElement.style.background = backGround;
    newElement.style.width = `${width}px`;
    newElement.style.height = `${height}px`;

    this.parent.append(newElement);
  }
}

export default class Input {
  constructor(form) {
    this.parent = document.querySelector(`${form}`);
  }

  createDefaultInput() {
    this.removeInputRender();

    const inputRender = `
        <div class="input-render">
            color: <input name="backGround" />
        </div>
    `;

    this.parent.insertAdjacentHTML("beforeend", inputRender);
  }

  createCustomInput() {
    this.removeInputRender();

    const inputRender = `
        <div class="input-render">
            <div>color:</div> <input name="backGround" />
            <div>width:</div> <input name="width" />
            <div>height:</div> <input name="height" />
        </div>
    `;

    this.parent.insertAdjacentHTML("beforeend", inputRender);
  }

  removeInputRender() {
    if (this.parent.querySelector(".input-render")) {
      this.parent.querySelector(".input-render").remove();
    }
  }
}

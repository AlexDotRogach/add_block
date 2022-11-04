import {
  settingControl,
  settingInput,
  settingSortOutInputs,
} from "./setting.js";

const refs = {
  form: document.querySelector("#form"),
  select: document.querySelector("#select"),
};

// first start
settingInput["selectDefault"]();
// end first start

refs.form.addEventListener("submit", formSubmit);
refs.select.addEventListener("change", selectChoose);

function formSubmit(event) {
  event.preventDefault();

  const {
    target: { elements },
  } = event;

  const { selectedOptions } = elements[0];
  const type = selectedOptions[0].dataset.select;
  const setting = {};

  [...elements].forEach((element) => {
    if (settingSortOutInputs[type].includes(element.name)) {
      setting[element.name] = element.value;
    }
  });

  settingControl[type](setting);
}

function selectChoose({ target: { selectedOptions } }) {
  settingInput[selectedOptions[0].dataset.select]();
}

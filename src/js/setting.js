import Block from "./Block.js";
import Input from "./Input.js";

export const instanceClass = {
  controlBlock: new Block("content__block"),
  renderInput: new Input("#form"),
};

export const settingControl = {
  selectDefault: instanceClass.controlBlock.createDefault.bind(
    instanceClass.controlBlock
  ),
  selectCustom: instanceClass.controlBlock.createCustom.bind(
    instanceClass.controlBlock
  ),
};

export const settingInput = {
  selectDefault: instanceClass.renderInput.createDefaultInput.bind(
    instanceClass.renderInput
  ),
  selectCustom: instanceClass.renderInput.createCustomInput.bind(
    instanceClass.renderInput
  ),
};

export const settingSortOutInputs = {
  selectDefault: ["backGround"],
  selectCustom: ["width", "height", "backGround"],
};

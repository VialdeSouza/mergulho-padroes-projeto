import { Application } from "./factorymethod";

const ui = new Application('web');
const dialog = ui.getDialog();

dialog.render()

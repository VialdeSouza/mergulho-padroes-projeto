interface Button {
  render(): void;
  onClick(): void;
}

class WindowsButton implements Button {
  render(): void {
    console.log("Sou um botão windows");
  }
  onClick(): void {
    console.log("Botão do windows foi clicado");
  }
}

class HtmlButton implements Button {
  render(): void {
    console.log("<Input name='Enviar' type='submit' />");
  }
  onClick(): void {
    console.log("e.preventDefault()");
  }
}

abstract class Dialog {
  abstract createButton(): Button;
  render() {
    const okButton = this.createButton();
    okButton.onClick();
    okButton.render();
  }
}

class WebDialog extends Dialog {
  createButton(): Button {
    return new HtmlButton();
  }
}

class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}

export class Application {
  private readonly dialog: Dialog;

  constructor(os: String) {
    if (os == "web") {
      this.dialog = new WebDialog();
    } else this.dialog = new WindowsDialog();
  }

  getDialog() {
    return this.dialog;
  }
}

import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  viewAbout = true;

  swapView(){
    this.viewAbout = !this.viewAbout;
  }
}

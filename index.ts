import { on, wired, component } from "capsid";

@component("mirroring") // This registeres the class as a capsid component
export class Mirroring {
  @wired(".dest") // This decorator makes the field equivalent of `get dest () { return this.el.querySelector('.dest'); }`
  dest!: HTMLParagraphElement;
  @wired(".src")
  src!: HTMLInputElement;

  @on("input") // This decorator makes the method into an event listener on the mounted element
  onReceiveData() {
    this.dest.textContent = this.src.value;
  }
}

import { createElement } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Welcome from "./Welcome";

class MyWebComp extends HTMLElement {
  connectedCallback() {
    render(createElement(Welcome), this);

    console.log("entro a la class ----> ")
  }
}

customElements.define("myweb-comp", MyWebComp);



// connectedCallback() {
//   const container = document.createElement('div'); // Create a container element
//   render(createElement(OneFeel), container);
//   this.appendChild(container); // Append the container to the custom element
// }

// disconnectedCallback() {
//   unmountComponentAtNode(this);
// }

// class MyWebComp extends HTMLElement {
//   connectedCallback() {
//     render(createElement(Welcome), this);
//   }

//   disconnectedCallback() {
//     unmountComponentAtNode(this);
//   }
// }
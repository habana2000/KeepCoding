import "./input-field.js";
import "./list-item.js";

const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>


</style>

<div class="list-items-manager-wrapper">
  <input-field buttonLabel='✔'></input-field>
  <div class="list-items-wrapper"></div>
</div>

`;

class ListItemsManager extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    // aquí nos ponemos a escuchar
    const inputFieldElement = this.shadowRoot.querySelector('input-field');
    const listItemsWrapper = this.shadowRoot.querySelector('.list-items-wrapper');

    inputFieldElement.addEventListener('submit', (event) => {
      console.log(event.detail);
      
      /* Esto no funciona porque list-item no escucha cambios del atributo value
      const listItemElement = document.createElement("list-item");
      listItemElement.setAttribute("value", event.detail);
      */

      const newListItemElement = document.createElement("div");
      newListItemElement.innerHTML = `<list-item value="${event.detail}"></list-item>`

      listItemsWrapper.appendChild(newListItemElement);
    })
  }
}

customElements.define("list-items-manager", ListItemsManager);

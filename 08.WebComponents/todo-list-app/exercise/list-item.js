//const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>
    .list-item-wrapper {
        display: flex;
    }
    span {
        frex-grow: 1;
    }
</style>


<div class="list-item-wrapper">
  <span></span>
  <button></button>
</div>

`;

class ListItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.value = this.getAttribute('value') || 'Elemento vacío';
    this.buttonLabel = this.getAttribute('buttonLabel') || '❌';
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    const deleteItemElement = this.shadowRoot.querySelector('button');
    const listItemElement = this.shadowRoot.querySelector('span');

    deleteItemElement.textContent = this.buttonLabel;
    listItemElement.textContent = this.value;

    deleteItemElement.addEventListener('click',() => {
      const event = new CustomEvent("deleteItem", {
      })
      this.dispatchEvent(event);
      this.remove();
    })
  }
}

customElements.define("list-item", ListItem);

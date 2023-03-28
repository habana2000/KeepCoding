/*
  1- Create a digital-clock component using shadow DOM.
  2- Each second, we must calculate the time and update the component HTML
  3- Maybe we should use custom-properties...
*/
const templateElement = document.createElement('template');
templateElement.innerHTML = `
<style>
h1 {
  color: var(--digital-clock-title-color, lightblue);
}
p {
  color: var(--digital-clock-time-color, lightgreen);
}
</style>
<h1></h1>
  <p></p>
`;

class DigitalClock extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open"})
  }

  connectedCallback() {
    const templateClone = templateElement.content.cloneNode(true);
  
    const currentTime = this.calculateCurrentTime();
    templateClone.querySelector('h1').textContent = 'Reloj Digital (digital-clock.js)';
    templateClone.querySelector('p').textContent = currentTime;

    // this.appendChild(templateClone);
    this.shadowRoot.appendChild(templateClone);

    setInterval(() => {
    
      const currentTime = this.calculateCurrentTime(); 
      this.shadowRoot.querySelector('p').textContent = currentTime;
  
    }, 1000);
  }

  calculateCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return `${hours} : ${minutes} : ${seconds}`;
  }

}

window.customElements.define("digital-clock", DigitalClock);

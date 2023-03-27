/*
  1- Create a digital-clock component.
  2- Each second, we must calculate the time and update the component HTML
*/


class DigitalClock extends HTMLElement {

  constructor() {
    super();
    console.log('create');
  }

  connectedCallback() {
    console.log('12345');
    setInterval(() => {

      //obtener la hora y la pintamos en el DOM
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      this.innerHTML = `${hours} : ${minutes} : ${seconds}`
    }, 1000)
  }

}

window.customElements.define('digital-clock', DigitalClock);

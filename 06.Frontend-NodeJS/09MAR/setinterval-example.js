const intervalId = window.setInterval(() => {
  // crear nuevo nodo li
  const newLiElement = document.createElement('li');
  newLiElement.textContent = 'nueva tarea: ' + new Date().toISOString();

  // buscamos el nodo donde vamos a insertar nuestro li
  const parentNode = document.querySelector('.cart');

  // añadimos el nuevo elemento a la lista
  parentNode.appendChild(newLiElement);

  // Si queremos añadir el nuevo elemento al principio de la lista
  // parentNode.prepend(newLiElement)
}, 2500)

window.setTimeout(() => {
  window.clearInterval(intervalId)
}, 12000)


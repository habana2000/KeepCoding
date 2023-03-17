import { createTweetController } from "./createTweetController.js";

const token = localStorage.getItem('token')

if (!token) {
  window.location = '/'
} else {
  const createTweetFormElement = document.querySelector('#createTweetForm');
  createTweetController(createTweetFormElement)
}

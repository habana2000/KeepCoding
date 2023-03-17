import { createTweet } from "./createTwee.js";

export const createTweetController = (createTweetFormElement) => {
  createTweetFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(createTweetFormElement);
    const tweetContent = formData.get('tweetContent');

  })
}

export const createTweet = async (tweetContent) => {

  const newTweet = {
    content: tweetContent
  }

  fetch('http://127.0.0.1:8000/api/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTweet)
  })

  const data = await response.json()
}

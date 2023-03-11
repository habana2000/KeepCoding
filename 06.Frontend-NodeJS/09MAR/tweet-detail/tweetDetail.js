export const getTweetById = async (tweetId) => {
  const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`)

  if (!response.ok) {
    throw new Error('El tweet solicitado no existe')
  }

  const tweet = await response.json();

  return tweet;
}

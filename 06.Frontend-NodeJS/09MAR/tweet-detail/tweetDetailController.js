import { getTweetById } from "./tweetDetail.js"
import { buildTweetDetail } from "./tweetDetailView.js"

export const tweetDetailController = async (tweetDetailElement, tweetId) => {

  try {
    const tweet = await getTweetById(tweetId)
    tweetDetailElement.innerHTML = buildTweetDetail(tweet)
  } catch (error) {
    alert(error)
  }
}

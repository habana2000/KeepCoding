
export const buildTweetDetail = (tweet) => {
  const tweetDate = new Date(tweet.date)
  return `
    <div class="user-info">
      <span>${tweet.handle}</span>
      <img style="width: 100px" src="${tweet.avatar}" />
    </div>
    <p>${tweet.content} - ${tweetDate.toISOString()}</p>
    <span>${tweet.retweets} retweets </span><span>${tweet.likes} likes </span><span>${tweet.replies} replies</span>
  `
}

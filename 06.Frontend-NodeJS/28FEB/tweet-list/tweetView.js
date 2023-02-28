export function buildTweetView (tweet) {
    const newTweetElement = document.createElement('article');
    newTweetElement.innerHTML = `
        <p>${tweet.handler}</p>
        <p>${tweet.body} - ${tweet.date}</p>
    `;
    return newTweetElement;
};
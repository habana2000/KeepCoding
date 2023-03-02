export function buildTweetView (tweet) {
    const newTweetElement = document.createElement('article');
    newTweetElement.classList.add('tweet')
    newTweetElement.innerHTML = `
      <div class="user-info">
        <p>${tweet.handle}</p>
        <img src="${tweet.avatar}"></img>
      </div>  
        <p>${tweet.content} - ${tweet.date}</p>
    `;
    return newTweetElement;
};

export function buildSpinnerView() {
    return '<div class="spinner"><div></div><div></div><div></div></div>'
}

export function buildErrorLoadingTweets() {
    return `<p class="error">Hubo un problema con los datos</p>`
}

export function buildEmptyTweetList() {
  return `<p>No hay resultados disponibles. No hay Tweets</p>`
}
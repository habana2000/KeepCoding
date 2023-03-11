// export const tweets = [{
//   date: '2022-09-19',
//   body: 'ejemplo de cuerpo de tweet',
//   handler: '@usuario1',
//   image: 'https://lllll.jpeg'
// },
// {
//   date: '2022-09-18',
//   body: 'ejemplo de cuerpo de otro tweet',
//   handler: '@usuario3',
//   image: 'https://lllll.jpeg'
// },
// {
//   date: '2022-09-17',
//   body: 'ejemplo de cuerpo de otro tweet mucho mucho mas largo',
//   handler: '@usuario5',
//   image: 'https://lllll.jpeg'
// }]


export async function getTweets() {
  const tweetsUrlOK = 'http://localhost:8000/api/tweets';
  
  const response = await fetch(tweetsUrlOK);
  const tweets = await response.json();

  return tweets
}

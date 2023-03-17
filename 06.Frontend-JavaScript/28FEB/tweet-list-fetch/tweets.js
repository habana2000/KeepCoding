/**
 * 
export const tweets = [{
    date: "2023-03-03",
    body: "Este es el body",
    handler: "@Usuario1",
    image: "./foto1.jpg"
},
{
    date: "2023-03-03",
    body: "Este es el body",
    handler: "@Usuario2",
    image: "./foto1.jpg"
},
{
    date: "2023-03-03",
    body: "Este es el body",
    handler: "@Usuario3",
    image: "./foto1.jpg"
}]
*/

export async function getTweets() {
    // URL Buena
    const tweetsUrlOK = "https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json";
    // URL Mala
    const tweetsUrlKO = "https://gist.githubusercontent.co/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json";

    const response = await fetch(tweetsUrlOK);
    const tweets = await response.json();

    return tweets
};
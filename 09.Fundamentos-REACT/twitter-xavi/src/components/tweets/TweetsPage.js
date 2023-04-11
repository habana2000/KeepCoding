const tweets = [
    {
        content: "Hola",
        UserId: 1,
        updatedAt: 'xcxcvsvv',
        id:1,
      },
      {
        content: "Adiós",
        UserId: 1,
        updatedAt: 'xcxcvsvv',
        id:2,
      },
      ];

const styles ={
    backgroundColor: 'darkblue',
}

const TweetsPage = () => {
    const theme = 'dark';

    return (
    <div className="tweetsPage"
    style ={{
        backgroundColor: theme === 'light' ? 'lightblue' : 'darkblue',
    }}>
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id} style={styles}>{tweet.content}</li>
        ))}
      </ul>
    </div>
    )
}

export default TweetsPage;
import classNames from 'classnames';
// import './styles.css';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getLatestTweets } from './service';

const styleInline = {
  backgroundColor: 'lightblue',
};

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getLatestTweets().then(tweets => setTweets(tweets));
  }, []);

  const theme = 'dark';
  const className = classNames(
    'tweetsPage',
    {
      light: theme === 'light',
      dark: theme === 'dark',
    },
    'otherclass',
  );

  return (
    <div
      //   className={className}
      className={styles.tweetsPage}
      //   style={{
      //     backgroundColor: theme === 'light' ? 'lightblue' : 'darkblue',
      //   }}
    >
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TweetsPage;

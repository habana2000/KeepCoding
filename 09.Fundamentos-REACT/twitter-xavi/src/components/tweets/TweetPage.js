import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';

const TweetPage = props => {
  const params = useParams();

  return (
    <Layout title="Tweet detail" {...props}>
      <div>Tweet detail {params.tweetId}</div>
    </Layout>
  );
};

export default TweetPage;

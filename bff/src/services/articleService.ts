import axios from 'axios';

const ENDPOINT_URL = 'https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/';

export const getFilteredArticles = async () => {
  try {
    const response = await axios.get(ENDPOINT_URL);
    console.log('API response:', response.data);

    const filteredArticles = response.data.articles.filter(
      (article: { subtype: string }) => article.subtype === '7',
    );

    return filteredArticles;
  } catch (error) {
    throw new Error('Error fetching articles from the API');
  }
};

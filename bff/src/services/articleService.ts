// src/services/articleService.ts
import axios from 'axios';

// Endpoint proporcionado en el enunciado
const ENDPOINT_URL = 'https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/';

export const getFilteredArticles = async () => {
  try {
    // Realizamos la petición GET para obtener los 30 artículos
    const response = await axios.get(ENDPOINT_URL);

    // Filtramos los artículos cuyo "subtype" sea igual a "7"
    const filteredArticles = response.data.filter((article: { subtype: string }) => article.subtype === '7');
    
    return filteredArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw new Error('Error fetching articles from the API');
  }
};

import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
      console.log(results);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};

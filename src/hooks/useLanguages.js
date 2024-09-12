import { useState, useEffect } from 'react';

 function useLanguages() {
  const [languages, setLanguages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      setLoading(true);
      setError(null);

      const url = 'https://libretranslate.com/languages';
      const options = {
        method:'GET',
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Failed to fetch languages');
        }
        const result = await response.json();

        const formattedLanguages= result.map((lang)=>({
              code:lang.code,
              name:lang.name,
              targets:lang.targets || []
        }))
        setLanguages(formattedLanguages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  return [languages, loading, error];
}

export default useLanguages
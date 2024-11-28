import { useState } from 'react';

export default function useLoadQuestions() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const loadQuestions = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://13.233.86.88:8000/api/questions', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }

      const questions = await response.json();
      setData(questions);
    } catch (error) {
      setError(error.message);
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, loadQuestions };
}

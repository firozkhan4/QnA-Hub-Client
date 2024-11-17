import axios from 'axios';

export const loadQuestions = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/questions', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user information');
    }

    const questions = await response.json();
    return questions;
  } catch (error) {
    console.error('Error:', error.message);
  }
};

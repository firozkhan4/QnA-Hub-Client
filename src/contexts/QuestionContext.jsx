import { createContext, useState, useEffect, useMemo } from 'react';
import Controllers from '../apis';

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const questionController = new Controllers.QuestionController();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await questionController.getAll();
        setQuestions(response);
      } catch (error) {
        console.error(
          'Question Context\t',
          'Failed to fetch questions:',
          error
        );
      }
    };

    fetchQuestions();
  }, []);

  const contextValue = useMemo(
    () => ({
      questions,
      setQuestions,
    }),
    [questions]
  );

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
};

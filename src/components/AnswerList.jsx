import { Avatar } from '../components/index';
import Controllers from '../apis';
import { useEffect, useState } from 'react';

export default function AnswerList({ questionId }) {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAnswers = async () => {
      const answerController = new Controllers.AnswerController();
      try {
        const response = await answerController.getAllAnswer(questionId);
        if (isMounted) {
          setAnswers(response.reverse() || []);
        }
      } catch (err) {
        if (isMounted) {
          console.error('AnswerList: Error fetching answers:', err.message);
          setError(err.message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAnswers();

    return () => {
      isMounted = false;
    };
  }, [questionId]);

  if (loading) {
    return <p>Loading answers...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="py-5 border-t-2 border-b-2 border-slate-300 space-y-4">
      {answers.length === 0 ? (
        <p>No answers found for this question.</p>
      ) : (
        answers.map((answer) => (
          <AnswerBox
            key={answer.id}
            content={answer.content || 'No content available'}
            username={answer.username || 'Anonymous'}
          />
        ))
      )}
    </div>
  );
}

const AnswerBox = ({ content, username }) => {
  return (
    <div className="space-y-3 hover:shadow-md border-2 py-4 px-4">
      <div>{content}</div>
      <div className="flex justify-end items-center space-x-2">
        <Avatar />
        <p>{username}</p>
      </div>
    </div>
  );
};

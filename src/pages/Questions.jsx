import { useEffect } from 'react';
import { Heading, QuestionCard } from '../components/index';
import useLoadQuestions from '../hooks/useLoadQuestions';

export default function Questions() {
  const { loading, error, data, loadQuestions } = useLoadQuestions();

  useEffect(() => {
    loadQuestions();

    return () => {};
  }, []);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="border-b-2">
        <Heading title={'All Questions'} />
      </div>
      <QuestionCard questions={data || []} />
    </div>
  );
}

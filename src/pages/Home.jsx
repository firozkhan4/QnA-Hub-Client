import { useContext } from 'react';
import { Heading, QuestionCard } from '../components/index';
import { QuestionContext } from '../contexts/QuestionContext';

export default function Home() {
  const { questions } = useContext(QuestionContext);

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="border-b-2">
        <Heading title="Top Questions" />
      </div>
      <QuestionCard Questions={questions} />
    </div>
  );
}

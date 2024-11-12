import { Heading, QuestionCard } from '../components/index';

export default function Questions() {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="border-b-2">
        <Heading title={'All Questions'} />
      </div>
      <QuestionCard />
    </div>
  );
}

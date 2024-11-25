import { Link } from 'react-router-dom';
import Controllers from '../apis';
import downvote from '../assets/svg/downvote.svg';
import upvote from '../assets/svg/upvote.svg';
import { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

export default function QuestionCard({ Questions }) {
  const questionVotingController = new Controllers.QuestionVotingController();
  const { questions, setQuestions } = useContext(QuestionContext);
  if (!Questions || Questions.length === 0) {
    return <p>No questions found</p>;
  }

  const handleUpVote = async (id) => {
    const response = await questionVotingController.upVote(id);
    if (response.success) {
      setQuestions((prevQuestions) =>
        prevQuestions.map((q) =>
          q.id === id ? { ...q, upvoteCount: response.upvoteCount } : q
        )
      );
    }
  };

  const handleDownVote = async (id) => {
    const response = await questionVotingController.downVote(id);
    if (response.success) {
      setQuestions((prevQuestions) =>
        prevQuestions.map((q) =>
          q.id === id ? { ...q, downvoteCount: response.downvoteCount } : q
        )
      );
    }
  };

  return (
    <div className="mt-4 space-y-4">
      {Questions.map((question) => (
        <div
          key={question.id}
          className="p-4 bg-gray-50 rounded shadow hover:shadow-md cursor-pointer flex gap-x-3"
        >
          <div className="text-sm text-gray-600 grid justify-items-center">
            <img
              src={upvote}
              alt="upvote"
              className="w-5"
              onClick={() => handleUpVote(question.id)}
            />
            <section className="flex flex-col">
              <section>{question.upvoteCount}</section>
              <section>{question.downvoteCount}</section>
            </section>
            <img
              src={downvote}
              alt="downvote"
              className="w-5"
              onClick={() => handleDownVote(question.id)}
            />
          </div>
          <div>
            <Link
              to={`/questions/${question.id}`}
              className="text-blue-600 font-semibold"
            >
              {question.title}
            </Link>
            <div>
              <p>{question.heading}</p>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2"></div>
        </div>
      ))}
    </div>
  );
}

import { useNavigate } from 'react-router-dom';

export default function QuestionCard({ questions }) {
  if (!questions || questions.length === 0) {
    return <p>No questions found</p>;
  }

  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log('Question HandleClick', id);
    navigate(`/questions/${id}`, { replace: true });
  };

  return (
    <div className="mt-4 space-y-4">
      {questions.map((question) => (
        <div
          key={question.id}
          className="p-4 bg-gray-50 rounded shadow hover:shadow-md cursor-pointer"
          onClick={() => handleClick(question.id)}
        >
          <div className="text-sm text-gray-600">{} views</div>
          <a href="#" className="text-blue-600 font-semibold">
            {question.title}
          </a>
          <div>
            <p>{question.heading}</p>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            {/* {question.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 mr-2"
              >
                {tag}
              </span>
            ))} */}
          </div>
        </div>
      ))}
    </div>
  );
}

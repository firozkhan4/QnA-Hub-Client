import { useState } from 'react';

const initialQuestions = [
  {
    id: 1,
    title: 'What is React?',
    heading: 'Introduction to React',
    content: 'React is a JavaScript library for building user interfaces.',
    votes: 12,
    username: 'john_doe',
  },
  {
    id: 2,
    title: 'What is Node.js?',
    heading: 'Introduction to Node.js',
    content: "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
    votes: 8,
    username: 'jane_smith',
  },
];

const QuestionsManagement = () => {
  const [questions, setQuestions] = useState(initialQuestions);

  const handleVote = (id, type) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? {
              ...question,
              votes:
                type === 'upvote' ? question.votes + 1 : question.votes - 1,
            }
          : question
      )
    );
  };

  const handleDelete = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Questions Management</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Heading</th>
            <th className="border border-gray-300 px-4 py-2">Content</th>
            <th className="border border-gray-300 px-4 py-2">Votes</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">
                {question.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {question.heading}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {question.content}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {question.votes}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {question.username}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                  onClick={() => handleVote(question.id, 'upvote')}
                >
                  Upvote
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 mr-2 rounded"
                  onClick={() => handleVote(question.id, 'downvote')}
                >
                  Downvote
                </button>
                <button
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(question.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {questions.length === 0 && (
        <p className="text-gray-600 mt-4">No questions available.</p>
      )}
    </div>
  );
};

export default QuestionsManagement;

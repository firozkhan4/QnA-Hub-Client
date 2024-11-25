import { useContext, useEffect, useState } from 'react';
import { TopNavBar } from '../components';
import { UserContext } from '../contexts/UserContext';
import Controllers from '../apis';

export default function Profile() {
  const { user } = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const questionController = new Controllers.QuestionController();

  useEffect(() => {
    (async function fetchQuestions() {
      const response = await questionController.getCurrentUserQuestions();
      setQuestions(response);
    })();
  }, []);

  const handleEditQuestion = async (id, newTitle) => {
    const updatedQuestion = await questionController.updateQuestion(id, {
      title: newTitle,
    });
    setQuestions((prev) =>
      prev.map((q) =>
        q._id === id ? { ...q, title: updatedQuestion.title } : q
      )
    );
  };

  const handleDeleteQuestion = async (id) => {
    await questionController.deleteQuestion(id);
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <div>
      <TopNavBar />
      <div className="bg-gray-100">
        <div className="min-h-screen container mx-auto p-4">
          {/* User Information Section */}
          <section className="bg-white shadow rounded p-6 mb-6">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 block mb-1">Username</label>
                <input
                  type="text"
                  value={user.username}
                  readOnly
                  className="w-full border-gray-300 rounded shadow-sm p-2"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-1">Email</label>
                <input
                  type="text"
                  value={user.email}
                  readOnly
                  className="w-full border-gray-300 rounded shadow-sm p-2"
                />
              </div>
            </div>
          </section>

          {/* Questions and Answers Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Questions */}
            <div className="bg-white shadow rounded p-6">
              <h2 className="text-xl font-bold mb-4">My Questions</h2>
              <ul className="space-y-4">
                {questions.map((question) => (
                  <li
                    key={question.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <span className="text-blue-600 hover:underline cursor-pointer">
                        {question.title}
                      </span>
                    </div>
                    <div className="space-x-2">
                      <button className="text-yellow-600 hover:text-yellow-800">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteQuestion(question.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
                {questions.length === 0 && <p>No questions found.</p>}
              </ul>
            </div>

            {/* Answers */}
            <div className="bg-white shadow rounded p-6">
              <h2 className="text-xl font-bold mb-4">My Answers</h2>
              <ul className="space-y-4">
                {/* Add answers dynamically as needed */}
                <li className="text-blue-600 hover:underline">
                  Answer to "What is React?"
                </li>
                <li className="text-blue-600 hover:underline">
                  Answer to "How does Tailwind CSS work?"
                </li>
                <li className="text-blue-600 hover:underline">
                  Answer to "What are hooks in React?"
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

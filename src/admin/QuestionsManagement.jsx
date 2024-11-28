import { useContext, useEffect, useState } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';
import Controllers from '../apis';
import { Avatar } from '../components';

const QuestionsManagement = () => {
  const questionController = new Controllers.QuestionController();
  const [questions, setQuestions] = useState([]);

  const { handleNotification } = useContext(NotificationContext);

  const fetchQuestions = async () => {
    try {
      const response = await questionController.getAll();
      setQuestions(response || []);
      console.log(response);
    } catch (error) {
      console.error(
        'Questions Management\t',
        'Error in fetching Questions:',
        error.message
      );
    }
  };

  const deleteQuestion = async (id) => {
    try {
      await questionController.deleteQuestion(id);
      setQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question.id !== id)
      );
      handleNotification(`Question ${id} deleted successfully.`);
    } catch (error) {
      console.error(
        `Question Management\t Error deleting Question ${id}:`,
        error.message
      );
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Questions Management</h1>
      <div className="grid grid-cols-1  gap-4">
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            title={question.title}
            onDelete={() => deleteQuestion(question.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsManagement;

const QuestionCard = ({ title, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded hover:shadow-sm border">
      <div className="flex items-center gap-4">
        <div>
          <p className="text-lg font-medium">{title}</p>
        </div>
      </div>
      <button
        onClick={onDelete}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

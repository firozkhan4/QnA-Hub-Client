import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Controllers from '../apis';
import { AnswerList, QuillInput } from '../components';
import { UserContext } from '../contexts/UserContext';
import { QuestionContext } from '../contexts/QuestionContext';

export default function Question() {
  const { user } = useContext(UserContext);
  const answerRef = useRef(null);
  const { id } = useParams();
  const { questions } = useContext(QuestionContext);
  const [question, setQuestion] = useState('');

  const handleAnswer = async () => {
    const content = answerRef.current.getEditor().getText().trim();
    answerRef.current.getEditor().setContents([]);
    const answerController = new Controllers.AnswerController();

    const answerPayload = {
      content,
      question: id,
      user: user.id,
    };

    try {
      const response = await answerController.create(answerPayload);
      console.log(response);
    } catch (error) {
      console.log('Something went wrong in Question component');
    }
  };

  useEffect(() => {
    questions.forEach((element) => {
      if (element.id === id) {
        setQuestion(element);
      }
    });
  });
  return (
    <main className="flex-1 bg-white p-6 max-w-3xl mx-auto shadow-md rounded-lg space-y-8">
      <div>
        <h2 className="text-2xl font-bold">{question.title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          Asked today | Modified today | Viewed 2 times
        </p>
        <div className="mt-6 text-gray-800">
          <p className="mb-4">{question.heading}</p>
          <p className="mb-4">{question.content}</p>
          <a href="#" className="text-blue-500">
            Read more
          </a>
        </div>
      </div>

      <div className="grid gap-y-4 mx-auto">
        <QuillInput label={'Your Answer'} ref={answerRef} />
        <button
          className="bg-blue-500 text-white py-2 px-2 font-bold w-44 rounded "
          onClick={handleAnswer}
        >
          Post Your Answer
        </button>
      </div>
      <div>
        <AnswerList questionId={id} />
      </div>
    </main>
  );
}

export default function QuestionCard() {
  return (
    <div className="mt-4 space-y-4 ">
      {/* Question Card */}
      {questions.map((question, idx) => (
        <div
          key={idx}
          className="p-4 bg-gray-50 rounded shadow hover:shadow-md"
        >
          <div className="text-sm text-gray-600">{question.views} views</div>
          <a href="#" className="text-blue-600 font-semibold">
            {question.title}
          </a>
          <div className="text-sm text-gray-500 mt-2">
            {question.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const questions = [
  {
    views: '4',
    title:
      'When will version 3.0.0 of ktor-server-tests-jvm be released to Maven Central?',
    tags: ['maven', 'ktor'],
  },
  {
    views: '3',
    title: 'Is there a Ruby on Rails form_for equivalent on .net mvc?',
    tags: ['c#', 'asp.net', '.net', 'asp.net-mvc'],
  },
  {
    views: '8',
    title: 'Conflicting peer dependency (react/NextJS 15.0)',
    tags: ['reactjs', 'firebase', 'npm', 'next.js', 'npm-package'],
  },
];

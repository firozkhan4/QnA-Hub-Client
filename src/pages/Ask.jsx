import { useState } from 'react';
import { VscMortarBoard } from 'react-icons/vsc';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import background from '../assets/svg/background.svg';

const AskInputProp = [
  {
    title: 'Title',
    des: "Be specitic and imagine you're asking a question to another person.",
    quill: false,
  },
  {
    title: 'What are the details of your problems?',
    des: 'Introduce the problem and expand on what you put in the title. Minimum 20 character.',
    quill: true,
  },
  {
    title: 'What did you try and what were you expecting?',
    des: 'Descrive waht you tried, what you expected to happena dn what actually resulted. Minimum 20 character.',
    quill: true,
  },
  {
    title: 'Tags',
    des: 'Add up to 5 tags to describe what your question is about. Start typing to see suggestions.',
    quill: false,
  },
];

export default function Ask() {
  return (
    <div className="container mx-auto pb-10 w-2/4">
      <section className="py-5 flex items-center justify-between">
        <section className="px-10">
          <VscMortarBoard size={60} />
          <p className="font-medium text-3xl">
            Ask a question in Staging Ground
          </p>
        </section>
        <img src={background} alt="" className="w-2/5" />
      </section>
      <div className="space-y-3">
        {AskInputProp.map((item, index) => {
          return <AskInput key={index} AskInputProp={item} />;
        })}
      </div>
    </div>
  );
}

function AskInput({ AskInputProp }) {
  const { title, des, quill } = AskInputProp;

  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  const toolbarOptions = [
    [
      'bold',
      'italic',
      'code-block',
      'link',
      'image',
      { size: ['small', false, 'large', 'huge'] },
    ],
  ];
  const quillModule = {
    toolbar: toolbarOptions,
  };

  return (
    <div className="px-3 bg-white border-2">
      <section className=" py-3 px-2 grid gap-y-1 rounded-sm">
        <p className="font-bold text-sm">{title}</p>
        <p className="text-zinc-400 text-sm pb-2">{des}</p>
        <section className="overflow-hidden">
          {quill ? (
            <div>
              <ReactQuill
                value={content}
                onChange={handleChange}
                modules={quillModule}
              >
                {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
              </ReactQuill>
            </div>
          ) : (
            <input
              type="text"
              name="title"
              id="title"
              className="border-slate-300 border-2 rounded-md px-2 outline-blue-500 py-1 w-full"
              placeholder="e.g Is there an R function for finding the index"
            />
          )}
        </section>
        <button className="bg-blue-500 text-white w-fit px-3 py-1 rounded-md">
          Next
        </button>
      </section>
    </div>
  );
}

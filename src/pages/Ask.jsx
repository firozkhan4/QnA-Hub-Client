import React, { useRef, useState } from 'react';
import { VscMortarBoard } from 'react-icons/vsc';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import background from '../assets/svg/background.svg';
import { useNavigate } from 'react-router-dom';

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

const quillModule = { toolbar: toolbarOptions };

export default function Ask() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  const createPost = async (postData) => {
    try {
      const response = await fetch('http://localhost:8080/api/questions', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (!response.ok) throw new Error('Failed to create the post');
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleForm = () => {
    const heading = headingRef.current.getEditor().getText().trim();
    const content = contentRef.current.getEditor().getText().trim();

    const postData = { title, heading, content };
    createPost(postData);
  };

  return (
    <div className="container mx-auto pb-10 w-2/4">
      {/* Header Section */}
      <section className="py-5 flex items-center justify-between">
        <div className="px-10">
          <VscMortarBoard size={60} />
          <p className="font-medium text-3xl">
            Ask a Question in Staging Ground
          </p>
        </div>
        <img src={background} alt="Background" className="w-2/5" />
      </section>

      {/* Input Fields */}
      <div className="space-y-4">
        {/* Title Input */}
        <InputField
          label="Title"
          description="Be specific and imagine you're asking a question to another person."
          placeholder="e.g., Is there an R function for finding the index?"
          value={title}
          onChange={setTitle}
        />

        {/* Problem Details Input */}
        <QuillInput
          label="What are the details of your problem?"
          description="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
          ref={headingRef}
        />

        {/* Expectation Details Input */}
        <QuillInput
          label="What did you try and what were you expecting?"
          description="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
          ref={contentRef}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-md mt-4 text-lg"
          onClick={handleForm}
        >
          Ask
        </button>
      </div>
    </div>
  );
}

/**
 * InputField Component: Standard Text Input Field
 */
function InputField({ label, description, placeholder, value, onChange }) {
  return (
    <div className="bg-white border-2 rounded px-4 py-3">
      <p className="font-bold text-sm">{label}</p>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      <input
        type="text"
        className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/**
 * QuillInput Component: Rich Text Editor Input Field
 */
const QuillInput = React.forwardRef(({ label, description }, ref) => {
  return (
    <div className="bg-white border-2 rounded px-4 py-3 h-[20rem]">
      <p className="font-bold text-sm">{label}</p>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      <div className="overflow-hidden h-5/6">
        <ReactQuill
          modules={quillModule}
          className="rounded h-full border-b-2"
          ref={ref}
        />
      </div>
    </div>
  );
});

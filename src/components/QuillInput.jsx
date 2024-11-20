import React from 'react';
import ReactQuill from 'react-quill';

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

export default QuillInput;

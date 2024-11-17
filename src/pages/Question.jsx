import { useQuery } from '@apollo/client';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { GET_QUESTION_BY_ID } from '../graphql/questions';

export default function Question() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_QUESTION_BY_ID, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <main className="flex-1 bg-white p-6 max-w-3xl mx-auto shadow-md rounded-lg">
      <div>
        <h2 className="text-2xl font-bold">
          I need to use underline tool option for my ckeditor used in .net mvc
          project
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Asked today | Modified today | Viewed 2 times
        </p>
        <div className="mt-6 text-gray-800">
          <p className="mb-4">
            I used this ckeditor cdn:
            <code className="bg-gray-200 rounded p-1">
              https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js
            </code>
          </p>
          <p className="mb-4">
            When I use this code in js for ckeditor creation with toolbar
            options, I get all the options listed but not underline tool...
          </p>
          <a href="#" className="text-blue-500">
            Read more
          </a>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
          javascript
        </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
          asp.net-mvc
        </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
          ckeditor
        </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
          ckeditor5
        </span>
      </div>
    </main>
  );
}

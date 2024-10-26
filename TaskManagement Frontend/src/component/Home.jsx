import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Task Manager</h1>
        <p className="mt-4">
          Please <Link to="/login" className="text-indigo-600 underline">login</Link> to continue.
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;

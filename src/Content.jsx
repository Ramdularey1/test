import React from 'react';
import { useNavigate } from 'react-router-dom';

function Content() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/content/${id}`);
  };

  return (
    <div>
      <h1>Content Page</h1>
      <button onClick={() => handleNavigate(123)}>Go to Content with ID 123</button>
      <button onClick={() => handleNavigate(456)}>Go to Content with ID 456</button>
      <button onClick={() => handleNavigate(789)}>Go to Content with ID 789</button>
      <button onClick={() => handleNavigate(101)}>Go to Content with ID 101</button>
    </div>
  );
}

export default Content;

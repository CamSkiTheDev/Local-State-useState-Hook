import React, { useState } from 'react';
import './App.css';

export default () => {
  const [username, setUsername] = useState('');

  return (
    <div className="main">
      <h1>Hello {username}</h1>
      <input type="text" placeholder="enter your name." onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
};

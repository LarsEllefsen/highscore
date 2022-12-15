import React, { useState } from 'react';
import Router from 'next/router';
import Profiles from './profiles';
import { Leaderboard } from './participents';

export const Board = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');
  const [randomWinner, setRandomWinner] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    console.log('hei');
    if (name && email) {
      // send a request to the server.
      try {
        const body = { name, email, score };
        console.log(body);
        await fetch(`http://localhost:3000/api/createParticipant`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setError('All fields are required');
      return;
    }
  };

  const handleRandom = (Leaderboard: any) => {
    var item = Leaderboard[Math.floor(Math.random() * Leaderboard.length)].name;
    console.log(item);
    setRandomWinner(item);
  };

  const sortParticipants = (Leaderboard: any) => {
    return Leaderboard.sort((a: any, b: any) => {
      if (a.score === b.score) {
        return b.score - a.score;
      } else {
        return b.score - a.score;
      }
    });
  };

  return (
    <div className='board'>
      <div className='duration'>All-Time</div>

      <Profiles Leaderboard={sortParticipants(Leaderboard)}></Profiles>
      <div className='add-player-form'>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            value={name}
            placeholder='Navn'
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            value={email}
            placeholder='Epost'
          />
          <input
            onChange={(e) => setScore(e.target.value)}
            type='text'
            value={score}
            placeholder='Poeng'
          />
          <button type='submit' value='Add Player'>
            Legg til spiller
          </button>
          {randomWinner && <p>{randomWinner}</p>}
        </form>
        <button onClick={() => handleRandom(Leaderboard)}>
          Trekk tilfeldigspiller
        </button>
      </div>
    </div>
  );
};

export default Board;

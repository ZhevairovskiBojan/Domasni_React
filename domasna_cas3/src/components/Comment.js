//? Da napravime komponenta vo koja ke prikazuvame komentari
// neka sekoj komentar ima id, author, text.
  // neka listata so komentari ja imate vo app.js i pratite preku props vo kreiranata komponenta
  // tamu da gi prikazeme informaciite
  // neka bidat vo tabela
  // pokraj ova imate nekoe kopce LIKE sto vo konzola ke pecati +1

import React, { useState } from 'react';

const Comment = ({ comment }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    console.log(`Liked comment ${comment.id}`);
  };

  return (
    <div className="comment">
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{comment.id}</td>
          </tr>
          <tr>
            <td>Author:</td>
            <td>{comment.author}</td>
          </tr>
          <tr>
            <td>Text:</td>
            <td>{comment.text}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleLike}>LIKE</button>
      <span>Likes: {likes}</span>
    </div>
  );
};

export default Comment;

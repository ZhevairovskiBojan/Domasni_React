import React from 'react';

function HobbyImage() {
  const MouseHover = () => {
    console.log('Hello there!!!');
  };

  return (
    <div>
      <h3>Image of My Favorite Hobby:</h3>
      <img
        src="https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict0003686202491.jpg" style={{width:200}}
        alt="Favorite Hobby"
        onMouseOver={MouseHover}
      />
    </div>
  );
}

export default HobbyImage;

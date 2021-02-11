import React from 'react';

const Card:React.FC = ({children}) => {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;

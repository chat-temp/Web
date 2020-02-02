import React from 'react';

export default function MessageModal({ message, name, country }){
  return(
    <div>
      <h1>{ name }</h1>
      <p>{ message }</p>
    </div>
  );
}
import React from 'react';

export default function Card({ id, name, img }) {


  console.log(img)


  return (
    <div id={id} className="card" style={{
      background: `url("${img}") center no-repeat`
    }}>
      <div className="info">
        <h2>{name}</h2>
      </div>
    </div>
  )
}
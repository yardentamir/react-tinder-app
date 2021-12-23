import React from 'react';

export default function Headers({ icon, side, value }) {

  return (
    <div className={`header-${side}`}>
      <i className={`fa ${icon} fa-2x`} aria-hidden="true"></i>
      <p>{value}</p>
    </div>
  )
}
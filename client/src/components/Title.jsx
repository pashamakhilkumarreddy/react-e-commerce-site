import React from 'react';

const Title = ({ name, title }) => {
  return (
    <>
      <div className="column is-full has-text-centered">
        <h2 className="title is-capitalized has-text-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h2>
      </div>
    </>
  )
}

export default Title;

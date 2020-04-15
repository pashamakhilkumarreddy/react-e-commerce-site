import React, { Fragment } from 'react';

const Title = ({ name, title }) => {
  return (
    <Fragment>
      <div className="column is-full has-text-centered">
        <h2 className="title is-capitalized has-text-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h2>
      </div>
    </Fragment>
  )
}

export default Title;
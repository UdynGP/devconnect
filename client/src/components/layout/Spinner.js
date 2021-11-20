import React, { Fragment } from 'react';
import spinner from './spinner.gif';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '50px', margin: 'auto', display: 'block', left: '50%' }}
        alt={'Loading...'}
      />
    </Fragment>
  );
};

import React from 'react';
import ErrorContainer from './ErrorContainer';
import { Helmet } from 'react-helmet';

function Error() {
  return (
    <>
    <Helmet>
      <title>
        Error 404
      </title>
    </Helmet>
    <div className="topMargin" style={{paddingBottom: "1%"}}>
      <ErrorContainer />
    </div>
    </>
  );
}

export default Error;

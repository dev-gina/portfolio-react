import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>페이지 경로가 올바르지 않습니다.</h1>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default NotFound;

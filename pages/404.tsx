import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="error-404">
      <h1>Opps!</h1>
      <Link href="/">
        <a href="/">Return back</a>
      </Link>
    </div>
  );
};
export default ErrorPage;

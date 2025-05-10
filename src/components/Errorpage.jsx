import React from 'react';

function ErrorPage({ message }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h3>{message || 'An error occurred.'}</h3>
      <br />
      <a href="/">Go to Home page</a>
    </div>
  );
}

export default ErrorPage;

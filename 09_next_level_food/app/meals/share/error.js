"use client";

const Error = ({ error, reset }) => {
  console.log(error);
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error?.message}</p>

      <button onClick={reset}>Try again</button>
    </main>
  );
};

export default Error;

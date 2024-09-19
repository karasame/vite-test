import { useEffect } from "react";
import { Link } from "react-router-dom";

const TestPage = () => {
  console.log(1);

  useEffect(() => {
    console.log(2);
  }, []);
  return (
    <>
      <head>
        <title>test page</title>
      </head>
      <div>test page</div>
      <Link to="/">to root</Link>
    </>
  );
};

export default TestPage;

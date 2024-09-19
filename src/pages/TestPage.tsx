import { Link } from "react-router-dom";

const TestPage = () => {
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

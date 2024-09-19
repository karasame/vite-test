// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Images = () => {
  // const [jpeg, setJpeg] = useState<string | undefined>("");
  // const [png, setPng] = useState<string | undefined>("");
  // const [svg, setSvg] = useState<string | undefined>("");

  // useEffect(() => {
  //   fetch("/api/image/jpeg").then((res) => {
  //     setJpeg(res.url);
  //   });
  //   fetch("/api/image/png").then((res) => {
  //     setPng(res.url);
  //   });
  //   fetch("/api/image/svg").then((res) => {
  //     setSvg(res.url);
  //   });
  // }, []);

  return (
    <>
      <head>
        <title>画像ページ</title>
      </head>
      <div>APIを叩いていくつか画像をstateに格納する</div>

      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "8px",
        }}
      >
        {/* {jpeg && <img src={jpeg} alt="jpeg" />}
        {png && <img src={png} alt="png" />}
        {svg && <img src={svg} alt="svg" />} */}
      </div>
      <Link to="/">to root</Link>
    </>
  );
};

export default Images;

import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Warning from "../pages/components/warning";

export default function Home() {
  const Title = "Fill Murray ";
  const subTitle =
    "Unofficial re-Designed Version of";
    const fillmurray =
    "www.fillmurray.com";
  const [width, setWidth] = useState(300);
  const [heigth, setHeigth] = useState(400);
  const cardImage = "/card.jpg";
  const domain = "";
  const fillmurrayURL = 'https://www.fillmurray.com'
  const uri = `${fillmurrayURL}/${width}/${heigth}`;
  const generateRandomNumber = () => {
    var randomNumber = Math.floor(Math.random() * 400) + 1;
    setWidth(randomNumber);
  };
  return (
    <>
      <Head>
        <title>{Title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={domain} />
        <meta property="og:image" content={cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@raufsamestone" />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={subTitle} />
        <meta name="twitter:image" content={cardImage} />
      </Head>
      <h1 className="font-sans font-black text-center text-6xl title">
        {Title}
      </h1>
      <h2 className="font-sans font-black text-center text-xl title">
        {subTitle}
      </h2>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className="mt-4 inline-block relative w-64 text-center">
            <input
              id="width"
              name="width"
              type="number"
              placeholder="Width"
              onChange={(e) => setWidth(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />
            <input
              id="height"
              name="height"
              type="number"
              placeholder="Height"
              onChange={(e) => setHeigth(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />
            <span className="font-sans text-sm text-white text-center m-auto">
              or
            </span>
            <br />
            <button
              title="Generate Random Number"
              className="bg-gray-300 mt-5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-auto"
              onClick={generateRandomNumber}
            >
              Random 🎲
            </button>
          </div>
        </main>
        <div className={styles.gridItem}>
          {width > 2000 ? <Warning /> : null}
          {heigth > 2000 ? <Warning /> : null}
          <img src={uri} alt={Title} />
          <a download href={`${uri}`} title={Title}>
            <button
              title="Download"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </a>
        </div>
      </div>
      <p className="text-center font-bold text-gray-500 text-xs mt-12 mb-12">
        &copy; <a href="https://raufsamestone.com"> 👋 raufsamestone.com</a>
        <br />
        <span className="font-normal mt-7">Originally,</span>{" "}
        <a href="https://www.fillmurray.com/"> fillmurray.com</a>
      </p>
    </>
  );
}

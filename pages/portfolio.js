import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from "../styles/PortfolioPage.module.css";
import { useEffect, useState } from "react";
import navbarData from '../components/navBar/navBarData';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [knownLanguages, setKnownLanguages] = useState(["JS", "HTML","CSS","MySQL","NextJS","ReactJS"])
  const [typewriterText, setTypewriterText] = useState([
    "Pure CSS and JS",
    "NEXT.JS framework",
  ]);
  const [currentTypewriterText, setCurrentTypewriterText] = useState(0)
  const [flickerSignage, setFlickerSignage] = useState("OPEN");

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTypewriterText != typewriterText.length - 1) {
        setCurrentTypewriterText((prevIndex) => prevIndex + 1);
      } else {
        setCurrentTypewriterText(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTypewriterText]);
  // const divStyle = {
  //   color: "blue",
  //   backgroundImage: "url(" + "../public/backgroundImg.jpg" + ")",
  //   layout:"fill"
    
  // };
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.mainText}>
          <p>This page </p>
          <p style={{ marginBottom: "5px" }}>was built on</p>
          <p className={styles.typewriterText}>
            {typewriterText[currentTypewriterText]}
          </p>
          <p>with 0 packages.</p>
          {/* <p>{navbarData[0].label}</p> */}
        </div>
        <div className={styles.buttonGroup}>
          {navbarData.map((element, index) => {
            // eslint-disable-next-line react/jsx-key
            return (
              <button className={styles.button} key={index}>
                {navbarData[index].label}
              </button>
            );
          })}
        </div>
      </main>
    </>
  );
}

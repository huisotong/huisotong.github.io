import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/projectsPage.module.css";
import { useEffect, useState } from "react";
import navbarData from "../../components/navBar/navBarData";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  const projectInfo = [
    {
      name: "Job search Website",
      date: "07/04/2022",
    },
    {
      name: "POS system",
      date: "12/09/2022",
    },
    {
      name: "Portfolio",
      date: "09/01/2023",
    },
  ];
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.projectSelector}>
          {projectInfo.map((element, index) => {
            // eslint-disable-next-line react/jsx-key
            return (
              <p
                className={styles[`projectSelectorName${index + 1}`]}
                key={index}
              >
                {projectInfo[index].name}
              </p>
            );
          })}
          {projectInfo.map((element, index) => {
            // eslint-disable-next-line react/jsx-key
            return (
              <button
                className={styles[`projectSelectorDate${index + 1}`]}
                key={index}
              >
                <span className={styles[`projectSelectorDateFront${index+1}`]}>
                  {projectInfo[index].date}
                </span>
              </button>
            );
          })}
          {/* <span class="filling-line" aria-hidden="true"></span> */}
        </div>
        <div className={styles.mainText}>
          <h1>About me</h1>
          <br />
          <p>Hi there!</p>
          <p>
            Throughout my journey in Republic Polytecnic pursuing the Diploma of
            information technology, I&lsquo;ve been exploring different
            applications of IT and where my interest would be in. By the end of
            year 2, I found that there was something in programming that
            intrigued me. Since then, I&lsquo;ve started to do some
            self-learning and have taken part in 3 projects, one being my
            final-year-project, second during my internship and lastly, this
            website
          </p>
          <p>
            Throughout my journey in Republic Polytecnic pursuing the Diploma of
            information technology, I&lsquo;ve been exploring different
            applications of IT and where my interest would be in. By the end of
            year 2, I found that there was something in programming that
            intrigued me. Since then, I&lsquo;ve started to do some
            self-learning and have taken part in 3 projects, one being my
            final-year-project, second during my internship and lastly, this
            website
          </p>
          <p>
            Throughout my journey in Republic Polytecnic pursuing the Diploma of
            information technology, I&lsquo;ve been exploring different
            applications of IT and where my interest would be in. By the end of
            year 2, I found that there was something in programming that
            intrigued me. Since then, I&lsquo;ve started to do some
            self-learning and have taken part in 3 projects, one being my
            final-year-project, second during my internship and lastly, this
            website
          </p>
          <p>
            Throughout my journey in Republic Polytecnic pursuing the Diploma of
            information technology, I&lsquo;ve been exploring different
            applications of IT and where my interest would be in. By the end of
            year 2, I found that there was something in programming that
            intrigued me. Since then, I&lsquo;ve started to do some
            self-learning and have taken part in 3 projects, one being my
            final-year-project, second during my internship and lastly, this
            website
          </p>
        </div>
      </main>
    </>
  );
}

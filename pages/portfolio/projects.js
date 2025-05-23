import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/projectsPage.module.css";
import { useEffect, useState } from "react";
// import videoDemo from "../../public/projects/project1/videoDemo.mp4";

import ProjectData from "../../components/portfolio/projectData";
import Project1 from "../../components/portfolio/project1";
import Project2 from "../../components/portfolio/project2";
import Project3 from "../../components/portfolio/project3";
import Project4 from "../../components/portfolio/project4";
import Project5 from "../../components/portfolio/project5";
import Project6 from "../../components/portfolio/project6";
import Project7 from "../../components/portfolio/project7";

const inter = Inter({ subsets: ["latin"] });
export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [previousProjectIndex, setPreviousProjectIndex] = useState(-1);
  const [projectCycle, setProjectCycle] = useState(1);

  const handleProjectCycleChange = (direction, projectCycle) => {
    if (direction === "forward") {
      setProjectCycle(projectCycle + 1);
      console.log(`${projectCycle} * 3-3 = ${projectCycle * 3 - 3}`);
      setActiveProjectIndex((projectCycle + 1) * 3 - 3);
    } else if (direction === "backward") {
      setProjectCycle(projectCycle - 1);
      setActiveProjectIndex((projectCycle - 1) * 3 - 3);
    }
  };
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.projectCycleLeftContainer}>
          <button
            className={styles.projectCycleNavigationButton}
            style={projectCycle === 1 ? { opacity: "0.5" } : { opacity: "1" }}
            disabled={projectCycle === 1 ? true : false}
            onClick={() => {
              handleProjectCycleChange("backward", projectCycle);
            }}
          >
            <Image
              src="/leftArrow.svg"
              alt="LeftArrow Icon"
              className={styles.projectCycleNavigationButtonIconLeft}
              width={50}
              height={50}
            />
          </button>
        </div>
        <div className={styles.projectCycleRightContainer}>
          <button
            className={styles.projectCycleNavigationButtonRight}
            style={
              projectCycle ===
              (ProjectData.length - (ProjectData.length % 3)) / 3 + 1
                ? { opacity: "0.5" }
                : { opacity: "1" }
            }
            disabled={
              projectCycle ===
              (ProjectData.length - (ProjectData.length % 3)) / 3 + 1
                ? true
                : false
            }
            onClick={() => {
              handleProjectCycleChange("forward", projectCycle);
            }}
          >
            <Image
              src="/rightArrow.svg"
              alt="RightArrow Icon"
              className={styles.projectCycleNavigationButtonIconRight}
              width={50}
              height={50}
            />
          </button>
        </div>
        <div className={styles.projectSelector}>
          {ProjectData.map((element, index) => {
            // eslint-disable-next-line react/jsx-key
            if (
              index + 1 <= projectCycle * 3 &&
              index + 1 >= projectCycle * 3 - 2
            ) {
              return (
                <p
                  className={
                    styles[
                      `projectSelectorName${
                        (index + 1) % 3 === 0 ? 3 : (index + 1) % 3
                      }`
                    ]
                  }
                  key={index}
                >
                  {ProjectData[index].name}
                </p>
              );
            }
          })}
          {ProjectData.map((element, index) => {
            // eslint-disable-next-line react/jsx-key
            if (
              index + 1 <= projectCycle * 3 &&
              index + 1 >= projectCycle * 3 - 2
            ) {
              return (
                <button
                  className={
                    styles[
                      `projectSelectorDate${
                        (index + 1) % 3 === 0 ? 3 : (index + 1) % 3
                      }`
                    ]
                  }
                  key={index}
                  onClick={() => {
                    setActiveProjectIndex(index);
                  }}
                >
                  <span
                    className={styles.projectSelectorDateFront}
                    style={
                      activeProjectIndex === index
                        ? {
                            backgroundColor: "white",
                            color: "black",
                          }
                        : {
                            backgroundColor: "transparent",
                            color: "white",
                          }
                    }
                  >
                    {ProjectData[index].date}
                  </span>
                  <span
                    className={styles.projectSelectorDateLowerBorder}
                  ></span>
                </button>
              );
            }
          })}
        </div>
        <Project1
          activeProjectIndex={activeProjectIndex}
          projectData={ProjectData}
        />

        <Project2
          activeProjectIndex={activeProjectIndex}
          projectData={ProjectData}
        />

        <Project3
          activeProjectIndex={activeProjectIndex}
          projectData={ProjectData}
        />

        <Project4
          activeProjectIndex={activeProjectIndex}
          projectData={ProjectData}
        />

        <Project5
          activeProjectIndex={activeProjectIndex}
          projectData={ProjectData}
        />

        <Project6
          activeProjectIndex={activeProjectIndex}
          projectData={ProjectData}
        />

        <Project7
          activeProjectIndex={activeProjectIndex}
          projectData={ProjectData}
        />
      </main>
    </>
  );
}

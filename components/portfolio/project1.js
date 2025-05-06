import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/projectsPage.module.css";
import { useEffect, useState } from "react";
import navbarData from "../navBar/navBarData";
import opportunitiesPage from "../../public/projects/project1/opportunitiesPage.jpg";
import favouritesPage from "../../public/projects/project1/favouritesPage.jpg";
import reviewPage from "../../public/projects/project1/reviewPage.jpg";
import navBar from "../../public/projects/project1/navBar.jpg";

const Project1 = ({ activeProjectIndex, projectData }) => {
  return (
    <div
      className={styles.mainText}
      style={
        activeProjectIndex === 0
          ? { marginTop: "0", transition: "1s" }
          : { marginTop: "60%", transition: "1s", opacity: "0" }
      }
    >
      <div>
        <h2>{projectData[0].name}</h2>
        <p>Built on React.Js, HTML {"&"} CSS!</p>
        <p>Duration: 5 months (Alongside daily lectures)</p>
        <br />
        <p>
          <small>
            <u>Purpose</u>
            <br />
            This website was (Cyber Youth Collective)CYC&lsquo;s programme to
            aggregate and co-create non-academic and academic internship
            opportunities to provide youths from all educational backgrounds an
            opportunity to affirm and develop their interest in the field.
            <br />
            <br />
            <Image
              src={opportunitiesPage}
              alt="Picture of the Opportunities page"
              style={{
                float: "left",
                marginRight: "10px",
                marginTop: "10px",
              }}
              width={290}
              height={250}
            />
            <br />
            <u>Objective</u>
            <br />
            The web platform will provide youths an easy-access platform to
            browse opportunities, supercharging their self-sourced internship
            experience. It also seeks to introduce new opportunities to youths,
            which would otherwise not have been discovered / possible
            <Image
              src={navBar}
              alt="Picture of the navigation bar"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "105px",
                marginBottom: "15px",
              }}
              width={666}
              height={54}
            />
            <Image
              src={reviewPage}
              alt="Picture of the review page"
              style={{
                float: "right",
                marginRight: "10px",
                marginTop: "10px",
              }}
              width={223}
              height={403}
            />
            <br />
            <br />
            <u>Tasks</u>
            <br />
            Without any prior knowledge of Javascript, HTML or CSS, I had
            quickly skim through documentation and set up the base application
            to work on within the first week. Subsequently, I was tasked to
            create the Navigation Bar, main Opportunities listing page,
            Opportunity details page, Favourites page, making review page and a
            page for users to monitor the state of applications. I was also in
            charge of maintaining and securing routes, ensuring that certain
            routes are only accessible by authenticated users
            {/* <video width="400" controls>
                <source src={videoDemo} type="video/mp4" />
                Your browser does not support HTML video.
              </video> */}
            {/* "../../public/projects/project1/videoDemo.mp4" */}
            {/* <video>
                <source src={videoDemo} type="video/mp4" />
              </video> */}
            <video
              width="600"
              controls
              style={{
                display: "block",
                margin: "20px auto",
              }}
            >
              <source src="/projects/project1/videoDemo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Project1;

import Image from "next/image";
import styles from "../../styles/projectsPage.module.css";
import mainPage from "../../public/projects/project2/main.jpg";
import quickView from "../../public/projects/project2/quickView.jpg";
import checkout from "../../public/projects/project2/checkout.jpg";
import cardDetails from "../../public/projects/project2/cardDetails.jpg";
import cart from "../../public/projects/project2/cart.jpg";
import { useState } from "react";
const Project2 = ({ activeProjectIndex, projectData }) => {
  const projectImages = [
    {
      src: mainPage,
      alt: "Picture of the main page",
      width: 587,
      height: 407,
    },
    {
      src: quickView,
      alt: "Picture of the quick view modal",
      width: 588,
      height: 420,
    },
    {
      src: cart,
      alt: "Picture of the cart component",
      width: 587.5,
      height: 407.5,
    },
    {
      src: checkout,
      alt: "Picture of the checkout page",
      width: 588.5,
      height: 406,
    },
    {
      src: cardDetails,
      alt: "Picture of the card details form",
      width: 587,
      height: 407.5,
    },
  ];
  const [activePicture, setActivePicture] = useState(0);
  const handlePictureChange = (index) => {
    if (index === projectImages.length) {
      setActivePicture(0);
    } else if (index < 0) {
      setActivePicture(projectImages.length - 1);
    } else {
      setActivePicture(index);
    }
  };
  return (
    <div
      className={styles.mainText}
      style={
        activeProjectIndex === 1
          ? { marginTop: "0", transition: "1s" }
          : { marginTop: "60%", transition: "1s", opacity: "0" }
      }
    >
      <h2>{projectData[1].name}</h2>
      <p>
        Built on React.Js, HTML {"&"} CSS. Link to demo{" "}
        <a
          target="_blank"
          href="https://ecommercewebsite.huisotong.repl.co/"
          rel="noreferrer"
        >
          <i>
            <u>here</u>
          </i>
        </a>{" "}
        (unstable hosting)
      </p>
      <br />
      <p>
        <small>
          During my last few weeks of production for the YouthxIndustry Web
          Platform, I received a task for my internship application which was to
          create a static E-commerce website that contained the following
          functionalities
          <br />
          - Product List
          <br />
          - Product Overview
          <br />
          - Shopping Cart
          <br />
          - Checkout Page
          <br />
        </small>
      </p>
      <div
        className={styles.pictureContainer}
        style={{
          width: projectImages[activePicture].width,
          height: projectImages[activePicture].height,
        }}
      >
        <button
          className={styles.buttonPictureLeft}
          style={{
            height: projectImages[activePicture].height,
          }}
          onClick={() => {
            handlePictureChange(activePicture - 1);
          }}
        >
          {"<"}
        </button>

        <Image
          src={projectImages[activePicture].src}
          alt="Picture of the main page"
          style={{
            display: "inline",
          }}
          width={projectImages[activePicture].width}
          height={projectImages[activePicture].height}
        />
        <button
          className={styles.buttonPictureRight}
          style={{
            right: `calc(50% - (${projectImages[activePicture].width}px)/2)`,
            height: projectImages[activePicture].height,
          }}
          onClick={() => {
            handlePictureChange(activePicture + 1);
          }}
        >
          {">"}
        </button>
      </div>
      <p>
        <small>
          Since I was busy with my current project, I decided to challenge
          myself to complete the task within 3 days. I was encouraged to use
          bootstrap so I quickly went through the react bootstrap documentations
          and utilised it in the website
        </small>
      </p>
    </div>
  );
};

export default Project2;

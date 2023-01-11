import Image from "next/image";
import styles from "../../styles/projectsPage.module.css";
import mainPage from "../../public/projects/project2/main.jpg";
import quickView from "../../public/projects/project2/quickView.jpg";
import checkout from "../../public/projects/project2/checkout.jpg";
import cardDetails from "../../public/projects/project2/cardDetails.jpg";
import cart from "../../public/projects/project2/cart.jpg";
const Project2 = ({ activeProjectIndex, projectData }) => {
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
        Link to demo{" "}
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
          <Image
            src={mainPage}
            alt="Picture of the main page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={587}
            height={407}
            quality={100}
          />
          <Image
            src={quickView}
            alt="Picture of the main page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={384}
            height={268}
          />
        </small>
      </p>
    </div>
  );
};

export default Project2;

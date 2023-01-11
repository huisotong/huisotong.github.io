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
        activeProjectIndex === 2
          ? { marginTop: "0", transition: "1s" }
          : { marginTop: "60%", transition: "1s", opacity: "0" }
      }
    >
      <h2>{projectData[2].name}</h2>
      <p>Built on React.JS, HTML and css. Pictures and video included!</p>
      <br />
      <p>
        <small>
          This website was CYC&lsquo;s programme to aggregate and co-create
          non-academic and academic internship opportunities to provide youths
          from all educational backgrounds an opportunity to affirm and develop
          their interest in the field.
        </small>
      </p>
    </div>
  );
};

export default Project2;

import Image from "next/image";
import styles from "../../styles/projectsPage.module.css";
import cancelModal from "../../public/projects/project3/cancelModal.jpg";
import cashierPage from "../../public/projects/project3/cashierPage.jpg";
import paymentModal from "../../public/projects/project3/paymentModal.jpg";
import paymentTypeModal from "../../public/projects/project3/paymentTypeModal.jpg";
import transactionSummaryModal from "../../public/projects/project3/transactionSummaryModal.jpg";

const Project3 = ({ activeProjectIndex, projectData }) => {
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
      <p>Built on Next.JS, HTML and css. Pictures included!</p>
      <p>Duration: 4.5 months</p>
      <br />
      <p>
        <small>
          <Image
            src={cashierPage}
            alt="Picture of the Cashier page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={470.8}
            height={327.2}
          />
          <u>Tasks</u>
          <br />
          While working as an application developer intern for ABC Cooking
          Studio, I worked on a Point-Of-Sale system and its admin system,
          developed by another batch of students. I was tasked to resolve
          existing bugs, improve code quality, and develop and implement new
          features. The application was intended to intended to replace the
          existing outsourced POS system in all outlets.
          <br />
          <br />
          <br />
          <Image
            src={paymentTypeModal}
            alt="Picture of the Cashier page"
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={470.8}
            height={327.2}
          />
          <br />
          <br />
          <br />
          <u>Preparation</u>
          <br />
          Since I had roughly a week before my internship, I took the time to
          read through the tech stacks and realised that I was unfamiliar with
          the framework, Next.Js. So I read documentation, watched videos from
          &quot;The Net Ninja&quot; on YouTube and practised.
          <Image
            src={paymentModal}
            alt="Picture of the Cashier page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={470.8}
            height={327.2}
          />
          <br />
          <br />
          <u>Process</u>
          <br />
          After being assigned a feature, I would create a new branch, complete
          the feature, check with the project manager for approval of the UI,
          submit a pull request and undergo a code review with senior developers
          if the feature is more complex. During the code review, I would be
          told about ways I could improve my code efficiency and readability.
          After code reviews and resolving comments raised on GIT, I would
          commit the branch to master and work on another feature.
          <Image
            src={transactionSummaryModal}
            alt="Picture of the Cashier page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={470.8}
            height={327.2}
          />
          <br />
          <br />
          <u>Task examples</u>
          <br />
          Datatables + sever side pagination + filters
          <br />
          Cronjob + Uploading files to sftp server
          <br />
          Autopopulation remaining amount of payment
          <br />
          Receipt formatting and printing
          <br />
          Authentication checks for members and staff
          <br />
          Search Bar
          <br />
          <br />
          <br />
          <br />
          <br /><Image
            src={cancelModal}
            alt="Picture of the Cashier page"
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={470.8}
            height={327.2}
          />
          <u>Challenges</u>
          <br />
          One of the main challenges was Javascript and Next.Js fraMEWORK.
          Despite having experience with Javascript, there were still many
          functions I was unaware of that could have potentially reduced lines
          of code and concepts I was unsure about. Unlike Javascript, I had no
          experience in Next.Js other than the simple practices I did. To me,
          documentations and videos weren&lsquo;t the only things that helped
          me. As I was coding, I also learned a lot through reading other
          features developed by the students and understanding how they utilised
          certain functions. But that was where another challenge was. The fact
          that more complex codes weren&lsquo;t explained with comments made it
          harder to understand and resolve bugs if it came with comments of
          explanation
          
          <br />
        </small>
      </p>
    </div>
  );
};

export default Project3;

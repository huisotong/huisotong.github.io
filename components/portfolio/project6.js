import Image from "next/image";
import styles from "../../styles/projectsPage.module.css";
import dbSchema from "../../public/projects/project6/dbSchema.jpg";

const Project6 = ({ activeProjectIndex, projectData }) => {
  return (
    <div
      className={styles.mainText}
      style={
        activeProjectIndex === 5
          ? { marginTop: "0", transition: "1s" }
          : { marginTop: "60%", transition: "1s", opacity: "0" }
      }
    >
      <h2>{projectData[5].name}</h2>
      <p>Duration: 1 months (Alongside other trimester modules)</p>
      <p>
        Built on...
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Front end: HTML, CSS, and JavaScript
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Back end: Flask Framework (Python)
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Data layer: MySQL
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Integration : Flask-MySQLdb library
      </p>
      <br />
      <p>
        <small>
          <u>Purpose</u>
          <br />
          JobSwipe is a job-matching platform tailored to the tech industry. It
          streamlines the job search and hiring process by providing
          personalized job recommendations, a swipe-based interface for user
          engagement, and real-time communication between job seekers and
          employers.
          <br />
          <br />
          <u>Responsibilities</u>
          <br />
          - Database schema designer
          <br />
          - Chat Page + Functionality (Dynamic)
          <br />
          - Chat creation vis job listing page
          <br />
          <br />
          <br />
          <Image
            src={dbSchema}
            alt="Picture of the navigation bar"
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={419}
            height={400.5}
          />
          <u>Database Schema</u>
          <br />
          I designed the database to support the platform&apos;s core
          functionalities, including user management, job postings,
          applications, and chat features. Key collections include User for
          storing user details, JobSeeker and Employer for specific user types,
          Job for job postings, Chat for tracking chat sessions, and ChatMessage
          for storing individual messages. The schema ensures scalability and
          efficient data retrieval, enabling seamless integration between the
          frontend and backend.
          <br />
          <br />
          <video
            width="900"
            controls
            style={{
              display: "block",
              margin: "20px auto",
            }}
          >
            <source src="/projects/project6/chatDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <u>Chat Page</u>
          <br />
          The chat page was implemented to facilitate real-time communication
          between job seekers and employers. It includes backend routes in
          app.py for creating chats, sending messages, retrieving chat
          histories, and deleting chats. MongoDB queries were used to manage
          chat data, ensuring efficient storage and retrieval. The frontend was
          designed to display chat sessions and messages dynamically, providing
          an intuitive interface for users to interact with their chats.
          <br />
          <br />
          <br />
        </small>
      </p>
    </div>
  );
};

export default Project6;

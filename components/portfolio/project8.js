import Image from "next/image";
import styles from "../../styles/projectsPage.module.css";
import chatPagePic from "../../public/projects/project8/uiDemo.png";
import ragPic from "../../public/projects/project8/ragDemo.png";

const Project8 = ({ activeProjectIndex, projectData }) => {
  return (
    <div
      className={styles.mainText}
      style={
        activeProjectIndex === 7
          ? { marginTop: "0", transition: "1s" }
          : { marginTop: "60%", transition: "1s", opacity: "0" }
      }
    >
      <h2>{projectData[7].name} </h2>
      <p>Duration: 3 months (Alongside other trimester modules)</p>
      <p>Techstack:</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>Frontend:</strong> React.js, TailwindCSS
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>Backend:</strong> Flask (Python)
        {/* , JWT,RBAC */}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>AI Integration:</strong> OpenRouter,
        LangChain
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>Vector Search:</strong> Qdrant
        <br />
      </p>

      <br />
      <p>
        <small>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center", // Vertically centers the content
              gap: "20px",
              height: "100%", // Ensure the container has a height for vertical centering
            }}
          >
            <div
              style={{
                flex: "2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Centers content vertically
                alignItems: "flex-start", // Aligns content to the left
                textAlign: "left", // Ensures text is left-aligned
                height: "100%", // Ensure the container has height for proper centering
              }}
            >
              <video
                controls
                style={{
                  display: "block",
                  margin: "20px auto",
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "20px",
                }}
              >
                <source
                  src="/projects/project8/chatbotDemo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <u>Purpose</u>
              <p>
                This AI sandbox chatbot was built to create a centralized
                platform that enhances academic support for tertiary students
                using AI-powered chatbots. By offering customizable,
                module-specific assistance and administrative tools, the system
                ensures students can access consistent and timely academic help
                while allowing educators to efficiently manage chatbot
                configurations and support workflows.
              </p>
              <br />
              <u>Responsibilities</u>
              <p>
                - Developed frontend chat interface
                <br />
                - Implemented chatbot message API
                <br />
                - Vector similarity search with Qdrant for document retrieval
                <br />
              </p>
            </div>
          </div>
          <Image
            src={chatPagePic}
            alt="Picture of the chat page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={450}
            height={223}
          />
          <u>Frontend Chat Interface</u>
          <br />
          On the frontend, the interface is built using React and supports
          multiple chat sessions, message rendering with markdown support, and
          real-time updates such as model selection. I implemented input
          validation and disabled sending messages when users had negative
          credits, ensuring a user-friendly experience.
          <br />
          <br />
          <u>Chatbot Message API</u>
          <br />
          I developed a robust backend API endpoint responsible for managing
          chatbot interactions. This included handling new chat session creation
          for first-time messages, maintaining conversation history, and
          generating AI responses using OpenRouter’s large language model APIs.
          The API supports dynamic model overrides on a per-module basis,
          allowing chatbots to be customized for different academic modules.
          This ensured that the chatbot’s responses were contextually relevant
          and tailored to the specific needs of students.
          <br />
          <br />
          <Image
            src={ragPic}
            alt="Picture of the chat page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={500}
            height={346}
          />
          <u>Vector Similarity Search Integration</u>
          <br />
          To improve the chatbot’s response accuracy, I integrated Qdrant, a
          vector database that enables semantic document retrieval. This allowed
          the system to perform similarity searches by matching student queries
          with relevant module documents uploaded by instructors. The chatbot
          uses this contextual information to generate more precise and helpful
          answers, significantly enhancing the quality of academic support.
        </small>
      </p>
    </div>
  );
};

export default Project8;

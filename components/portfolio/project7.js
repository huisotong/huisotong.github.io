import Image from "next/image";
import styles from "../../styles/projectsPage.module.css";
import dbSchema from "../../public/projects/project6/dbSchema.jpg";

const Project7 = ({ activeProjectIndex, projectData }) => {
  return (
    <div
      className={styles.mainText}
      style={
        activeProjectIndex === 6
          ? { marginTop: "0", transition: "1s" }
          : { marginTop: "60%", transition: "1s", opacity: "0" }
      }
    >
      <h2>{projectData[6].name}</h2>
      <p>Duration: 1 months (Alongside other trimester modules)</p>
      <p>
        Built on Kotlin with Jetpack Compose, Gemini AI for recipe generation
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
            {/* Video on the left */}
            <div style={{ flex: "1" }}>
              <video
                width="55%"
                controls
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              >
                <source
                  src="/projects/project7/mealPlanningMobileAppDemo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

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
              <u>Purpose</u>
              <p>
                This personalized Nutrition &amp; Meal Planning App application
                is a platform that leverages AI to recommend health-focused
                recipes designed for individuals with specific dietary
                restrictions and health conditions (e.g. lactose intolerance and
                diabetics). The AI analyzes the ingredients, nutritional values,
                and offers suitable substitutes for restricted items.
              </p>
              <br />
              <u>Responsibilities</u>
              <p>
                - Login Page
                <br />
                - User settings page
                <br />
                - Room Database integration
                <br />
                - Recipe generation page using Gemini AI
                <br />- Overall navigation layout (NavHost, bottom bar, top bar)
              </p>
            </div>
          </div>
          {/* <Image
            src={dbSchema}
            alt="Picture of the navigation bar"
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={419}
            height={400.5}
          /> */}
          <br />
          <u>Login Page</u>
          <br />
          I implemented a secure login system using Room database for local user
          authentication. The login functionality includes real-time validation
          of user credentials and error handling for invalid inputs. I utilized
          ViewModel and LiveData to ensure the login state persists across
          configuration changes. Additionally, I integrated a
          MainViewModelFactory to inject dependencies like the Application
          context into the ViewModel, ensuring proper lifecycle management.
          <br />
          <br />
          <u>User settings page</u>
          <br />
          I developed a user settings page that allows users to update their
          profile information, including age, weight, height, gender, and
          dietary restrictions. The settings are stored persistently using a
          combination of Room database and SharedPreferences for efficient
          retrieval and updates. I implemented two-way data binding with Compose
          OutlinedTextField components to provide a seamless user experience.
          The ViewModel handles database updates asynchronously using Coroutines
          to ensure a responsive UI.
          <br />
          <br />
          <u>Room Database</u>
          <br />
          I integrated the Room database to manage user data, including
          authentication, profile settings, and dietary preferences. I designed
          the database schema with entities like User and implemented a UserDao
          interface for CRUD operations. To ensure thread safety and lifecycle
          awareness, I used a singleton pattern for the AppDatabase instance and
          injected a CoroutineScope for background operations. I also
          implemented a DatabaseCallback to prepopulate the database with sample
          user data during initialization.
          <br />
          <br />
          <u>Recipe generation page using Gemini AI</u>
          <br />
          I built a recipe generation page that leverages the Gemini AI API to
          create personalized recipes based on user-provided ingredients,
          dietary restrictions, and nutritional requirements. The page
          dynamically updates the AI prompt using user inputs and retrieves the
          generated recipe asynchronously. I implemented error handling for API
          failures and ensured the UI remains responsive by using Coroutines and
          LiveData. The recipe data is parsed and displayed in a structured
          format using Compose components like Column and Text.
          <br />
          <br />
          <u>Overall Navigation Layout (NavHost, Bottom Bar, Top Bar)</u>
          <br />
          I designed and implemented the app&apos;s navigation architecture
          using Jetpack Navigation with a NavHost to manage navigation between
          screens. I created a BottomNavigationBar for quick access to key pages
          and a dynamic TopAppBar that adapts based on the current screen. The
          navigation system supports deep linking and ensures state preservation
          across configuration changes. I used Compose Scaffold to integrate the
          navigation components seamlessly into the app&apos;s layout.
          <br />
          <br />
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

export default Project7;

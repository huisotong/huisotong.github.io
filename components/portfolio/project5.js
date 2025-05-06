import Image from "next/image";
import styles from "../../styles/projectsPage.module.css";
import homePage from "../../public/projects/project5/homePage.png";
import allProductsPage from "../../public/projects/project5/allProductsPage.png";
import cartPage from "../../public/projects/project5/cartPage.png";
import productPage from "../../public/projects/project5/productPage.png";

const Project5 = ({ activeProjectIndex, projectData }) => {
  return (
    <div
      className={styles.mainText}
      style={
        activeProjectIndex === 4
          ? { marginTop: "0", transition: "1s" }
          : { marginTop: "60%", transition: "1s", opacity: "0" }
      }
    >
      <h2>{projectData[4].name}</h2>
      <p>Built on HTML, CSS, JavaScript, PHP, MySQL</p>
      <p>Duration: 1 months (Alongside other trimester modules)</p>
      <br />
      <p>
        <small>
          <u>Purpose</u>
          <br />
          This Website is an online platform for pet owners to source supplies
          for their pets whenever and wherever. It offers an extensive catalogue
          of pet-related supplies, such as pet food, toys and consumables.
          <br />
          <video
            width="900"
            controls
            style={{
              display: "block",
              margin: "20px auto",
            }}
          >
            <source
              src="/projects/project5/petStoreDemo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <u>Responsibilities</u>
          <br />
          - Home Page Development
          <br />
          - Product Listing Page (Dynamic)
          <br />
          - Individual Product Page (Dynamic)
          <br />
          - Cart Page (Dynamic)
          <br />
          - Add to Cart Functionality
          <br />
          - Database Design
          <br />- API Development Debugging and Logging
          <br />
          <br />
          <Image
            src={homePage}
            alt="Picture of the navigation bar"
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={500}
            height={283.46}
          />
          <u>Home Page</u>
          <br />
          I designed and implemented a dynamic featured products section that
          refreshes upon page reload. Integrated functionality to allow users to
          add products to the cart or navigate to individual product pages
          directly from the home page.
          <br />
          <br />
          <Image
            src={allProductsPage}
            alt="Picture of the Cashier page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={557}
            height={340.46}
          />
          <br />
          <u>Product Listing Page</u>
          <br />
          For the product listing page, I have developed a dynamic product
          listing page that fetches product data from the database and displays
          it based on categories. In addition, I have also implemented filtering
          functionality and hover effects to enhance user interaction.
          <br />
          <br />
          <br />
          <Image
            src={productPage}
            alt="Picture of the Cashier page"
            style={{
              float: "right",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={557}
            height={340.46}
          />
          <u>Product page</u>
          <br />
          For the individual product page, I have built a dynamic product page
          that displays detailed product information, including descriptions,
          pricing, and reviews. Added functionality to allow users to add
          multiple quantities of a product to the cart. Implemented a
          recommendation system to display four related products based on the
          current product&apos;s category.
          <br />
          <br />
          <br />
          <u>Add to Cart Functionality</u>
          <br />
          For the Add-To-Cart functionality, I utilised sessionStorage to track
          products added to the cart during the session. Integrated visual
          feedback, such as updating the cart count in the navigation bar and
          blinking the cart icon.
          <br />
          <br />
          <Image
            src={cartPage}
            alt="Picture of the Cashier page"
            style={{
              float: "left",
              marginRight: "10px",
              marginTop: "10px",
            }}
            width={500}
            height={283.46}
          />
          <u>Cart Page</u>
          <br />
          I have also created a dynamic cart page that displays all products
          added to the cart, including their quantity, price, and total cost.
          Implemented features to edit product quantities, delete products, and
          calculate the total cart value dynamically.
          <br />
          <br />
          <br />
          <u>Database Design and API Development</u>
          <br />
          I created the database schema and tables to store product, user, and
          transaction data. Wrote SQL statements to populate the database with
          mock data. Developed API endpoints in dbConnection.php to handle GET
          and POST requests for retrieving and updating data.
          <br />
        </small>
      </p>
    </div>
  );
};

export default Project5;

import React from 'react';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Math Fans!</h2>
      <p>
        The Math Fans website is a single-page application built using
        React, showcasing my proficiency in creating functional and visually
        appealing components. I have successfully implemented React Router for
        navigation between different pages and utilized the Axios
        library for fetching quotes from an external API.
      </p>
      <ul>
        <li>
          Implementing React Router for managing multiple pages within a
          single-page application.
        </li>
        <li>
          Creating reusable components, such as a navigation bar and calculator
          buttons.
        </li>
        <li>
          Handling component states and user interactions using hooks (useState
          and useEffect).
        </li>
        <li>
          Integrating external APIs using the Axios library for fetching quotes.
        </li>
        <li>
          Applying responsive CSS styles to ensure an aesthetically pleasing
          user interface.
        </li>
        <p>
          By completing this project, I have demonstrated a strong understanding
          of React fundamentals, including state management, component
          lifecycle, and routing. Furthermore, I have showcased my ability to
          integrate third-party libraries and APIs, making me a well-rounded
          developer suitable for modern web development roles.
        </p>
      </ul>
    </div>
  );
}

export default Home;

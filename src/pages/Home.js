import React from 'react';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Math Fans!</h2>
      <p>
        The Math Fans website is a single-page application crafted using React,
        displaying my skills in building functional and visually attractive
        components. I&apos;ve effectively incorporated React Router for
        navigating between different sections and employed the Axios library to
        fetch quotes from an external API.
      </p>
      <ul>
        <li className="home-list">
          Implementing React Router for managing multiple pages within a
          single-page application.
        </li>
        <li className="home-list">
          Creating reusable components, such as a navigation bar and calculator
          buttons.
        </li>
        <li className="home-list">
          Managing component states and user interactions with hooks, namely
          useState and useEffect.
        </li>
        <li className="home-list">
          Integrating external APIs by utilizing the Axios library to fetch
          quotes.
        </li>
        <li className="home-list">
          Applying responsive CSS styles to ensure a pleasing user interface.
        </li>
        <li className="home-list">
          Implementing unit testing with Jest and React Testing Library to
          ensure component reliability.
        </li>
        <li className="home-list">
          Applying GitFlow as a branching strategy for effective version
          control.
        </li>
        <li className="home-list">
          Engaging in pair programming to enhance collaboration and code
          quality.
        </li>
      </ul>
      <p>
        Upon completing this project, I have demonstrated a solid grasp of React
        fundamentals, including state management, component lifecycle, and
        routing. Additionally, I have showcased my capability to integrate
        third-party libraries and APIs, as well as various development
        methodologies and tools, making me a versatile developer prepared for
        modern web development roles.
      </p>
    </div>
  );
}

export default Home;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
  }

  :root {
      --primary: #6D4AAB; 
      --primary-disabled: #AB97CF;
      --primary2: 'color: hsla(240, 47.51773049645389%, 27.647058823529413%, 0.8)';
      --primary3: 'color: hsla(240, 47.51773049645389%, 27.647058823529413%, 0.6)';
      --green: #00b894;
      --grey: #b2bec3;
      --accent: #ff7675;
      --delete: #d63031;
  }

  body {
      font-family: 'League Spartan', sans-serif;
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      overflow: hidden;
      color: rgba(34,34,96,.6);
      }
  `;

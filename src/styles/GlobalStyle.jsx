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
      --green: #16AB86;
      --grey: #b2bec3;
      --accent: #F38695;
      --cta: #FBD96B;
      --delete: #AB273E;
  }

  body {
      font-family: 'League Spartan', sans-serif;
      font-size: clamp(1rem, 1.5vw, 1.2rem);
      overflow: hidden;
      color: rgba(109, 74, 171, 0.6);
      }
  `;

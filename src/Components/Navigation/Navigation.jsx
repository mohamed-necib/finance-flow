import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuItems";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="user-container">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Thomas</h2>
          <p>Ton Argent</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li> Déconnexion</li>
      </div>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 334px;
  height: 100%;
  background: rgba(252, 246, 249, 0.415);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-container {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      align-items: center;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9db;
      border: 2px solid white;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, .6);
    }
  }
`;

export default Navigation;

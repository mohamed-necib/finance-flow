import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { deconnect } from "../../utils/icons";

function Navigation({ active, setActive }) {
  return (
    <NavigationStyled>
      <div className="user-container">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Welcome!</h2>
          <p>Thomas</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>{deconnect} Déconnexion</li>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  li {
    color: rgba(123, 74, 213, 0.4);
  }
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
      color: var(--primary);
    }
    p {
      color: rgba(72, 29, 150, 0.5);
    }
  }
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(72, 29, 150, 0.5);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(72, 29, 150, 0.5);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .active {
    color: var(--primary) !important;
    i {
      color: var(--primary) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--primary);
      border-radius: 0 20px 20px 0;
    }
  }
`;

export default Navigation;

import { useState, useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/userContext";

function Authenticate() {
  // Props + Hooks
  const [LogOrSign, setLogOrSign] = useState("SignUp");
  const [message, setMessage] = useState("");
  const { user, setUser } = useContext(UserContext);

  const changeForm = () => {
    setLogOrSign(LogOrSign === "login" ? "SignUp" : "login");
  };

  const handleSignin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confPassword = event.target.passwordConfirm.value;

    if (password !== confPassword) {
      console.error("Passwords do not match");
      return;
    }

    const formD = new FormData();
    formD.append("email", email);
    formD.append("password", password);
    formD.append("passwordConfirm", confPassword);

    try {
      const response = await fetch(
        "http://localhost/finance-flow/backend/authentication.php?signin=true",
        {
          method: "POST",
          body: formD,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        console.log(data);
      } else {
        console.error("Server error:", response.status);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  //Login ..
  const handleLog = async (event) => {
    event.preventDefault();
    

    const email = event.target.email.value;
    const password = event.target.password.value;
    

    //form
    const formD = new FormData();
    formD.append("email", email);
    formD.append("password", password);

    try {
      const response = await fetch(
        "http://localhost/finance-flow/backend/authentication.php?login=true",
        {
          method: "POST",
          credentials: "include",
          body: formD,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        if (data.success) {
          console.log(data.user);
          setUser({
            id: data.user.id,
            email: data.user.email,
            isAuth: true,
          });
        }
      } else {
        console.error("Server error:", response.status);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  //Return
  return (
    <AuthenticateStyled>
      {LogOrSign === "SignUp" ? (
          <div className="signUp">
            <form action="" onSubmit={handleSignin}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <label htmlFor="conf_pass_sign_up">Confirm Password</label>
              <input type="password" name="passwordConfirm" />
              <button>Sign Up</button>
            </form>
            <button onClick={changeForm}>Déjà un compte?</button>
            <p>{message}</p>
          </div>
      ) : (
        <div className="signIn">
          <form action="" onSubmit={handleLog}>
            <label htmlFor="email_sign_in">Email</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <button>Sign in</button>
            <button onClick={changeForm}>Pas encore de compte?</button>
          </form>
        </div>
      )}
    </AuthenticateStyled>
  );
}

const AuthenticateStyled = styled.div`

  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 27%;
  left: 36%;
  z-index: 100;

 
  .signIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

  }
  .signUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }
  label {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000000;
  }
  input {
    width: 300px;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-left: 10px;
  }
  button {
    width: 300px;
    height: 40px;
    background-color: #000000;
    color: #ffffff;
    border-radius: 10px;
    margin-bottom: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  button:hover {
    background-color: #ffffff;
    color: #000000;
  }
  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000000;
  }

`;

export default Authenticate;

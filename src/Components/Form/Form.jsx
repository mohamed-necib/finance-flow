import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../contexts/globalContext";

function Form() {
  const { addIncome } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
    type: "",
  });

  const { title, amount, date, category, description, type } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          value={title}
          type="text"
          name={"title"}
          placeholder="Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={"amount"}
          placeholder="Amount"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Catégorie
          </option>
          <option value="salary">Salaire</option>
          <option value="prime">Prime</option>
          <option value="other">Autre</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Ajouter une description"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </div>
      <div className="submit-btn">
        <button>Ajouter un Revenu</button>
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(109, 74, 171, 0.9);
    &::placeholder{
      color: rgba(109, 74, 171, 0.4);
    }
  }
  .input-control{
    input{
      width: 100%;
    }
    .selects {
      display: flex;
      justify-content: flex-end;
      select{
        color: rgba(109, 74, 171, 0.4);
        &:focus, &:active{
          color: rgba(109, 74, 171, 1);
        }
      }
    }
  }

    .submit-btn {
      button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
          background: var(--green) !important;
      }
    }
    

  }
`;

export default Form;

import React, {useState} from 'react'
import styled from 'styled-components/dist/sheet';

function Form() {
  const [inputState, setInputState] = useState({
    
  });

  return (
    <FormStyled>
        <div className="input-control">
          <input type="text"/>
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`



`;

export default Form
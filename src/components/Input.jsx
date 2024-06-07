import React, { useId, useState } from 'react';
import styled from 'styled-components';

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.375rem;
  align-items: start;
  width: 100%;
`;
const StyleLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const StyleInput = styled.input`
  border: 1px solid #c0c0c0;
  padding: 1rem 1.25rem;
  width: calc(100% - 2.5rem);
  border-radius: 0.5rem;
`;

export default function Input({ value, type = 'text', label, isRequired = false, name, placeholder, inputRef }) {
  const [inputValue, setInputValue] = useState(value);
  const inputId = useId();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <InputWrap>
      {label && (
        <StyleLabel type="text" htmlFor={inputId}>
          {label}
        </StyleLabel>
      )}
      <StyleInput
        id={inputId}
        type={type}
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        required={isRequired}
        name={name}
        placeholder={placeholder}
      />
    </InputWrap>
  );
}

import styled from 'styled-components';
import { React, useEffect, useRef, useState } from 'react';

const Input = styled.textarea`
  width: 100%;
  margin: 0.4em 0 0;
  padding: 0.6em;
  border: 1px solid #d4d8d9;
  font-size: 1.125rem;
  font-family: inherit;

  &::placeholder {
    color: #d4d8d9;
  }
  outline: none;
  resize: none;
  min-height: 400px;
  border: 1px solid #d4d8d9;
`;

function TextArea({
  name,
  value = '',
  maxLength = Infinity,
  highlighted = false,
  preventNewLine = false,
  placeholder = '',
  onChange,
}) {
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState('auto');

  useEffect(() => {
    if (value.length <= maxLength && textAreaRef.current) {
      const extraTextAreaPixelHeight = 5;
      const height =
        textAreaRef.current.scrollHeight + extraTextAreaPixelHeight;
      setTextAreaHeight(`${height}px`);
    }
  }, [value, maxLength]);

  const changeHandler = (event) => {
    const { value: newValue } = event.target;

    if (newValue.length <= maxLength) {
      if (!preventNewLine || !newValue.includes('\n')) {
        setTextAreaHeight('auto');
        onChange(newValue);
      }
    }
  };

  return (
    <Input
      id={name}
      name={name}
      ref={textAreaRef}
      placeholder={placeholder}
      value={value}
      highlighted={highlighted}
      minHeight={textAreaHeight}
      onChange={changeHandler}
    />
  );
}

export default TextArea;

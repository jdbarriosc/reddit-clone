import React, { useState } from 'react';
import styled from 'styled-components';
import TextArea from './inputs/TextArea';
import Spacer from './Spacer';

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 5px 20px;
  margin: auto;
  background-color: white;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 auto;
  width: fit-content;
  padding: 0.625rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.1s ease-in;
  align-self: right;
`;

function CreatePost() {
  const [text, setText] = useState('');

  const onPost = () => {
    // todo
  };

  return (
    <Container>
      <h3>Create a post</h3>

      <Spacer />

      <TextArea value={text} onChange={(value) => setText(value)} />

      <Spacer />

      <Button onClick={onPost}>Post</Button>

      <Spacer />
    </Container>
  );
}

export default CreatePost;

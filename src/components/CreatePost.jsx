import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isSuicidal from '../api/requests/isSuicidal';
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
  const [textIsSuicidal, setTextIsSuicidalText] = useState();

  const onPost = async () => {
    const response = await isSuicidal(text);
    setTextIsSuicidalText(response);
  };

  useEffect(() => {
    setTextIsSuicidalText(undefined);
  }, [text]);

  return (
    <Container>
      <h3>Create a post</h3>

      <Spacer />

      <TextArea value={text} onChange={(value) => setText(value)} />

      <Spacer />

      <Button onClick={onPost}>Post</Button>

      {textIsSuicidal === 0 && 'This text has no dangerous content.'}

      {textIsSuicidal === 1 &&
        'Be careful, this post has suicidal content that might be riskful for the community.'}

      <Spacer />
    </Container>
  );
}

export default CreatePost;

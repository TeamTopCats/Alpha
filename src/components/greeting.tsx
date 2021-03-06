import React, { useEffect, useContext, useReducer} from 'react';
import styled from 'styled-components';
import { Button } from 'styled-bootstrap-components';

interface IProps {
    message: string;
}
export function Greeting(props: IProps){

  const { message } = props;
  return (
    <>
      <Wrapper><Title>{message}</Title>
          <Button>Hello, World!</Button>
      </Wrapper>
    </>
  );
}



// Styled Components
var Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
var Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
var GameSection = styled.div`
  margin-top: 15px;
`
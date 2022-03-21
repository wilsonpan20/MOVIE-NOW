import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 100px;
  border-radius: 4px;
  border: 1px;
  border-color: #fff;
  border-style: solid;
`;

export const Title = styled.h1`
  margin-top: 50px;
  color: #fff;
`;

export const Information = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #d5d5d5;
`;

export const List = styled.ul`
  /* TOP RIGHT BOTTOM LEFT */
  padding: 100px 10px 10px 10px;
  list-style: none;
  width: 70%;

  > li {
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
`;

export const StyledButton = styled(Button)``;

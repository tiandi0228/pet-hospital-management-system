import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #ccc;

  & {
    outline: none;
  }
  
  &:focus {
    border: 1px solid #FFB437;
  }
`;
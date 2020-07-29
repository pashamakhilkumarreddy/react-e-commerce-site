import styled from 'styled-components';

const ButtonContainer = styled.button `
  text-transform: capitalize; 
  transition: all 0.5s ease-in-out;
  &:hover {
    background: transparent;
  }
  &:focus {
    outline: none;
  }
`;

const BorderLessButton = styled(ButtonContainer)`
  border: none;
  background: none;
  outline: none;
  padding: 0;
`;

export {
  ButtonContainer,
  BorderLessButton
}
import styled from "styled-components"

export const CartButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  border: none;
  background-color: ${ props => props.theme['yellow-light']};
  color: ${ props => props.theme['yellow-dark']};

  cursor: pointer;
`
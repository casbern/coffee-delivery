import styled from "styled-components"

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: .8rem;
  height: 3.8rem;

  border-radius: 6px;
  background: ${ props => props.theme["base-button"]};

  span {
    width: 20px;
    color: ${ props => props.theme["base-title"]};
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${ props => props.theme.purple};
    cursor: pointer;
  }
`